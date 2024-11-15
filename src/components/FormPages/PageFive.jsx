import React from "react";

import { useContext } from "react";
import { contactContext } from "../../context/ContactProvider";
function PageFive() {
  const {
    paymentMethod,
    setPaymentMethod,
    emergencyContact,
    setEmergencyContact,
    comments,
    setComments,
    legal,
    setLegal,
  } = useContext(contactContext);

  return (
    <>
      <div className="mb-4">
        <label className="block text-gray-700">
        Payment method (Homestays accept only cash payment upon arrival)
        </label>
        <select
          className="border border-gray-300 p-2 w-full"
          name="accommodation"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="" disabled selected>
            -- Select Level --
          </option>
          <option value="Bank transfer (Western Union)">
          Bank transfer (Western Union)
          </option>
          <option value="Cash upon arrival (USD/ Euro/ Real)">
          Cash upon arrival (USD/ Euro/ Real)
          </option>
          <option value="Credit card">
          Credit card
          </option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">
        Emergency contact (Name - Relationship to the student - Phone number - Email)
        </label>
        <input
          type="text"
          className="border border-gray-300 p-2 w-full"
          name="accommodationFrom"
          value={emergencyContact}
          onChange={(e) => setEmergencyContact(e.target.value)}
        />
      </div>
     

      <div className="mb-4">
    <label className="block text-gray-700">Any comments?</label>
    <textarea className="border border-gray-300 p-2 w-full" placeholder=''  value={comments} name='languages'  onChange={(e)=> setComments(e.target.value)} />
   
  </div>



  <div className="mb-4 flex gap-3 items-center align-middle ">
        <input
          type="checkbox"
          className="border border-gray-300 p-2 "
          name="accommodationFrom"
          value={legal}
          onChange={(e) => setLegal(e.target.value)}
        />
        <label className=" text-gray-700">
        I accept the legal information and policies
        </label>
      </div>

    </>
  );
}

export default PageFive;
