import {mongoClient} from "../../libs/mongo/mongodb";
import { ObjectId } from "mongodb";
import EmergencyContact from "../../models/emergencyContact";
import { NextResponse } from "next/server";

export async function contactsFetch(request){
  const rawFormData = await request.json();
  console.log('CONTACTS FETCH contact', rawFormData);
}

export async function POST(request) {
  console.log('POST CONTACT ROUTE HIT');
  const tripId = request.nextUrl.searchParams.get('tripId')
  const rawFormData = await request.json();
  console.log('rawFormData', rawFormData);

  try {
    const client = await mongoClient();
    const db = client.db("planur_v2");
    const tripCollection = db.collection("emergencyContacts");
    
  
    if (!tripId) {
      return NextResponse.json({ error: "Trip ID parameter is missing" }, { status: 400 });
    }
    const trip = await tripCollection.findOne({ _id: new ObjectId(tripId) });

    if (!trip) {
      return NextResponse.json({ error: "Trip not found" }, { status: 402 });
    }

    // Create a new contact
    const newContact = new EmergencyContact({
      firstName: rawFormData.firstName,
      lastName: rawFormData.lastName,
      phoneNumber: rawFormData.phoneNumber,
      email: rawFormData.email,
      relationship: rawFormData.relationship,
      // Only include address if it's not undefined
      ...(rawFormData.address && {
        address: {
          street: rawFormData.address.street || "",
          city: rawFormData.address.city || "",
          state: rawFormData.address.state || "",
          zip: rawFormData.address.zip || "",
          country: rawFormData.address.country || "",
        },
      }),
    });
    
    await newContact.save();
    if (!newContact) {
      return NextResponse.json({ error: "EmergencyContact not created" }, { status: 403 });
    }
    
    
    await tripCollection.updateOne(
      { _id: new ObjectId(tripId) },
      { $push: { contacts: newContact._id } }
      );
    
      console.log("newContact", newContact);
      // Return the contact
    return NextResponse.json(newContact, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }

}

export async function PUT(request) {
  console.log('PUT CONTACT ROUTE HIT');
  const  updatedContact  = await request.json();
  const contactId = updatedContact._id;
  try {
    const client = await mongoClient();
    const db = client.db("planur_v2");
    const emergencyContactsCollection = db.collection("emergencyContacts");
    
    const contact = await emergencyContactsCollection.findOne({ _id: new ObjectId(contactId) });
    if (!contact) {
      console.log('contact not found', contact);
      return NextResponse.json({ error: "Contact not found" }, { status: 402 });
    } else {
      console.log('contact found', contact);
    }

    // Create a new contact
    const contactToUpdate = await EmergencyContact.findByIdAndUpdate(
      { _id: new ObjectId(contactId) },
      {
        firstName: updatedContact.firstName,
        lastName: updatedContact.lastName,
        phoneNumber: updatedContact.phoneNumber,
        email: updatedContact.email,
        relationship: updatedContact.relationship,
        address: updatedContact.address,
      },
      { new: true } // This option returns the updated document
    );

    if (!contactToUpdate) {
      return NextResponse.json(
        { error: "EmergencyContact not found or update failed" },
        { status: 404 }
      );
    }

    return NextResponse.json(contactToUpdate, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(request) {
  console.log("DELETE CONTACT ROUTE HIT");
  const contactId = request.nextUrl.searchParams.get("contactId");
  const tripId = request.nextUrl.searchParams.get("tripId");
  console.log("contactId", contactId);
  try {
    const client = await mongoClient();
    const db = client.db("planur_v2");
    const emergencyContactsCollection = db.collection("emergencyContacts");
    const tripsCollection = db.collection("trips");

    // Convert string IDs to ObjectId
    const accomObjectId = new ObjectId(contactId);
    const tripObjectId = new ObjectId(tripId);

    console.log('finding trip');
    const trip = await tripsCollection.findOne({ _id: tripObjectId });
    if (!trip) {
      return NextResponse.json({ error: "Trip not found" }, { status: 402 });
    }

    // Remove the contact ID from the trip's contacts array
    console.log('removing contact from trip');
    await tripsCollection.updateOne(
      { _id: tripObjectId },
      { $pull: { emergencyContacts: accomObjectId } }
    );

    // Delete the contact document from contact collection
    console.log('deleting contact with _id', accomObjectId);
    const contact = await emergencyContactsCollection.findOneAndDelete({
      _id: accomObjectId,
    });
    
    console.log('finding if accom still exists in contact collection');
    if (!contact.value) {
      return NextResponse.json({ message: "EmergencyContact not found in emergencyContacts" }, { status: 200 });
    }

    return NextResponse.json({ message: "Contact deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET(request) {
  const client = await mongoClient();

  try {
    const tripId = request.nextUrl.searchParams.get('tripId')
    
    if (!tripId) {
      return NextResponse.json({ error: "TripId parameter is missing" }, { status: 400 });
    }

    const db = client.db("planur_v2");
    const emergencyContactsCollection = db.collection("emergencyContacts");
    const contactsCollection = db.collection("contacts");

    const trip = await emergencyContactsCollection.findOne({ _id: new ObjectId(tripId)})
    if (!trip || !trip.contacts) {
      return NextResponse.json({ error: "EmergencyContacts not found" }, { status: 401 });
    }
    const contacts = await contactsCollection.find({ _id: { $in: trip.contacts.map(id => new ObjectId(id)) }}).toArray();

    return NextResponse.json( contacts , { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
