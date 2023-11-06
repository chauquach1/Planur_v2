// User Sample Data
const sampleUser = {
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com",
  uuid: "1234567890", // UUID obtained from Supabase Auth
  trips: [] // You can add trip IDs here once you create trips
}

const sampleTrip = {
  accommodations: [],
  address: "123 Main St",
  destination: "Paris, France",
  startDate: "2023-01-01",
  endDate: "2023-01-10",
  guests: "2",
  stops: [],
  reason: "Vacation",
  transportation: "Flight",
  tripName: "Paris Adventure",
  packLists: {} // Your packLists data here
}

const sampleAccommodation = {
  name: "Hotel ABC",
  type: "Hotel",
  checkIn: "2023-01-01",
  checkOut: "2023-01-05",
  address: "456 Hotel Rd",
  phoneNumber: "+1234567890",
  email: "hotel@example.com",
  resNum: "1234567890"
}

const sampleStop = {
  stopName: "Eiffel Tower",
  address: "Eiffel Tower Address",
  arrival: "2023-01-02",
  departure: "2023-01-02",
  type: "Sightseeing",
  transportation: "Walking",
  interest: "Landmark",
  resNum: "9876543210",
  notes: "Remember to take photos!"
}

const samplePackList = {
  clothes: {
    shirts: true,
    pants: true,
    shorts: false,
    sweater: true,
    underwear: true
  },
  luggage: {
    backpack: false,
    carryon: true,
    dufflebag: false,
    suitcase: true,
    garmentbag: false
  },
  toiletries: {
    toothbrush: true,
    toothpaste: true,
    shampoo: true,
    conditioner: false,
    sunscreen: true
  },
  miscellaneous: {
    cellphone: true,
    laptop: false,
    tablet: true,
    passport: true,
    medication: true
  },
  emergencyContact: {
    firstName: "Jane",
    lastName: "Doe",
    phoneNumber: "+9876543210",
    email: "jane@example.com",
    address: "Emergency Contact Address",
    relationship: "Friend"
  }
}
