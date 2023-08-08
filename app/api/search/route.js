// import { MongoClient } from "mongodb";
// import { NextResponse } from "next/server";

// const url = process.env.MONGODBURL;
// const client = new MongoClient(url);
// const dbName = "InventoryManagement";

// export async function GET(request) {
//   try {
//     await client.connect();
//     const db = client.db(dbName);
//     const products = db.collection("products");

//     const product = await products
//       .aggregate([
//         {
//           $match: {
//             $or: [
//               {
//                 productName: {
//                   $regex: request.nextUrl.searchParams.get("query"),
//                   $options: "i",
//                 },
//               },
//             ],
//           },
//         },
//       ])
//       .toArray();

//     return NextResponse.json({ status: true, productDetails: product });
//   } catch (err) {
//     console.log(err.stack);
//   }
// }
