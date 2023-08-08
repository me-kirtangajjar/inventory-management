import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const url = process.env.MONGODBURL;
const client = new MongoClient(url);
const dbName = "InventoryManagement";

export async function GET(request) {
  try {
    await client.connect();
    const db = client.db(dbName);

    const customers = db.collection("customers");
    return NextResponse.json({ status: true });
  } catch (error) {
    console.log(error);
  }
}
