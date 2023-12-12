import { defaultConfig } from "next/dist/server/config-shared"

let sampleAccoms = [
  {
    "_id": "65619150f0a35c213aeda7db",
    "accomName": "Some Resort",
    "accomType": "Vacation Rental",
    "accomCheckIn": "2024-01-01T00:00:00Z",
    "accomCheckOut": "2024-01-24T00:00:00Z",
    "accomAddress": {
      "street": "717 Merit Dr",
      "city": "San Marcos",
      "state": "California",
      "zip": "92078",
      "country": "United States"
    },
    "accomPhoneNumber": "8589223709",
    "accomEmail": "chau268@gmail.com",
    "accomResNum": "235",
    "createdAt": "2023-11-25T06:16:48.206Z",
    "updatedAt": "2023-11-25T06:16:57.054Z",
    "__v": 0
  },
  {
    "_id": "656194d480a30371da4df135",
    "accomName": "Hotel",
    "accomType": "Hotel",
    "accomCheckIn": "2024-01-02T00:00:00Z",
    "accomCheckOut": "2024-01-30T00:00:00Z",
    "accomAddress": {
      "street": "717 Merit Dr",
      "city": "San Marcos",
      "state": "California",
      "zip": "92078",
      "country": "United States"
    },
    "accomPhoneNumber": "8589223709",
    "accomEmail": "chau268@gmail.com",
    "accomResNum": "2354654",
    "createdAt": "2023-11-25T06:31:48.387Z",
    "updatedAt": "2023-11-25T06:31:48.387Z",
    "__v": 0
  },
  {
    "_id": "6561fee040d4f06671dcf1c4",
    "accomName": "Jungle paradise ",
    "accomType": "Hotel",
    "accomCheckIn": "2023-11-27T00:00:00Z",
    "accomCheckOut": "2023-11-29T00:00:00Z",
    "accomAddress": {
      "street": "180 Sabin Way",
      "city": "Lochbuie",
      "state": "CO",
      "zip": "80603",
      "country": "United States"
    },
    "accomPhoneNumber": "17209366073",
    "accomEmail": "katie.pestotnik@gmail.com",
    "accomResNum": "123",
    "createdAt": "2023-11-25T14:04:16.008Z",
    "updatedAt": "2023-11-25T14:04:38.670Z",
    "__v": 0
  },
  {
    "_id": "65629d3cfee4f47764f2708e",
    "accomName": "Four Seasons",
    "accomType": "Hotel",
    "accomCheckIn": "2024-01-01T00:00:00Z",
    "accomCheckOut": "2023-12-31T00:00:00Z",
    "accomAddress": {
      "street": "Khao San",
      "city": "Bangkok",
      "state": "",
      "zip": "",
      "country": "Thailand"
    },
    "accomPhoneNumber": "777-777-7777",
    "accomEmail": "test@gmail.com",
    "accomResNum": "123",
    "createdAt": "2023-11-26T01:19:56.095Z",
    "updatedAt": "2023-11-26T01:19:56.095Z",
    "__v": 0
  },
  {
    "_id": "6562a282d2410499e5819f8c",
    "accomName": "test",
    "accomType": "Vacation Rental",
    "accomCheckIn": "2023-12-07T00:00:00Z",
    "accomCheckOut": "2023-12-09T00:00:00Z",
    "accomAddress": {
      "street": "",
      "city": "",
      "state": "",
      "zip": "",
      "country": ""
    },
    "accomPhoneNumber": "",
    "accomEmail": "",
    "accomResNum": "",
    "createdAt": "2023-11-26T01:42:26.246Z",
    "updatedAt": "2023-11-26T01:42:26.246Z",
    "__v": 0
  },
  {
    "_id": "6562a298d2410499e5819f8e",
    "accomName": "hello",
    "accomType": "Hotel",
    "accomCheckIn": "2023-11-30T00:00:00Z",
    "accomCheckOut": "2023-12-07T00:00:00Z",
    "accomAddress": {
      "street": "",
      "city": "",
      "state": "",
      "zip": "",
      "country": ""
    },
    "accomPhoneNumber": "",
    "accomEmail": "",
    "accomResNum": "",
    "createdAt": "2023-11-26T01:42:48.034Z",
    "updatedAt": "2023-11-26T01:42:48.034Z",
    "__v": 0
  },
  {
    "_id": "6562a2b8fee4f47764f27096",
    "accomName": "test",
    "accomType": "Hotel",
    "accomCheckIn": "2023-12-05T00:00:00Z",
    "accomCheckOut": "2023-12-08T00:00:00Z",
    "accomAddress": {
      "street": "",
      "city": "",
      "state": "",
      "zip": "",
      "country": ""
    },
    "accomPhoneNumber": "",
    "accomEmail": "",
    "accomResNum": "",
    "createdAt": "2023-11-26T01:43:20.984Z",
    "updatedAt": "2023-11-26T01:43:20.984Z",
    "__v": 0
  }
]

export default sampleAccoms;