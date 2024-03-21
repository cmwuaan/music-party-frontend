import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { RiAccountPinBoxFill } from "react-icons/ri";

export default function AccountSettings() {
  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        className=""
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Header />
      <div className="py-16 bg-black opacity-90 text-white">
        <div className="max-w-screen-xl mx-auto pt-16 ml-[16.7vw] h-full">
          <div>
            <RiAccountPinBoxFill className="text-4xl mb-4" />
          </div>
          <form>
            <h2 className="font-bold text-4xl">Account Settings</h2>
            <div className="mt-12 flex flex-col gap-4">
              <p>Display name</p>
              <input
                type="text"
                value="User Name"
                required
                className="w-2/3 bg-black border border-gray-400 rounded h-12 px-2"
              />
              <p>Email</p>
              <input
                readOnly
                type="text"
                value="email@gmail.com"
                className="w-2/3 bg-black border border-gray-400 cursor-not-allowed rounded h-12 px-2"
              />
              <p>Gender</p>
              <select
                name="genderUser"
                id="genderUser"
                className="w-2/3 bg-black border border-gray-400 rounded h-12 px-2"
                value="Male"
                required
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
                <option value="None">None</option>
              </select>
              <p>Password</p>
              <input
                readOnly
                type="password"
                value={`Hello ne`}
                className="w-2/3 bg-black border border-gray-400  rounded h-12 cursor-not-allowed px-2 "
              />
              <div className="flex flex-row gap-2 items-center">
                <input type="checkbox" id="myCheckbox" className="h-4" />
                <label for="myCheckbox" className="text-xs text-gray-500 px-2">
                  Share my registration data with Rhythm Party content providers
                  for marketing purposes.
                </label>
              </div>
              <div className="flex flex-row justify-end gap-4 w-2/3 mt-4 items-center">
                <a href="/" className="hover:bg-slate-500 px-6 py-2 rounded">
                  Cancel
                </a>
                <Link
                  to="/profile"
                  className="px-8 py-2 rounded bg-green-500 hover:scale-105 duration-300"
                >
                  Save
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
