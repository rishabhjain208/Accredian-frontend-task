import React, { useState } from "react";
import axios from "axios";

const Button = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleOpenForm = () => {
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    document.body.style.overflow = "auto";
    document.body.style.position = "";
    setIsFormOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setEmailError(""); // Reset email error

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
      return;
    }

    console.log({ name, email });
    try {
      await axios.post(
        "https://accredian-backend-task-1-n991.onrender.com/api/v1/email/sendemail",
        {
          name,
          email,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 2000); // Hide the message after 2 seconds
    } catch (error) {
      console.log(error);
    }
    handleCloseForm();
  };

  return (
    <div className="mt-16 items-center flex justify-center mb-8 ">
      <button
        className="bg-blue-500 text-center justify-center w-28 flex items-center rounded-md p-2 text-white hover:bg-blue-600"
        onClick={handleOpenForm}
      >
        Refer Now
      </button>

      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <div className="flex justify-center text-xl font-medium text-gray-700">
              Refer & earn
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 text-gray-700 border rounded focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 text-gray-700 border rounded focus:outline-none focus:shadow-outline"
                  required
                />
                {emailError && (
                  <p className="text-red-500 text-xs mt-1">{emailError}</p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700"
                  onClick={handleCloseForm}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showSuccessMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <div className="flex justify-center text-xl font-medium text-gray-700">
              Referred Successfully!
            </div>
            <button
              type="button"
              className="mt-4 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
              onClick={() => setShowSuccessMessage(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Button;
