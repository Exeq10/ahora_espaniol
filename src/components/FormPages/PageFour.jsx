import React from "react";

import { useContext } from "react";
import { contactContext } from "../../context/ContactProvider";
function PageFour() {
  const {
    accommodation,
    setAccommodation,
    accommodationFrom,
    setAccommodationFrom,
    accommodationTo,
    setAccommodationTo,
  } = useContext(contactContext);

  return (
    <>
      <div className="mb-4">
        <label className="block text-gray-700">
          Do you wish to book accommodation through our school?
        </label>
        <select
          className="border border-gray-300 p-2 w-full"
          name="accommodation"
          value={accommodation}
          onChange={(e) => setAccommodation(e.target.value)}
        >
          <option value="" disabled selected>
            -- Select Level --
          </option>
          <option value="Yes, Homestay with a local family (breakfast and dinner included)">
            Yes, Homestay with a local family (breakfast and dinner included)
          </option>
          <option value="Yes, Homestay with a local family (no meals included)">
            Yes, Homestay with a local family (no meals included)
          </option>
          <option value="I don't need accommodation">
            I don't need accommodation
          </option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">
          Accommodation dates start (minimum 6 nights)
        </label>
        <input
          type="date"
          className="border border-gray-300 p-2 w-full"
          name="accommodationFrom"
          value={accommodationFrom}
          onChange={(e) => setAccommodationFrom(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">
          Accommodation dates finish{" "}
        </label>
        <input
          type="date"
          className="border border-gray-300 p-2 w-full"
          name="accommodationTo"
          value={accommodation}
          onChange={(e) => setAccommodationTo(e.target.value)}
        />
      </div>
    </>
  );
}

export default PageFour;
