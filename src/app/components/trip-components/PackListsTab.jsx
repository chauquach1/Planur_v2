"use client";
import { useState, useEffect } from "react";
import StopsCard from "../../components/trip-components/StopsCard";
import { Card, CardBody } from "@nextui-org/react";


export default function PackListsTab({ tripId, getPackList, packList, panelType, currCardData, currCardType, prevCardData, prevCardType, handleCardPress }) {
  useEffect(() => {
    getPackList();
  }, [tripId]);


  const categoryCount = (category) => {
    let list = packList[category]; // Access the category in sampleList
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
        isBlurred
        className="data-[hover=true]:bg-content2 dark:data-[hover=true]:bg-content2 w-full max-w-xs sm:max-w-[300px] md:max-w-[400px] border my-1 shadow-lg bg-background/60 dark:bg-default-100/50"
        onPress={()=>console.log("ClothesCard pressed")}
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
        isBlurred
        className="data-[hover=true]:bg-content2 dark:data-[hover=true]:bg-content2 w-full max-w-xs sm:max-w-[300px] md:max-w-[400px] border my-1 shadow-lg bg-background/60 dark:bg-default-100/50"
        onPress={()=>console.log("Luggage Card pressed")}
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
        isBlurred
        className="data-[hover=true]:bg-content2 dark:data-[hover=true]:bg-content2 w-full max-w-xs sm:max-w-[300px] md:max-w-[400px] border my-1 shadow-lg bg-background/60 dark:bg-default-100/50"
        onPress={()=>console.log("Toiletries Card pressed")}
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
        isBlurred
        className="data-[hover=true]:bg-content2 dark:data-[hover=true]:bg-content2 w-full max-w-xs sm:max-w-[300px] md:max-w-[400px] border my-1 shadow-lg bg-background/60 dark:bg-default-100/50"
        onPress={()=>console.log("Miscellaneous Card pressed")}
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
        isBlurred
        className="data-[hover=true]:bg-content2 dark:data-[hover=true]:bg-content2 w-full max-w-xs sm:max-w-[300px] md:max-w-[400px] border my-1 shadow-lg bg-background/60 dark:bg-default-100/50"
        onPress={()=>console.log("Emergency Contact pressed")}
      >
        <CardBody>
          <div className="flex flex-col">
            <div className="row flex flex-row flex-wrap justify-between items-baseline">
              <p className="text-md inline-block align-baseline">
                Emergency Contact
              </p>
            </div>
            <p className="text-small text-default-500">
              {sampleList.emergencyContact.firstName} {sampleList.emergencyContact.lastName}
            </p>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
