"use client";
import { Button } from "@nextui-org/react";
import Input from "../form-components/Input";
import SelectAccom from "../form-components/SelectAccom";
import { useEffect, useState, useRef } from "react";
import {numDateFormat}  from "../../_utils/dateFormatterIndex";
import { postAccom, putAccom  } from "../../_utils/accomsRequestsIndex";
import SideContainer from "../user-dashboard-components/content-side-components/SideContainer";
import SlideOutForm from "../user-dashboard-components/content-side-components/SlideOutForm";
import { set } from "date-fns";

export default function NewAccomsForm({displayProps, tripProps, requestProps, accomProps }) {
  const [accomType, setAccomType] = useState(accomProps.activeAccom?.accomType || '');
  const [initialState, setInitialState] = useState(accomProps.activeAccom || {});
  const [accomRequestType, setAccomRequestType] = useState("POST"); // ["POST", "PUT", "DELETE", "GET"
  const tripId = tripProps.tripId;
  const postAccomWithTripId = postAccom.bind(null, tripId)

  useEffect(() => {
    setInitialState(accomProps.activeAccom);
  }, [accomProps.activeAccom]);

  const handleCloseAccomForm = () => {
    // accomProps.setActiveAccom({});
    accomProps.setShowAccomForm(false);
  };



  // const handleSubmit = () => {
  //   // event.preventDefault(); // Prevent default form submission behavior
  //   switch (requestProps.requestType) {
  //     case "POST":
  //       postAccomWithTripId(initialState, tripId)
  //       break;
  //     case "PUT":
  //       putAccom(initialState);
  //       break;
  //     default:
  //       console.log("Request type not found");
  //   }
  // };

  const updateAccomIndex = (accomId, initialState) => {
    const newAccomIndex = accomProps.accomsIndex.map((accom) => {
      if (accom._id === accomId) {
        return initialState;
      } else {
        return accom;
      }
    });
    accomProps.setAccomsIndex(newAccomIndex);
  };

  const updateAccom = async () => {
    try {
      const updatedAccom = await putAccom(initialState);
      updateAccomIndex(initialState._id, updatedAccom);
      setInitialState(updatedAccom);
    }
    catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = () => {
    console.log('NewAccomsForm accomProps', accomProps);
    let accomsIndex = accomProps.accomsIndex;
    const originalAccom = accomsIndex.find(accom => accom._id === initialState._id);
    console.log('initialState', initialState);
    console.log('originalAccom', originalAccom);
  };

  // useEffect(() => {
  //   switch (requestProps.requestType) {
  //     case "POST":
  //       setAccomRequestType("POST");
  //       break;
  //     case "PUT":
  //       setAccomRequestType("PUT");
  //       break;
  //     case "DELETE":
  //       setAccomRequestType("DELETE");
  //       break;
  //     default:
  //       console.log("Request type not found");
  //   }
  // } , [requestProps.requestType]);


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

  // showForm functions and variables


  const isVisible = accomProps.showAccomForm ? "fixed flex" : "hidden";
  

  return (
    <div className={`${isVisible} right-0 top-0 mx-auto
    flex-col h-full w-full md:max-w-[325px] lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[600px] p-4 pb-2 bg-slate-300 rounded-tl-xl ms-2`}>
      <button className="self-end text-red-500" onClick={handleCloseAccomForm}>x Close</button>
      <form
        action={updateAccom}
        className={` h-full overflow-y-scroll flex-col`}
      >
        <div className=" flex flex-col gap-2 rounded-xl bg-white p-2">
          <div className="flex flex-row flex-wrap xl:flex-nowrap gap-3">
            <Input
              name="accomName"
              autoFocus={true}
              label="Accommodation"
              isRequired
              placeholder="Name"
              value={initialState.accomName || ""}
              onChange={(e) => handleInputChange("accomName", e.target.value)}
            />
            <SelectAccom
              className="col-span-3"
              accomType={initialState.accomType || ""}
              setAccomType={setAccomType}
            />
          </div>
          <Input
            name="accomCheckIn"
            label="Check-In Date"
            type="date"
            placeholder="mm/dd/yyyy"
            value={
              initialState && initialState.accomCheckIn
                ? numDateFormat(initialState.accomCheckIn)
                : ""
            }
            onChange={(e) => handleInputChange("accomCheckIn", e.target.value)}
            // isRequired
          />
          <Input
            name="accomCheckOut"
            label="Check-Out Date"
            type="date"
            placeholder="mm/dd/yyyy"
            value={
              initialState && initialState.accomCheckOut
                ? numDateFormat(initialState.accomCheckOut)
                : ""
            }
            onChange={(e) => handleInputChange("accomCheckOut", e.target.value)}
            // isRequired
          />
          <div className="flex flex-row flex-wrap xl:flex-nowrap gap-3">
            <Input
              name="accomPhoneNumber"
              label="Phone"
              value={initialState.accomPhoneNumber || ""}
              onChange={(e) =>
                handleInputChange("accomPhoneNumber", e.target.value)
              }
            />
            <Input
              name="accomEmail"
              label="Email"
              value={initialState.accomEmail || ""}
              onChange={(e) => handleInputChange("accomEmail", e.target.value)}
            />
          </div>
          <Input
            name="accomResNum"
            label="Reservation Number"
            placeholder=" "
            value={initialState.accomResNum || ""}
            onChange={(e) => handleInputChange("accomResNum", e.target.value)}
          />
          <Input
            name="street"
            label="Street"
            value={
              initialState.accomAddress
                ? initialState.accomAddress.street || ""
                : ""
            }
            onChange={(e) =>
              handleNestedInputChange("accomAddress", "street", e.target.value)
            }
          />
          <Input
            name="city"
            label="City"
            value={
              initialState.accomAddress
                ? initialState.accomAddress.city || ""
                : ""
            }
            onChange={(e) =>
              handleNestedInputChange("accomAddress", "city", e.target.value)
            }
          />
          <Input
            name="state"
            label="State/Province"
            value={
              initialState.accomAddress
                ? initialState.accomAddress.state || ""
                : ""
            }
            onChange={(e) =>
              handleNestedInputChange("accomAddress", "state", e.target.value)
            }
          />
          <Input
            name="zip"
            label="Zip/Postal Code"
            value={
              initialState.accomAddress
                ? initialState.accomAddress.zip || ""
                : ""
            }
            onChange={(e) =>
              handleNestedInputChange("accomAddress", "zip", e.target.value)
            }
          />
          <Input
            name="country"
            label="Country/Region"
            value={
              initialState.accomAddress
                ? initialState.accomAddress.country || ""
                : ""
            }
            onChange={(e) =>
              handleNestedInputChange("accomAddress", "country", e.target.value)
            }
          />
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
              ? "Add Accommodation"
              : "Update Accommodation"}
          </Button>
        </div>
      </form>
    </div>
  );
}
