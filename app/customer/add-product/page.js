"use client";

import { useState } from "react";

export default function page() {
  const [productForm, setproductForm] = useState({});

  const handleAddProduct = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productForm),
      });

      if (response.status) {
        alert("Product Added Successfully.");
        localStorage.setItem("kirtan", "me-kirtangajjar");
        // location.reload();
      } else {
        alert("Try Again, Product Not Added.");
        // location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  function handleChange(event) {
    setproductForm({ ...productForm, [event.target.name]: event.target.value });
  }
  return (
    <div className="bg-red-50 p-4 rounded-lg shadow-lg mt-6 mb-6 px-12">
      <h1 className="text-2xl font-semibold mb-4">Add a Product</h1>
      <form onSubmit={handleAddProduct} className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="productName"
            className="block text-sm font-medium text-gray-700"
          >
            Product Name:
          </label>
          <input
            name="productName"
            onChange={handleChange}
            type="text"
            id="productName"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label
            htmlFor="quantity"
            className="block text-sm font-medium text-gray-700"
          >
            Quantity:
          </label>
          <input
            name="quantity"
            onChange={handleChange}
            type="number"
            id="quantity"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        <div className="col-span-2">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price:
          </label>
          <input
            name="price"
            onChange={handleChange}
            type="number"
            id="price"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="col-span-2">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}
