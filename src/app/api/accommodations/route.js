import {mongoClient} from "../../libs/mongo/mongodb";
import { ObjectId } from "mongodb";
import Accommodation from "../../models/accommodation";
import { NextResponse } from "next/server";


export async function POST(request) {
  console.log('POST ACCOM ROUTE HIT');
  const tripId = request.nextUrl.searchParams.get('tripId')
  const rawFormData = await request.json();
  console.log('rawFormData', rawFormData);

  try {
    const client = await mongoClient();
    const db = client.db("planur_v2");
    const tripCollection = db.collection("trips");
    
  
    if (!tripId) {
      return NextResponse.json({ error: "Trip ID parameter is missing" }, { status: 400 });
    }
    const trip = await tripCollection.findOne({ _id: new ObjectId(tripId) });

    if (!trip) {
      return NextResponse.json({ error: "Trip not found" }, { status: 402 });
    }

    // Create a new accommodation
    const newAccommodation = new Accommodation({
      accomName: rawFormData.accomName,
      accomType: rawFormData.accomType,
      accomCheckIn: rawFormData.accomCheckIn,
      accomCheckOut: rawFormData.accomCheckOut,
      // Only include accomAddress if it's not undefined
      ...(rawFormData.accomAddress && {
        accomAddress: {
          street: rawFormData.accomAddress.street || "",
          city: rawFormData.accomAddress.city || "",
          state: rawFormData.accomAddress.state || "",
          zip: rawFormData.accomAddress.zip || "",
          country: rawFormData.accomAddress.country || "",
        },
      }),
      accomResNum: rawFormData.accomResNum,
      accomPhoneNumber: rawFormData.accomPhoneNumber,
      accomEmail: rawFormData.accomEmail,
    });
    
    await newAccommodation.save();
    if (!newAccommodation) {
      return NextResponse.json({ error: "Accommodation not created" }, { status: 403 });
    }
    
    
    await tripCollection.updateOne(
      { _id: new ObjectId(tripId) },
      { $push: { accommodations: newAccommodation._id } }
      );
    
      console.log("newAccommodation", newAccommodation);
      // Return the accommodation
    return NextResponse.json(newAccommodation, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }

}

export async function PUT(request) {
  console.log('PUT ACCOM ROUTE HIT');
  const  updatedAccom  = await request.json();
  const accomId = updatedAccom._id;
  try {
    const client = await mongoClient();
    const db = client.db("planur_v2");
    const accomCollection = db.collection("accommodations");
    
    const accom = await accomCollection.findOne({ _id: new ObjectId(accomId) });
    if (!accom) {
      console.log('accom not found', accom);
      return NextResponse.json({ error: "Accom not found" }, { status: 402 });
    } else {
      console.log('accom found', accom);
    }

    // Create a new accommodation
    const accomToUpdate = await Accommodation.findByIdAndUpdate(
      { _id: new ObjectId(accomId) },
      {
        accomName: updatedAccom.accomName,
        accomType: updatedAccom.accomType,
        accomCheckIn: updatedAccom.accomCheckIn,
        accomCheckOut: updatedAccom.accomCheckOut,
        accomAddress: updatedAccom.accomAddress,
        accomPhoneNumber: updatedAccom.accomPhoneNumber,
        accomEmail: updatedAccom.accomEmail,
        accomResNum: updatedAccom.accomResNum,
      },
      { new: true } // This option returns the updated document
    );

    if (!accomToUpdate) {
      return NextResponse.json(
        { error: "Accommodation not found or update failed" },
        { status: 404 }
      );
    }

    return NextResponse.json(accomToUpdate, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(request) {
  console.log("DELETE ACCOM ROUTE HIT");
  const accomId = request.nextUrl.searchParams.get("accomId");
  const tripId = request.nextUrl.searchParams.get("tripId");
  console.log("accomId", accomId);
  try {
    const client = await mongoClient();
    const db = client.db("planur_v2");
    const tripsCollection = db.collection("trips");
    const accomsCollection = db.collection("accommodations");

    // Convert string IDs to ObjectId
    const accomObjectId = new ObjectId(accomId);
    const tripObjectId = new ObjectId(tripId);

    console.log('finding trip');
    const trip = await tripsCollection.findOne({ _id: tripObjectId });
    if (!trip) {
      return NextResponse.json({ error: "Trip not found" }, { status: 402 });
    }

    // Remove the accommodation ID from the trip's accommodations array
    console.log('removing accom from trip');
    await tripsCollection.updateOne(
      { _id: tripObjectId },
      { $pull: { accommodations: accomObjectId } }
    );

    // Delete the accommodation document from accommodation collection
    console.log('deleting accommodation with _id', accomObjectId);
    const accommodation = await accomsCollection.findOneAndDelete({
      _id: accomObjectId,
    });
    
    console.log('finding if accom still exists in accommodation collection');
    if (!accommodation.value) {
      return NextResponse.json({ message: "Accommodation not found in accomsCollection" }, { status: 200 });
    }

    return NextResponse.json({ message: "Accom deleted" }, { status: 200 });
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
    const tripsCollection = db.collection("trips");
    const accommodationsCollection = db.collection("accommodations");

    const trip = await tripsCollection.findOne({ _id: new ObjectId(tripId)})
    if (!trip || !trip.accommodations) {
      return NextResponse.json({ error: "Accommodations not found" }, { status: 401 });
    }
    const accommodations = await accommodationsCollection.find({ _id: { $in: trip.accommodations.map(id => new ObjectId(id)) }}).toArray();

    return NextResponse.json( accommodations , { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
