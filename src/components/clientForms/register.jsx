"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function RegisterForm() {
  const Route = useRouter();
  const [form, setForm] = useState({
    name: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    city: "",
  });

  const [confirmpass, setConfirmpass] = useState("");
  const [checked, setChecked] = useState(false);
  console.log(checked);
  const handChanges = (name, value) => {
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== confirmpass && checked) {
      return toast.error("check your form carefully");
    }

    const config = { method: "POST", body: JSON.stringify(form) };
    try {
      const res = await fetch(`/api/customer/users/register`, config);
      console.log(res);
      if (res) {
        toast.success("Account Successfull Created");
        Route.replace("/auth/login");
      }
    } catch (error) {
      console.log(error);
      console.log("/auth/register");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      action=""
      className="mt-8 grid grid-cols-6 gap-6"
    >
      <Toaster position="top-center" />
      <div className="col-span-3">
        <label
          // htmlFor=""
          className=" mb-2 block text-xs font-medium text-gray-700"
        >
          {" "}
          First Name{" "}
        </label>

        <input
          value={form.firstName}
          onChange={(e) => handChanges("firstName", e.target.value)}
          type="text"
          placeholder="Enter Your First Name"
          className="mt-1 w-full rounded-md border-gray-200 shadow-sm outline-none px-2 border py-2 sm:text-sm"
        />
      </div>

      <div className="col-span-3">
        <label
          // htmlFor="UserEmail"
          className=" mb-2 block text-xs font-medium text-gray-700"
        >
          {" "}
          last Name{" "}
        </label>

        <input
          value={form.lastName}
          onChange={(e) => handChanges("lastName", e.target.value)}
          type="text"
          // id="UserEmail"
          placeholder="Enter Your last Name"
          className="mt-1 w-full rounded-md border-gray-200 shadow-sm outline-none px-2 border py-2 sm:text-sm"
        />
      </div>

      <div className="col-span-6">
        <label
          // htmlFor="UserEmail"
          className=" mb-2 block text-xs font-medium text-gray-700"
        >
          {" "}
          Full Name{" "}
        </label>

        <input
          value={form.name}
          onChange={(e) => handChanges("name", e.target.value)}
          type="text"
          // id=""
          placeholder="Enter Your Full Name"
          className="mt-1 w-full rounded-md border-gray-200 shadow-sm outline-none px-2 border py-2 sm:text-sm"
        />
      </div>

      <div className="col-span-3">
        <label
          // htmlFor="UserEmail"
          className=" mb-2 block text-xs font-medium text-gray-700"
        >
          {" "}
          Email{" "}
        </label>

        <input
          value={form.email}
          onChange={(e) => handChanges("email", e.target.value)}
          type="text"
          // id="UserEmail"
          placeholder="Enter Your Email"
          className="mt-1 w-full rounded-md border-gray-200 shadow-sm outline-none px-2 border py-2 sm:text-sm"
        />
      </div>
      <div className="col-span-3">
        <label
          // htmlFor="UserEmail"
          className=" mb-2 block text-xs font-medium text-gray-700"
        >
          {" "}
          City
        </label>

        <input
          value={form.city}
          onChange={(e) => handChanges("city", e.target.value)}
          type="text"
          // id="UserEmail"
          placeholder="Enter Your City"
          className="mt-1 w-full rounded-md border-gray-200 shadow-sm outline-none px-2 border py-2 sm:text-sm"
        />
      </div>

      <div className="col-span-3">
        <label
          // htmlFor="UserEmail"
          className=" mb-2 block text-xs font-medium text-gray-700"
        >
          {" "}
          Password
        </label>

        <input
          value={form.password}
          onChange={(e) => handChanges("password", e.target.value)}
          type="text"
          // id="UserEmail"
          placeholder="Enter Your Password "
          className="mt-1 w-full rounded-md border-gray-200 shadow-sm outline-none px-2 border py-2 sm:text-sm"
        />
      </div>

      <div className="col-span-3">
        <label
          // htmlFor="UserEmail"
          className=" mb-2 block text-xs font-medium text-gray-700"
        >
          {" "}
          Confirm Password
        </label>

        <input
          value={confirmpass}
          onChange={(e) => setConfirmpass(e.target.value)}
          type="text"
          // id="UserEmail"
          placeholder="Enter Your Confirm Password "
          className="mt-1 w-full rounded-md border-gray-200 shadow-sm outline-none px-2 border py-2 sm:text-sm"
        />
      </div>

      <div className="col-span-6">
        <label className="flex gap-4">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            name="marketing_accept"
            className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
          />

          <span className="text-sm text-gray-700">
            I want to receive emails about events, product updates and company
            announcements.
          </span>
        </label>
      </div>

      <div className="col-span-6">
        <p className="text-sm text-gray-500">
          By creating an account, you agree to our
          <a href="#" className="text-gray-700 underline">
            {" "}
            terms and conditions{" "}
          </a>
          and
          <a href="#" className="text-gray-700 underline">
            privacy policy
          </a>
          .
        </p>
      </div>

      <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
        <button
          type="submit"
          className="inline-block shrink-0 rounded-md border border-red-600 bg-red-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring active:text-red-500"
        >
          Create an account
        </button>

        <p className="mt-4 text-sm text-gray-500 sm:mt-0">
          Already have an account?
          <Link href="/auth/login" className="text-gray-700 underline">
            Log in
          </Link>
          .
        </p>
      </div>
    </form>
  );
}
