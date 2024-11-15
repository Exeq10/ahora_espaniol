import React from 'react'

import { useContext } from 'react'
import { contactContext } from '../../context/ContactProvider'
function PageThree() {


    const {spanishLevel,
        setSpanishLevel,
        languages,
        setLanguages,
        courseStartDate,
        setCourseStartDate,
        courseDuration,
        setCourseDuration,} = useContext(contactContext)

  return (
   <>
   
   <div className="mb-4">
        <label className="block text-gray-700">My Spanish level</label>
        <select
          className="border border-gray-300 p-2 w-full"
          name="privateClasses"
          value={spanishLevel}
          onChange={(e) => setSpanishLevel(e.target.value)}
        >
          <option value="" disabled selected>-- Select Level --</option>
  <option value="A1">A1</option>
  <option value="A2">A2</option>
  <option value="B1.1">B1.1</option>
  <option value="B1.2">B1.2</option>
  <option value="B2.1">B2.1</option>
  <option value="B2.2">B2.2</option>
  <option value="C1">C1</option>
  <option value="C2">C2</option>
        </select>
      </div>
   

      <div className="mb-4">
    <label className="block text-gray-700">Languages you speak</label>
    <textarea className="border border-gray-300 p-2 w-full" placeholder=''  value={languages} name='languages'  onChange={(e)=> setLanguages(e.target.value)} />
   
  </div>

  <div className="mb-4">
    <label className="block text-gray-700">Course Start Date</label>
    <input type='date' className="border border-gray-300 p-2 w-full"  name='courseStartDate' value={courseStartDate}   onChange={(e)=>  setCourseStartDate(e.target.value)}  />
   
  </div>

  <div className="mb-4">
        <label className="block text-gray-700">Course Duration</label>
        <select
          className="border border-gray-300 p-2 w-full"
          name="privateClasses"
          value={courseDuration}
          onChange={(e) => setCourseDuration(e.target.value)}
        >
    <option value="" disabled selected>-- Select Duration --</option>
  <option value="1 week">1 week</option>
  <option value="2 weeks">2 weeks</option>
  <option value="3 weeks">3 weeks</option>
  <option value="4 weeks">4 weeks</option>

        </select>
      </div>
   

   </>
  )
}

export default PageThree