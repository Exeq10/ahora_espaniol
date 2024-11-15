import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import PageFive from "../components/FormPages/PageFive";
import PageFour from "../components/FormPages/PageFour";
import PageOne from "../components/FormPages/PageOne";
import PageThree from "../components/FormPages/PageThree";
import PageTwo from "../components/FormPages/PageTwo";
import Nav from "../components/Nav";

import { useContext } from "react";
import { contactContext } from "../context/ContactProvider";
import { useState } from "react";



function Contact() {
  const [error, setError] = useState("");
  const requiredFields = {
    1: ["name", "lastName", "dateOfBirth", "phone", "email", "nationality"],
    2: ["classType", "signUpFor", "courseDetails"],
    3: ["spanishLevel", "courseStartDate", "courseDuration"],
    4: ["accommodation"],
    5: ["paymentMethod", "legal"],
  };
  const {
    page,
    setPage,
    name,
    lastName,
    dateOfBirth,
    phone,
    email,
    nationality,
    classType,
    signUpFor,
    courseDetails,
    privateClasses,
    spanishLevel,
    languages,
    courseStartDate,
    courseDuration,
    accommodation,
    accommodationFrom,
    accommodationTo,
    paymentMethod,
    emergencyContact,
    comments,
    legal,
  } = useContext(contactContext);


  const validateFields = () => {
    const fieldsToValidate = requiredFields[page];
    for (const field of fieldsToValidate) {
      if (!eval(field)) { // eval is used here, but it may be unsafe in certain contexts.
        setError(`Please fill out the ${field} field.`);
        return false;
      }
    }
    setError("");
    return true;
  };

  const handlePage = (page) => {
    switch (page) {
      case 1:
        return <PageOne />;
      case 2:
        return <PageTwo />;
      case 3:
        return <PageThree />;
      case 4:
        return <PageFour />;
      case 5:
        return <PageFive />;
      default:
        return <PageOne />;
    }
  };

  const handleNextPage = () => {
    if (page < 5) {
      if (validateFields()) {
        setPage(page + 1);
      }
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };


  const handleSubmit = () => {
    const message = {
      name,
      lastName,
      dateOfBirth,
      phone,
      email,
      nationality,
      classType,
      signUpFor,
      courseDetails,
      privateClasses,
      spanishLevel,
      languages,
      courseStartDate,
      courseDuration,
      accommodation,
      accommodationFrom,
      accommodationTo,
      paymentMethod,
      emergencyContact,
      comments,
      legal,
    };

    console.log(message);
    alert("Formulario enviado");
  };

  return (
    <section>
      <Nav />

      <main
        className="bg-black h-[830px] w-full bg-cover bg-center flex justify-center md:flex-row flex-col items-center p-5 md:p-10"
        style={{
          backgroundImage: "url('/image.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full md:w-[40%] text-white mb-6 md:mb-0">
          <h1 className="font-londrina-solid font-black text-3xl md:text-4xl mb-4">
            Contact us
          </h1>

          <p className="text-base md:text-lg leading-relaxed">
            If you're interested in learning more or would like to schedule a
            class, please don't hesitate to contact us. We look forward to
            helping you achieve your Spanish language goals!
          </p>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full md:w-[50%]">
          {handlePage(page)}

          {error && (
            <p className="text-red-500 mt-2">{error}</p>
          )}

          <div className="flex justify-between mt-4">
            {page > 1 && (
              <button
                className="px-3 py-2 bg-slate-500 rounded-md text-white"
                onClick={handlePreviousPage}
              >
                Previous
              </button>
            )}
            {page < 5 ? (
              <button
                className="px-3 py-2 bg-blue-600 rounded-md text-white"
                onClick={handleNextPage}
              >
                Next
              </button>
            ) : (
              <button
                className="px-3 py-2 bg-green-600 rounded-md text-white"
                onClick={handleSubmit}
              >
                Send Message
              </button>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </section>
  );
}

export default Contact;
