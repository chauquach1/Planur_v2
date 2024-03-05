"use client";
import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import SelectReason from "../form-components/SelectReason";
import FormWrapper from "../form-components/FormWrapper";
import { putTrip  } from "../../_utils/tripRequestsIndex";
import Input from "../form-components/Input";

export default function EditTripForm({ tripProps, requestProps, ...props }) {
  const { selectedTrip, tripsIndex, setTripsIndex, showEditTripForm, setShowEditTripForm, tripId } = tripProps;
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [initialState, setInitialState] = useState(selectedTrip || {});

  

  useEffect(() => {
    setInitialState(selectedTrip);
  }, [selectedTrip]);


  // UPDATE STATE TRIPS INDEX
  const updateTripsIndex = (tripId, newState) => {
    // Clone the existing stopsIndex to ensure immutability
    const updatedTripsIndex = [tripsIndex];

    // Find the index of the trip with the given tripId
    const index = updatedTripsIndex.findIndex(
      (trip) => trip._id === tripId
    );

    if (index !== -1) {
      // If the trip exists, update it
      updatedTripsIndex[index] = newState;
    } else {
      // If the trip does not exist, add it
      updatedTripsIndex.push(newState);
    }

    // Update the state with the new stops array
    setTripsIndex(updatedTripsIndex);
  };

  // ASYNC POST/PUT REQUEST FUNCTIONS

  const createNewTrip = async () => {
    try {
      const newTrip = await postTripWithTripId(initialState);
      setInitialState(newTrip);
      setFormSubmitted(true);
    } catch (err) {
      console.log(err);
      setFormSubmitted(false);
    }
  };

  const updateTrip = async () => {
    try {
      const updatedTrip = await putTrip(initialState);
      setInitialState(updatedTrip);
      setFormSubmitted(true);
    }
    catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = () => {
    switch (requestProps.requestType) {
      case "POST":
        createNewTrip();
        break;
      case "PUT":
        updateTrip();
        break;
      default:
        console.log("Request type not found");
    }
  };


  // FORM SUBMISSION STATE STATUS
  useEffect(() => {
    if (formSubmitted) {
      updateTripsIndex(initialState._id, initialState);
      setFormSubmitted(false);
    }
  }, [formSubmitted]);


  // HANDLE INPUT CHANGE FUNCTIONS
  const handleInputChange = (key, value) => {
    setInitialState(prevState => ({
      ...prevState,
      [key]: value
    }));
  };

  const handleNestedInputChange = (parentKey, childKey, value) => {
    setInitialState(prevState => ({
      ...prevState,
      [parentKey]: {
        ...prevState[parentKey],
        [childKey]: value
      }
    }));
  };


  const isVisible = showEditTripForm ? "fixed flex" : "hidden";

  return (
    <FormWrapper
      isVisible={isVisible}
      onClick={() => setShowEditTripForm(false)}
    >
      <form action={handleSubmit} className={`flex flex-col overflow-hidden`}>
        <div className="flex flex-col gap-2 rounded-xl h-max overflow-y-scroll bg-white p-2">
        <h1 className="text-center">Update Your Trip</h1>
          <Input
            size="sm"
            autoFocus
            label="Trip Name"
            name="tripName"
            placeholder={"Enter your trip name"}
            value={initialState.tripName}
            onChange={(e) => handleInputChange("tripName", e.target.value)}
          />
          <Input
            size="sm"
            label="Destination"
            name="tripDestination"
            placeholder={"Enter your destination"}
            value={initialState.tripDestination}
            onChange={(e) =>
              handleInputChange("tripDestination", e.target.value)
            }
          />
          <div className="flex flex-row flex-wrap xl:flex-nowrap gap-2">
            <Input
              label="Arrival Date"
              type="date"
              placeholder="mm/dd/yyyy"
              value={initialState.tripStartDate}
              onChange={(e) =>
                handleInputChange("tripStartDate", e.target.value)
              }
            />
            <Input
              label="Departure Date"
              type="date"
              placeholder="mm/dd/yyyy"
              value={initialState.tripEndDate}
              onChange={(e) => handleInputChange("tripEndDate", e.target.value)}
            />
          </div>
          <SelectReason
            onChange={(e) => handleInputChange("tripReason", e.target.value)}
            selectedReason={initialState.tripReason}
          />
          <div
            id="submit-btn-container"
            className="flex flex-row mt-2 w-full justify-center pt-2"
          >
            <Button
              color="success"
              radius="full"
              className="text-white"
              type="submit"
              size="sm"
            >
              {requestProps.requestType === "POST" ? "Add Stop" : "Update Trip"}
            </Button>
          </div>
        </div>
      </form>
    </FormWrapper>
  );
}
