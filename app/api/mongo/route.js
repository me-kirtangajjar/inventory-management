import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

// Replace the following with your Atlas connection string
const url = process.env.MONGODBURL;

// Connect to your Atlas cluster
const client = new MongoClient(url);

export async function GET(request) {
  try {
    await client.connect();

    return NextResponse.json({ msg: "Successfully connected to Atlas" });
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}
