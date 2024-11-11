/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from 'react';
import { contactContext } from '../../context/ContactProvider';

function PageTwo() {
  const {
    classType,
    setClassType,
    signUpFor,
    setSignUpFor,
    courseDetails,
    setCourseDetails,
    privateClasses,
    setPrivateClasses,
  } = useContext(contactContext);

  return (
    <>
      <div className="mb-4">
        <label className="block text-gray-700">Sign up for:</label>
        <div className="flex items-center">
          <input
            type="radio"
            className="border border-gray-300 p-2"
            name="signUpFor"
            value="Spanish Classes"
            onChange={(e) => setSignUpFor(e.target.value)}
            checked={signUpFor === 'Spanish Classes'}
          />
          <label className="ml-2">Spanish Classes</label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            className="border border-gray-300 p-2"
            name="signUpFor"
            value="Accommodation"
            onChange={(e) => setSignUpFor(e.target.value)}
            checked={signUpFor === 'Accommodation'}
          />
          <label className="ml-2">Accommodation</label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            className="border border-gray-300 p-2"
            name="signUpFor"
            value="Airport Transfer"
            onChange={(e) => setSignUpFor(e.target.value)}
            checked={signUpFor === 'Airport Transfer'}
          />
          <label className="ml-2">Airport Transfer</label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Class Type</label>
        <select
          className="border border-gray-300 p-2 w-full"
          name="classType"
          value={classType}
          onChange={(e) => setClassType(e.target.value)}
        >
          <option value="" disabled>-- Select class type --</option>
          <option value="Small Groups">Small Groups</option>
          <option value="Private Classes">Private Classes</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Program you're interested in</label>
        <select
          className="border border-gray-300 p-2 w-full"
          name="courseDetails"
          value={courseDetails}
          onChange={(e) => setCourseDetails(e.target.value)}
        >
          <option value="" disabled>-- Select Course Details --</option>
          <option value="2 hours per week">2 hours per week</option>
          <option value="6 hours per week (two consecutive days from Mondays to Fridays)">
            6 hours per week (two consecutive days from Mondays to Fridays)
          </option>
          <option value="9 hours per week (three consecutive days from Mondays to Fridays)">
            9 hours per week (three consecutive days from Mondays to Fridays)
          </option>
          <option value="Intensive 15 hours per week (Monday to Friday)">
            Intensive 15 hours per week (Monday to Friday)
          </option>
          <option value="Intensive 15 hours per week and 5 hours one-on-one private lessons with native teacher">
            Intensive 15 hours per week and 5 hours one-on-one private lessons with native teacher
          </option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Private Classes</label>
        <select
          className="border border-gray-300 p-2 w-full"
          name="privateClasses"
          value={privateClasses}
          onChange={(e) => setPrivateClasses(e.target.value)}
        >
          <option value="" disabled>-- Select Private Class Hours --</option>
          <option value="2 hours">2 hours</option>
          <option value="3 hours">3 hours</option>
          <option value="4 hours">4 hours</option>
          <option value="5 hours">5 hours</option>
          <option value="6 hours">6 hours</option>
          <option value="9 hours">9 hours</option>
          <option value="More">More</option>
        </select>
      </div>
    </>
  );
}

export default PageTwo;
