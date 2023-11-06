import connectMongoDB from "../../libs/mongo/mongodb";
import UserModel from "../../models/user";
import { NextResponse } from "next/server";

export async function POST (request) {
  const {firstname, lastname, email, password, uuid} = await request.json();
  // const body = await request.JSON;
  await connectMongoDB();
  await UserModel.create({firstname, lastname, email, password, uuid});
  return NextResponse.json({message: "User created."}, {status: 201})
}