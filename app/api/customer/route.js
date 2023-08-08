import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const url = process.env.MONGODBURL;
const client = new MongoClient(url);
const dbName = "InventoryManagement";

export async function POST(request) {
  try {
    await client.connect();
    const db = client.db(dbName);

    const customers = db.collection("customers");

    // Insert a single document, wait for promise so we can read it back
    const customer = await customers.insertOne(await request.json());

    if (customer) {
      return NextResponse.json({ status: true });
    } else {
      return NextResponse.json({ status: false });
    }
  } catch (err) {
    console.log(err.stack);
  }
}

export async function GET(request) {
  try {
    return NextResponse.json({ status: true });
  } catch (error) {
    console.log(error);
  }
}
