import { faker } from '@faker-js/faker';


// let sampleStops = [
//   {
//     "_id": "65619185f0a35c213aeda7df",
//     "stopName": "Shibuya",
//     "stopAddress": {
//       "street": "717 Merit Dr",
//       "city": "San Marcos",
//       "state": "California",
//       "zip": "92078",
//       "country": "United States"
//     },
//     "stopArrival": "2024-01-03T00:00:00Z",
//     "stopDeparture": "2024-01-04T00:00:00Z",
//     "stopType": "Landmark",
//     "stopTransportation": "Car",
//     "stopInterest": "Must-Go",
//     "stopResNum": "",
//     "stopNotes": "",
//     "stopPhoneNumber": "8589223709",
//     "stopEmail": "chau268@gmail.com",
//     "createdAt": "2023-11-25T06:17:41.832Z",
//     "updatedAt": "2023-11-25T06:17:41.832Z",
//     "__v": 0
//   },
//   {
//     "_id": "656194a0637a2dfcc1a182d3",
//     "stopName": "Some Place",
//     "stopAddress": {
//       "street": "717 Merit Dr",
//       "city": "San Marcos",
//       "state": "California",
//       "zip": "92078",
//       "country": "United States"
//     },
//     "stopArrival": "2024-01-02T00:00:00Z",
//     "stopDeparture": "2024-01-05T00:00:00Z",
//     "stopType": "Landmark",
//     "stopTransportation": "Car",
//     "stopInterest": "High",
//     "stopResNum": "",
//     "stopNotes": "",
//     "stopPhoneNumber": "8589223709",
//     "stopEmail": "chau268@gmail.com",
//     "createdAt": "2023-11-25T06:30:56.927Z",
//     "updatedAt": "2023-11-25T06:30:56.927Z",
//     "__v": 0
//   },
//   {
//     "_id": "6562a32efee4f47764f27099",
//     "stopName": "tgestsets",
//     "stopAddress": {
//       "street": "",
//       "city": "",
//       "state": "",
//       "zip": "",
//       "country": ""
//     },
//     "stopArrival": "2023-12-09T00:00:00Z",
//     "stopDeparture": "2023-12-28T00:00:00Z",
//     "stopType": "Restaurant",
//     "stopTransportation": "",
//     "stopInterest": "Must-Go",
//     "stopResNum": "",
//     "stopNotes": "",
//     "stopPhoneNumber": "",
//     "stopEmail": "",
//     "createdAt": "2023-11-26T01:45:18.829Z",
//     "updatedAt": "2023-11-26T01:45:18.829Z",
//     "__v": 0
//   }
// ]

