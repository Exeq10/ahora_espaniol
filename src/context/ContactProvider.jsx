import React, { createContext, useState } from "react";

const contactContext = createContext();

function ContactProvider({ children }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [nationality, setNationality] = useState("");
  const [classType, setClassType] = useState("");
  const [signUpFor, setSignUpFor] = useState([]);
  const [courseDetails, setCourseDetails] = useState("");
  const [privateClasses, setPrivateClasses] = useState("");

    
  const [spanishLevel, setSpanishLevel] = useState("");
  const [languages, setLanguages] = useState("");
  const [courseStartDate, setCourseStartDate] = useState("");
  const [courseDuration, setCourseDuration] = useState("");
  const [accommodation, setAccommodation] = useState("");
  const [accommodationFrom, setAccommodationFrom] = useState("");
  const [accommodationTo, setAccommodationTo] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [comments, setComments] = useState("");
  const [legal, setLegal] = useState(false);


  const [page,setPage]= useState(1)



  const value = {
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
    setNationality,
    classType,
    setClassType,
    signUpFor,
    setSignUpFor,
    courseDetails,
    setCourseDetails,
    privateClasses,
    setPrivateClasses,
    spanishLevel,
    setSpanishLevel,
    languages,
    setLanguages,
    courseStartDate,
    setCourseStartDate,
    courseDuration,
    setCourseDuration,
    accommodation,
    setAccommodation,
    accommodationFrom,
    setAccommodationFrom,
    accommodationTo,
    setAccommodationTo,
    paymentMethod,
    setPaymentMethod,
    emergencyContact,
    setEmergencyContact,
    comments,
    setComments,
    legal,
    setLegal,
    page,setPage
  };


  
  

  return (
    
    <contactContext.Provider value={value}>
      {children}
    </contactContext.Provider>
  );
}

export default ContactProvider;
export { contactContext };
