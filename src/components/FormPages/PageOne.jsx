import React, { useState } from 'react'
import englishSpeakingCountries from '../../hooks/countries'


import { contactContext } from '../../context/ContactProvider'
import { useContext } from 'react'

function PageOne() {

  
const { 
  name,
  setName,
    lastName,
    setLastName,
    dateOfBirth,
    setDateOfBirth,
    phone,
    setPhone,
    email,
    setEmail,
    nationality,
    setNationality,} = useContext(contactContext)


  return (

    <>
    <div className="mb-4">
    <label className="block text-gray-700">Name</label>
    <input type='text' className="border border-gray-300 p-2 w-full"  name='name' value={name}   onChange={(e)=>  setName(e.target.value)}  />
   
  </div>
    <div className="mb-4">
    <label className="block text-gray-700">Last Name</label>
    <input type='text' className="border border-gray-300 p-2 w-full"  name='lastName' value={lastName}   onChange={(e)=>  setLastName(e.target.value)}  />
   
  </div>
    <div className="mb-4">
    <label className="block text-gray-700">Date of birth</label>
    <input type='date' className="border border-gray-300 p-2 w-full"  name='dateOfBirth'  value={dateOfBirth}  onChange={(e)=>  setDateOfBirth(e.target.value)}  />
   
  </div>
    <div className="mb-4">
    <label className="block text-gray-700">Phone</label>
    <input type='Phone' className="border border-gray-300 p-2 w-full"  name='phone' value={phone}   onChange={(e)=>  setPhone(e.target.value)}  />
   
  </div>
    <div className="mb-4">
    <label className="block text-gray-700">Email</label>
    <input type='email' className="border border-gray-300 p-2 w-full"  name='email'  value={email}  onChange={(e)=>  setEmail(e.target.value)}  />
   
  </div>
    <div className="mb-4">
    <label className="block text-gray-700">Nationality</label>
    <select  className="border border-gray-300 p-2 w-full"  name='Nationality' value={nationality}   onChange={(e)=>  setNationality(e.target.value) }  >
        <optgroup>
            <option value="-" selected disabled>--Nationality--</option>
        </optgroup>

                {englishSpeakingCountries.map((country,key)=>{ return <option value={country} key={key} > {country} </option> }   )}


         </select>
   
  </div>
    </>
  )
}

export default PageOne