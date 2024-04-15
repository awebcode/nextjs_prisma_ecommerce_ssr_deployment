"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Register() {
  const Route = useRouter();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    city: "",
  });

  console.table(form);
  const handChanges = (name, value) => {
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = { method: "POST", body: JSON.stringify(form) };
    const res = await fetch(` /api/User/registration`, config);
    console.log(res);
    if (res.ok) {
      toast.success("Account Successfull Created");
      Route.replace("/login");
    } else {
      toast.error(" Create Unsuccess");
    }
  };

  return (
    <div className="flex items-center my-8 bg-white dark:bg-gray-900">
      <Toaster position="top-center" />
      <div className="container mx-auto">
        <div className="max-w-md mx-auto ">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
              Sign Up
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Create your account
            </p>
          </div>
          <div className="m-7">
            <form onSubmit={handleSubmit} action="">
              <div className=" flex flex-row gap-2">
                <div className="mb-6">
                  <label
                    htmlFor="First Name"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="First Name"
                    value={form.firstName}
                    onChange={(e) => handChanges("firstName", e.target.value)}
                    placeholder="First Name"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-100 focus:border-red-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="last Name"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="last Name"
                    value={form.lastName}
                    onChange={(e) => handChanges("lastName", e.target.value)}
                    placeholder="Last Name"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-100 focus:border-red-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
              </div>
              <div className=" flex flex-row gap-2">
                <div className="mb-6">
                  <label
                    htmlFor="City"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="City"
                    placeholder="City"
                    value={form.city}
                    onChange={(e) => handChanges("city", e.target.value)}
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-100 focus:border-red-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="Address"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="Address"
                    value={form.address}
                    onChange={(e) => handChanges("address", e.target.value)}
                    placeholder="Address"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-100 focus:border-red-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={form.email}
                  onChange={(e) => handChanges("email", e.target.value)}
                  placeholder="you@company.com"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-100 focus:border-red-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <label
                    htmlFor="password"
                    className="text-sm text-gray-600 dark:text-gray-400"
                  >
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={(e) => handChanges("password", e.target.value)}
                  id="password"
                  placeholder="Your Password"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-100 focus:border-red-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full px-3 py-4 text-white bg-red-500 rounded-md focus:bg-red-600 focus:outline-none"
                >
                  Sign Up
                </button>
              </div>
              <p className="text-sm text-center text-gray-400">
                {" Don't have an account yet? "}
                <Link
                  href="/login"
                  className="text-red-500 focus:outline-none focus:underline focus:text-red-500 dark:focus:border-red-800"
                >
                  Sign In
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
