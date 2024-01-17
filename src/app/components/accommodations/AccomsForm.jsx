"use client";
import { Button } from "@nextui-org/react";
import Input from "../form-components/Input";
import SelectAccom from "../form-components/SelectAccom";
import { useEffect, useState } from "react";
import {numDateFormat}  from "../../_utils/dateFormatterIndex";
import { getAccom, postAccom, putAccom, deleteAccom  } from "../../_utils/accomsRequestsIndex";
import { set } from "date-fns";

export default function AccomsForm({ ...props }) {
  const [accomType, setAccomType] = useState('');
  const [initialState, setInitialState] = useState({});
  const [accomRequestType, setAccomRequestType] = useState("POST"); // ["POST", "PUT", "DELETE", "GET"
  const tripId = props.trip._id;
  const postAccomWithTripId = postAccom.bind(null, tripId)

  const handleSubmit = () => {
    // event.preventDefault(); // Prevent default form submission behavior
    switch (props.requestType) {
      case "POST":
        postAccomWithTripId(initialState, tripId)
        break;
      case "PUT":
        putAccom(initialState);
        break;
      case "DELETE":
        deleteAccom(initialState);
        break;
      default:
        console.log("Request type not found");
    }
  };

  useEffect(() => {
    switch (props.requestType) {
      case "POST":
        setAccomRequestType("POST");
        break;
      case "PUT":
        setAccomRequestType("PUT");
        break;
      case "DELETE":
        setAccomRequestType("DELETE");
        break;
      default:
        console.log("Request type not found");
    }
  } , [props.requestType]);

  useEffect(() => {
    console.log('accom form request type', accomRequestType);
  } , [accomRequestType]);

  useEffect(() => {
    if (props.activeAccom) {
      setInitialState(props.activeAccom);
      if (props.activeAccom.accomType) {
        setAccomType(props.activeAccom.accomType);
      }
    }
  }, [props.activeAccom]);

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
  



  return (
    <>
      <form
        action={handleSubmit}
        className={`${
          props.activeForm === "accommodation" ? "block" : "hidden"
        } h-full overflow-y-scroll flex flex-col`}
      >
        <div className=" flex flex-col gap-2 rounded-xl bg-white p-2">
          <div className="flex flex-row flex-wrap xl:flex-nowrap gap-3">
            <Input
              name="accomName"
              autoFocus={true}
              label="Accommodation"
              isRequired
              placeholder="Name"
              value={initialState.accomName || ''}
              onChange={(e) => handleInputChange('accomName', e.target.value)}
            />
            <SelectAccom className="col-span-3" accomType={accomType} setAccomType={setAccomType} />
          </div>
          <Input
            name="accomCheckIn"
            label="Check-In Date"
            type="date"
            placeholder="mm/dd/yyyy"
            value={initialState && initialState.accomCheckIn ? numDateFormat(initialState.accomCheckIn) : ''}
            onChange={(e) => handleInputChange('accomCheckIn',e.target.value)}
            // isRequired
          />
          <Input
            name="accomCheckOut"
            label="Check-Out Date"
            type="date"
            placeholder="mm/dd/yyyy"
            value={initialState && initialState.accomCheckOut ? numDateFormat(initialState.accomCheckOut) : ''}
            onChange={(e) => handleInputChange('accomCheckOut',e.target.value)}
            // isRequired
          />
          <div className="flex flex-row flex-wrap xl:flex-nowrap gap-3">
            <Input
              name="accomPhoneNumber"
              label="Phone"
              value={initialState.accomPhoneNumber || ''}
              onChange={(e) => handleInputChange('accomPhoneNumber',e.target.value)}
            />
            <Input
              name="accomEmail"
              label="Email"
              value={initialState.accomEmail || ''}
              onChange={(e) => handleInputChange('accomEmail',e.target.value)}
            />
          </div>
          <Input
            name="accomResNum"
            label="Reservation Number"
            placeholder=" "
            value={initialState.accomResNum || ''}
            onChange={(e) => handleInputChange('accomResNum',e.target.value)}
          />
          <Input
            name="street"
            label="Street"
            value={initialState.accomAddress ? initialState.accomAddress.street || '' : ''}
            onChange={(e) => handleNestedInputChange('accomAddress', 'street',e.target.value)}
          />
          <Input
            name="city"
            label="City"
            value={initialState.accomAddress ? initialState.accomAddress.city || '' : ''}
            onChange={(e) => handleNestedInputChange('accomAddress', 'city',e.target.value)}
          />
          <Input
            name="state"
            label="State/Province"
            value={initialState.accomAddress ? initialState.accomAddress.state || '' : ''}
            onChange={(e) => handleNestedInputChange('accomAddress', 'state',e.target.value)}
          />
          <Input
            name="zip"
            label="Zip/Postal Code"
            value={initialState.accomAddress ? initialState.accomAddress.zip || '' : ''}
            onChange={(e) => handleNestedInputChange('accomAddress', 'zip',e.target.value)}
          />
          <Input
            name="country"
            label="Country/Region"
            value={initialState.accomAddress ? initialState.accomAddress.country || '' : ''}
            onChange={(e) => handleNestedInputChange('accomAddress', 'country',e.target.value)}
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
            {props.requestType === "POST" ? "Add Accommodation" : "Update Accommodation"}
          </Button>
        </div>
      </form>
    </>
  );
}
