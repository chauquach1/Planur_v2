import Link from "next/link"

export default function Page({ params }) {
  return (
    <>
      <h1>Trip {params.id} </h1>
    </>
  )
}