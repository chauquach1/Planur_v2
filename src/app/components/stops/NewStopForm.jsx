"use client";
import { useState } from "react";
import { NextResponse } from "next/server";
import SelectStopType from "../form-components/SelectStopType";
import SelectStopInterest from "../form-components/SelectStopInterest";
import { Button } from "@nextui-org/react";
import Input from "../form-components/Input";

export default function NewStopForm({ tripProps, stopProps, requestProps, ...props }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [initialState, setInitialState] = useState(stopProps.activeStop || {});
  const tripId = tripProps.selectedTrip._id;
  const postStopWithTripId = postStop.bind(null, tripId);

  useEffect(() => {
    setInitialState(stopProps.activeStop);
  }, [stopProps.activeStop]);


  // UPDATE STATE ACCOM INDEX
  const updateStopsIndex = (stopId, newState) => {
    // Clone the existing accomsIndex to ensure immutability
    const updatedStopsIndex = [...stopProps.stopsIndex];

    // Find the index of the stop with the given stopId
    const index = updatedStopsIndex.findIndex(
      (stop) => stop._id === stopId
    );

    if (index !== -1) {
      // If the stop exists, update it
      updatedStopsIndex[index] = newState;
    } else {
      // If the stop does not exist, add it
      updatedStopsIndex.push(newState);
    }

    // Update the state with the new stops array
    accomProps.setAccomsIndex(updatedStopsIndex);
  };

  // ASYNC POST/PUT REQUEST FUNCTIONS

  const createNewStop = async () => {
    try {
      const newStop = await postStopWithTripId(initialState);
      console.log(newStop);
      setInitialState(newStop);
      setFormSubmitted(true);
    } catch (err) {
      console.log(err);
      setFormSubmitted(false);
    }
  };

  const updateStop = async () => {
    try {
      const updatedStop = await putStop(initialState);
      setInitialState(updatedStop);
      setFormSubmitted(true);
    }
    catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = () => {
    switch (requestProps.requestType) {
      case "POST":
        createNewStop();
        break;
      case "PUT":
        updateStop();
        break;
      default:
        console.log("Request type not found");
    }
  };


  // FORM SUBMISSION STATE STATUS
  useEffect(() => {
    if (formSubmitted) {
      updateStopsIndex(initialState._id, initialState);
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


  const isVisible = stopProps.showStopForm ? "fixed flex" : "hidden";

  return (
    <div  className={`${isVisible} right-0 top-0 mx-auto
    flex-col h-full w-full md:max-w-[325px] lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[600px] p-4 pb-2 bg-slate-300 rounded-tl-xl ms-2`}>
      <button className="self-end text-red-500" onClick={() => stopProps.setShowStopForm(false)}>x Close</button>
      <form
        onSubmit={handleSubmit}
        className={`h-full overflow-y-scroll flex-col`}
      >
        <div className="flex flex-col gap-2 rounded-xl bg-white p-2">
          <Input
            autoFocus={true}
            label="Stop Name"
            placeholder="e.g Golden Gate Bridge"
            value={stopName}
            onChange={(e) => setStopName(e.target.value)}
            isRequired
          />
          <div className="grid grid-cols-4 flex-wrap xl:flex-nowrap gap-2">
            <SelectStopType setStopType={setStopType} />
            <SelectStopInterest setStopInterest={setStopInterest} />
          </div>
          <div className="flex flex-row flex-wrap xl:flex-nowrap gap-2">
            <Input
              label="Arrival Date"
              type="date"
              placeholder="mm/dd/yyyy"
              value={stopArrival}
              onChange={(e) => setStopArrival(e.target.value)}
              isRequired
            />
            <Input
              label="Departure Date"
              type="date"
              placeholder="mm/dd/yyyy"
              value={stopDeparture}
              onChange={(e) => setStopDeparture(e.target.value)}
              isRequired
            />
          </div>
          <Input
            label="Transportation"
            placeholder="Car, Plane, Train, etc."
            value={stopTransportation}
            onChange={(e) => setStopTransportation(e.target.value)}
          />
          <div className="flex flex-col lg:grid lg:grid-cols-6 md:grid-rows-2 gap-2">
            <Input
              label="Street"
              placeholder="e.g 123 Main St"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              autoComplete="off"
              className="col-span-6"
            />
            <Input
              label="City"
              placeholder="e.g San Francisco"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              autoComplete="off"
              className="col-span-3"
            />
            <Input
              label="State/Province"
              value={state}
              onChange={(e) => setState(e.target.value)}
              autoComplete="off"
              className="col-span-3"
            />
            <Input
              label="Zip/Postal"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              autoComplete="off"
              className="col-span-3 "
            />
            <Input
              label="Country/Region"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              autoComplete="off"
              className="col-span-3"
            />
          </div>
          <Input
            label="Email"
            value={stopEmail}
            onChange={(e) => setStopEmail(e.target.value)}
            autoComplete="off"
          />
          <Input
            label="Reservation/Confirmation"
            value={stopResNum}
            onChange={(e) => setStopResNum(e.target.value)}
            autoComplete="off"
          />
          <Input
            label="Phone Number"
            value={stopPhoneNumber}
            onChange={(e) => setStopPhoneNumber(e.target.value)}
            autoComplete="off"
          />
          <Input
            onChange={(e) => setStopNotes(e.target.value)}
            autoComplete="off"
            maxRows={3}
            value={stopNotes}
            label="Notes"
          ></Input>
        </div>
        <div
          id="submit-btn-container"
          className="flex flex-row mt-2 w-full justify-center pt-2"
        >
          <Button
            color="success"
            radius="full"
            className="text-white"
            type="submit"
            // disabled={isSubmitting}
            size="sm"
          >
            {requestProps.requestType === "POST"
              ? "Add Stop"
              : "Update Stop"}
          </Button>
        </div>
      </form>
    </div>
  );
}
