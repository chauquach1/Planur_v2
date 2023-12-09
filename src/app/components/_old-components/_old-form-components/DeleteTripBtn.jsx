'use client'
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function DeleteTripBtn({ tripId }) {
  // const data = currCardData;
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const response = await fetch(`https://planur-v2.vercel.app/api/trip/${tripId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
      }
      router.push("/trips");
    } catch (error) {
      // console.error(error);
    }
  };

  return (
    <Button className="max-w-fit bg-transparent text-blue-400 self-end" size="sm" variant="flat" color="danger" onPress={handleDelete}>
      Delete
    </Button>
  );
}
