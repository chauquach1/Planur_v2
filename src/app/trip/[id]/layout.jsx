"use client";
const punycode = require("punycode/");
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import AccommodationsCard from "../../components/trip-components/AccommodationsCard";

// const getTripDetails = async (tripId) => {
//   const response = await fetch(`http://localhost:3000/api/trip/${tripId}`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }

//   const tripDetailsMongo = await response.json();
//   return tripDetailsMongo;
//   // console.log(trip);
// };

const sampleTrip = {
  _id: "654d66c715835f8a51afd58f",
  firstName: "Chau Quach",
  lastName: "Quach",
  trips: [
    {
      accommodations: [
        {
          name: "Marriott Tokyo",
          type: "Hotel",
          checkIn: "2024-01-03",
          checkOut: "2024-01-20",
          address:
            "TOKYO MIDTOWN 9-7-1 AKASAKA MINATO-KU, TOKYO, JAPAN, 107-6245",
          phoneNumber: "8589223709",
          email: "chau268@gmail.com",
          resNum: "30498573029475",
          _id: "654d68e615835f8a51afd59b",
          createdAt: "1699571942747",
          updatedAt: "1699571942747",
          __v: 0,
        },
        {
          name: "Halekulani Okinawa",
          type: "Hotel Resort",
          checkIn: "2024-01-20",
          checkOut: "2024-02-05",
          address:
            "1967-1 Nakama, Onna, Kunigami District, Okinawa 904-0401, Japan",
          phoneNumber: "+81 98-953-8600",
          email: "chauquach.pvt@gmail.com",
          resNum: "58293457",
          _id: "654d693b15835f8a51afd5a4",
          createdAt: "1699572027363",
          updatedAt: "1699572027363",
          __v: 0,
        },
      ],
      address: "TOKYO MIDTOWN 9-7-1 AKASAKA MINATO-KU, TOKYO, JAPAN, 107-6245",
      destination: "Tokyo, Japan",
      startDate: "2024-01-03",
      endDate: "2024-02-04",
      guests: "5",
      stops: [
        {
          stopName: "Grandma's House",
          address: "10895 Vereda Sol Del Dios, San Diego, CA 92130",
          arrival: "2024-01-07",
          departure: "2024-01-11",
          type: "House",
          transportation: "Mixed",
          interest: "Must-Go",
          resNum: "",
          notes: "Call grandma before entering",
          _id: "654d696a15835f8a51afd5af",
          createdAt: "1699572074353",
          updatedAt: "1699572074353",
          __v: 0,
        },
        {
          stopName: "Erin's House",
          address: "717 Merit Dr, San Marcos CA 92078",
          arrival: "2024-01-26",
          departure: "2024-02-02",
          type: "House",
          transportation: "Mixed",
          interest: "Must-Go",
          resNum: "",
          notes: "Gate Code: 2002",
          _id: "654d699f15835f8a51afd5bc",
          createdAt: "1699572127960",
          updatedAt: "1699572127960",
          __v: 0,
        },
      ],
      reason: "Vacation",
      transportation: "Mixed",
      tripName: "Tokyo 2024",
      _id: "654d66f215835f8a51afd592",
      createdAt: "1699571442898",
      updatedAt: "1699572143301",
      __v: 0,
      packLists: {
        clothes: {
          shirts: true,
          pants: true,
          shorts: true,
          sweater: true,
          underwear: true,
        },
        luggage: {
          backpack: true,
          carryon: true,
          dufflebag: true,
          suitcase: true,
          garmentbag: true,
        },
        toiletries: {
          toothbrush: true,
          toothpaste: true,
          shampoo: true,
          conditioner: true,
        },
      },
    },
  ],
};



export default function TripDashboard({ children, params }) {
  const trip = sampleTrip.trips[0];
  console.log('accommodations',trip.accommodations);


  let tabs = [
    {
      id: "accommodations",
      label: "Accommodations",
      content: trip.accommodations.map((accommodation) => (
        <AccommodationsCard key={accommodation._id} accommodation={accommodation} />
      )),
    },
    {
      id: "stops",
      label: "Stops",
      content: null,
    },
    {
      id: "packLists",
      label: "Packing List",
      content: null,
    },
  ];

  return (
    <div className="container bg-slate-500 h-screen items-center text-center justify-center">
      <h1 className="font-bold text-2xl">Wedding 2023</h1>
      <h1>MM/DD/YYYY - MM/DD/YYYY</h1>
      <h1>Destination: Tokyo, Japan</h1>
      <h1>Address: TOKYO MIDTOWN 9-7-1 AKASAKA MINATO-KU, TOKYO, JAPAN, 107-6245</h1>
      <h1>Travelers: 5</h1>
      <h1>Reason: Vacation</h1>
      <h1>Transportation: Mixed</h1>

      <div className="flex w-full flex-col">
        <Tabs aria-label="Dynamic tabs" items={tabs}>
          {(item) => (
            <Tab key={item.id} title={item.label}>
              <Card>
                <CardBody>{item.content}</CardBody>
              </Card>
            </Tab>
          )}
        </Tabs>
      </div>
    </div>
  );
}
