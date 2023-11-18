"use client";
import { useState, useEffect } from "react";
import StopsCard from "../../components/trip-components/StopsCard";
import { Card, CardBody } from "@nextui-org/react";


export default function PackListsTab({ tripId, getPackList, packList, currCardData, currCardType, prevCardData, prevCardType, handleCardPress }) {

  const categoryCount = (category) => {
    let list = packList[category]; // Access the category in packlist
    let count = 0;
    Object.values(list).forEach((item) => { // Use forEach for iterating
      if (item === true) {
        count++;
      }
    });
    return count;
  }

  return (
    <>
      <Card
        isHoverable
        isPressable
        // isBlurred
        className="w-full border my-1 shadow-lg"
        onPress={()=>handleCardPress(packList, 'packLists')}
      >
        <CardBody>
          <div className="flex flex-col">
            <div className="row flex flex-row flex-wrap justify-between items-baseline">
              <p className="text-md inline-block align-baseline">
                Clothes
              </p>
            </div>
            <p className="text-small text-default-500">
              {categoryCount('clothes')} Items
            </p>
          </div>
        </CardBody>
      </Card>
      <Card
        isHoverable
        isPressable
        // isBlurred
        className="w-full border my-1 shadow-lg"
        onPress={()=>handleCardPress(packList, 'packLists')}
      >
        <CardBody>
          <div className="flex flex-col">
            <div className="row flex flex-row flex-wrap justify-between items-baseline">
              <p className="text-md inline-block align-baseline">
                Luggage
              </p>
            </div>
            <p className="text-small text-default-500">
            {categoryCount('luggage')} Items
            </p>
          </div>
        </CardBody>
      </Card>
      <Card
        isHoverable
        isPressable
        // isBlurred
        className="w-full border my-1 shadow-lg bg-white"
        onPress={()=>handleCardPress(packList, 'packLists')}
      >
        <CardBody>
          <div className="flex flex-col">
            <div className="row flex flex-row flex-wrap justify-between items-baseline">
              <p className="text-md inline-block align-baseline">
                Toiletries
              </p>
            </div>
            <p className="text-small text-default-500">
            {categoryCount('toiletries')} Items
            </p>
          </div>
        </CardBody>
      </Card>
      <Card
        isHoverable
        isPressable
        // isBlurred
        className="w-full border my-1 shadow-lg"
        onPress={()=>handleCardPress(packList, 'packLists')}
      >
        <CardBody>
          <div className="flex flex-col">
            <div className="row flex flex-row flex-wrap justify-between items-baseline">
              <p className="text-md inline-block align-baseline">
                Miscellaneous
              </p>
            </div>
            <p className="text-small text-default-500">
            {categoryCount('miscellaneous')} Items
            </p>
          </div>
        </CardBody>
      </Card>
      <Card
        isHoverable
        isPressable
        // isBlurred
        className="w-full border my-1 shadow-lg"
        onPress={()=>handleCardPress(packList, 'packLists')}
      >
        <CardBody>
          <div className="flex flex-col">
            <div className="row flex flex-row flex-wrap justify-between items-baseline">
              <p className="text-md inline-block align-baseline">
                Emergency Contact
              </p>
            </div>
            <p className="text-small text-default-500">
              {packList.emergencyContact.firstName} {packList.emergencyContact.lastName}
            </p>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
