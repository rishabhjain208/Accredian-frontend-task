import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import axios from "axios";

const Appbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [message, setMessage] = useState("");

  const handleLoginClick = () => {
    setShowPopup(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const logres = await axios.post(
        "https://accredian-backend-task-1-n991.onrender.com/api/v1/user/signup",
        {
          email,
          password: pass,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      if (logres.status === 200) {
        if (logres.data.message === "You are already registered") {
          setMessage("You are already registered. Logged in successfully.");
        } else {
          setMessage("Registration successful. Logged in successfully.");
        }
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.log(error);
      setMessage("An error occurred during login. Please try again.");
    }

    setFormSubmitted(true);
    setTimeout(() => {
      setShowPopup(false);
      setFormSubmitted(false);
      setMessage("");
    }, 2000);
  };

  return (
    <>
      <div className="mt-2">
        <div className="mx-4 md:mx-32 flex justify-between w-full md:w-5/6">
          <div className="flex">
            <img src="logo.png.png" alt="Logo" />
            <button className="bg-blue-500 text-center justify-center mx-2 md:mx-4 flex w-28 items-center rounded-md p-2 text-white hover:bg-blue-600">
              Course <FiChevronDown className="mt-1 mx-1" />
            </button>
          </div>
          <div>
            <ul className="flex">
              <li className="p-2">Refer & earn</li>
              <li className="p-2">Resources</li>
              <li className="p-2">About us</li>
              <li>
                {!isLoggedIn ? (
                  <button
                    className="bg-slate-200 text-center justify-center mx-2 md:mx-4 flex w-28 items-center rounded-md p-2 text-gray-500"
                    onClick={handleLoginClick}
                  >
                    Login
                  </button>
                ) : (
                  <button
                    className="bg-red-500 text-center justify-center mx-2 md:mx-4 flex w-28 items-center rounded-md p-2 text-white hover:bg-red-600"
                    onClick={handleLogoutClick}
                  >
                    Logout
                  </button>
                )}
              </li>
              <li>
                <button className="bg-blue-500 text-center justify-center mx-2 md:mx-4 flex w-28 items-center rounded-md p-2 text-white hover:bg-blue-600">
                  Try for Free
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <ul className="flex flex-col md:flex-row justify-evenly items-center w-full md:w-2/3 gap-4 rounded-2xl bg-blue-100 h-12 p-2 md:p-0">
          <li className="text-blue-500">Refer</li>
          <li>Benefits</li>
          <li>FAQs</li>
          <li>Support</li>
        </ul>
      </div>
      {showPopup && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md w-80">
            <h2 className="text-lg font-medium mb-4">Login / Register</h2>
            {!formSubmitted ? (
              <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    onChange={(e) => setPass(e.target.value)}
                    required
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 w-full p-2 text-white rounded-md hover:bg-blue-600"
                >
                  Submit
                </button>
              </form>
            ) : (
              <div className="text-center">{message}</div>
            )}
            <button
              className="mt-4 text-sm text-blue-500 hover:underline"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Appbar;