const sampleStops = [
  {
    stopName: 'Golden Gate Bridge',
    stopAddress: {
      street: '344 Celine Centers',
      city: 'Manteca',
      state: 'California',
      zip: '63890',
      country: 'Eritrea'
    },
    stopArrival: '2024-04-01T03:00:05.717Z',
    stopDeparture: '2024-10-07T12:28:28.306Z',
    stopType: 'Landmark',
    stopTransportation: 'Bus',
    stopInterest: 'Must-Go',
    stopNotes: 'Iconic bridge in San Francisco'
  },
  {
    stopName: 'Joe\'s Restaurant',
    stopAddress: {
      street: '57508 Alek Mews',
      city: 'Funkland',
      state: 'Oregon',
      zip: '13883-9053',
      country: 'Fiji'
    },
    stopArrival: '2024-04-05T16:34:49.163Z',
    stopDeparture: '2024-08-21T18:20:36.176Z',
    stopType: 'Restaurant',
    stopTransportation: 'Taxi',
    stopInterest: 'High',
    stopNotes: 'Famous local restaurant'
  },
  {
    stopName: 'Grand Canyon',
    stopAddress: {
      street: '8417 Zulauf Fields',
      city: 'West Arnaldo',
      state: 'North Carolina',
      zip: '27890-7371',
      country: 'Namibia'
    },
    stopArrival: '2024-08-15T20:30:56.571Z',
    stopDeparture: '2024-02-28T17:43:08.920Z',
    stopType: 'Attractions',
    stopTransportation: 'Flight',
    stopInterest: 'Must-Go',
    stopNotes: 'Natural wonder of the world'
  },
  {
    stopName: 'Smithsonian Museum',
    stopAddress: {
      street: '78455 Laury Rapid',
      city: 'Lake Lizeth',
      state: 'Wyoming',
      zip: '65612-9263',
      country: 'Jersey'
    },
    stopArrival: '2024-07-22T19:24:38.716Z',
    stopDeparture: '2024-03-05T12:51:11.212Z',
    stopType: 'Museum',
    stopTransportation: 'Ride Share',
    stopInterest: 'High',
    stopNotes: 'World-renowned museum'
  },
  {
    stopName: 'Friend\'s House',
    stopAddress: {
      street: '925 9th Street',
      city: 'Tomasport',
      state: 'North Dakota',
      zip: '30513-6269',
      country: 'Rwanda'
    },
    stopArrival: '2024-02-09T00:17:03.342Z',
    stopDeparture: '2024-08-25T08:03:14.761Z',
    stopType: 'Friends',
    stopTransportation: 'Ride Share',
    stopInterest: 'Medium',
    stopNotes: 'Visit a friend in Tomasport'
  },
  {
    stopName: 'Colosseum',
    stopAddress: {
      street: '7247 James Street',
      city: 'Lake Alexandro',
      state: 'Indiana',
      zip: '45963',
      country: 'Italy'
    },
    stopArrival: '2024-06-06T06:51:47.365Z',
    stopDeparture: '2024-09-17T11:11:32.896Z',
    stopType: 'Landmark',
    stopTransportation: 'Taxi',
    stopInterest: 'Must-Go',
    stopNotes: 'Historical Roman amphitheater'
  },
  {
    stopName: 'Local Diner',
    stopAddress: {
      street: '42542 Howe Vista',
      city: 'Estelfurt',
      state: 'Wisconsin',
      zip: '19649-9415',
      country: 'Lithuania'
    },
    stopArrival: '2024-03-30T09:25:56.127Z',
    stopDeparture: '2024-10-05T14:42:30.029Z',
    stopType: 'Restaurant',
    stopTransportation: 'Bus',
    stopInterest: 'Medium',
    stopNotes: 'Try local cuisine'
  },
  {
    stopName: 'National Park',
    stopAddress: {
      street: '6339 E Union Street',
      city: 'New Jodycester',
      state: 'Washington',
      zip: '22241-9013',
      country: 'Tanzania'
    },
    stopArrival: '2024-10-06T03:19:28.014Z',
    stopDeparture: '2023-12-22T09:11:11.724Z',
    stopType: 'Attractions',
    stopTransportation: 'Flight',
    stopInterest: 'High',
    stopNotes: 'Explore the national park'
  },
  {
    stopName: 'Beach Resort',
    stopAddress: {
      street: '3108 Kerluke Loop',
      city: 'Ratkefield',
      state: 'California',
      zip: '18467',
      country: 'Heard Island and McDonald Islands'
    },
    stopArrival: '2024-11-05T03:13:07.863Z',
    stopDeparture: '2024-08-11T09:25:58.101Z',
    stopType: 'Attractions',
    stopTransportation: 'Boat',
    stopInterest: 'High',
    stopNotes: 'Relax at the beach resort'
  },
  {
    stopName: 'Local Cafe',
    stopAddress: {
      street: '7596 W Front Street',
      city: 'Fabianton',
      state: 'Michigan',
      zip: '75059-2199',
      country: 'Saudi Arabia'
    },
    stopArrival: '2024-05-25T16:33:57.012Z',
    stopDeparture: '2024-08-03T08:12:33.046Z',
    stopType: 'Restaurant',
    stopTransportation: 'Ride Share',
    stopInterest: 'Medium',
    stopNotes: 'Try local coffee shop'
  }
];


console.log('sampleStops: ', sampleStops);

export default sampleStops;