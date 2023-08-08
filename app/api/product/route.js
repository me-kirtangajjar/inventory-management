import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const url = process.env.MONGODBURL;
const client = new MongoClient(url);
const dbName = "InventoryManagement";

export async function POST(request) {
  try {
    await client.connect();
    const db = client.db(dbName);

    // Use the collection "product"
    const products = db.collection("products");

    // Insert a single document, wait for promise so we can read it back
    const product = await products.insertOne(await request.json());

    return NextResponse.json({ status: true });
  } catch (err) {
    console.log(err.stack);
  }
}

export async function GET() {
  try {
    await client.connect();
    const db = client.db(dbName);

    // Use the collection "product"
    const products = db.collection("products");

    // Insert a single document, wait for promise so we can read it back
    const allProduct = await products.find({}).toArray();

    return NextResponse.json({ status: true, allProduct: allProduct });
  } catch (error) {
    console.log(error);
  }
}
