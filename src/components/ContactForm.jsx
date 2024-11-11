import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import englishSpeakingCountries from "../hooks/countries";
import moment from 'moment';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    dateOfBirth: "",
    phone: "",
    email: "",
    nationality: "",
    classType: "",
    signUpFor: [],
    courseDetails: "",
    spanishLevel: "",
    courseStartDate: "",
    courseDuration: "",
    accommodation: "",
    accommodationFrom: "",
    accommodationTo: "",
    paymentMethod: "",
    emergencyContact: "",
    comments: "",
    legal: false,
  });

  const [errors, setErrors] = useState({});
  const [page, setPage] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isNextDisabled, setIsNextDisabled] = useState(true);

  useEffect(() => {
    const newErrors = validateForm();
    setErrors(newErrors);
    setIsNextDisabled(Object.keys(newErrors).length > 0);
  }, [formData, page]);

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = {
      1: ["name", "lastName", "dateOfBirth", "phone", "email", "nationality"],
      2: ["classType", "signUpFor", "courseDetails"],
      3: ["spanishLevel", "courseStartDate", "courseDuration"],
      4: ["accommodation"],
      5: ["paymentMethod", "legal"]
    };

    requiredFields[page].forEach((field) => {
      if (!formData[field] || (Array.isArray(formData[field]) && formData[field].length === 0)) {
        newErrors[field] = `${field} is required`;
      }
    });

    // Accommodation validation for minimum days
    if (formData.accommodationFrom && formData.accommodationTo) {
      const start = moment(formData.accommodationFrom);
      const end = moment(formData.accommodationTo);
      const daysDifference = end.diff(start, 'days');
      if (daysDifference < 6) {
        newErrors.accommodationTo = "Accommodation should be booked for a minimum of 6 nights";
      }
    }

    return newErrors;
  };

  const handleCustomSubmit = async (event) => {
    event.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setIsSubmitting(true);

      try {
        await emailjs.send("service_ik4br7h", "template_uvqhmhq", formData, "OCGOUdtFQB5Ay6BIk");
        setIsSubmitted(true);
      } catch (error) {
        console.error("Submission failed", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleNextPage = () => {
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setErrors({});
      setPage(page + 1);
    } else {
      setErrors(newErrors);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData(

      formData.name = name
      
    
  
  );
    console.log(value);
    

 /*    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" })); */

  /*   if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
        ...(name === "signUpFor" && {
          signUpFor: prevData.signUpFor.includes(value)
            ? prevData.signUpFor.filter((item) => item !== value)
            : [...prevData.signUpFor, value]
        }),
      }));
    } else {
      

    console.log(value)
    }
  };

  const renderError = (field) => errors[field] && <p className="text-red-500">{errors[field]}</p>;

  if (isSubmitted) {
    return (
      <div className="py-16 flex flex-col justify-center items-center">
        <p className="text-3xl border px-3 rounded-full py-2 bg-green-600 text-white">✓</p>
        <p>Message sent</p>
        <p>Thank you for writing to us!</p>
      </div>
    ); */
  }





  const PageThree = () => (
    <>
      <SelectField label="My Spanish level" name="spanishLevel" options={["A1", "A2", "B1.1", "B1.2", "B2.1", "B2.2", "C1", "C2"]} placeholder="Select your Spanish level" value={formData.spanishLevel} onChange={handleInputChange} />
      <TextArea label="Languages you speak" name="languages" placeholder="Indicate mother tongue and level for other languages" value={formData.languages} onChange={handleInputChange} />
      <Field label="Course Start Date" name="courseStartDate" type="date" placeholder="Group classes start every Monday" value={formData.courseStartDate} onChange={handleInputChange} />
      <SelectField label="Course Duration" name="courseDuration" options={["1 week", "2 weeks", "3 weeks", "4 weeks"]} placeholder="--Select Duration--" value={formData.courseDuration} onChange={handleInputChange} />
    </>
  );

  const PageFour = () => (
    <>
      <SelectField label="Do you wish to book accommodation through our school?" name="accommodation" options={["Yes, Homestay with a local family (breakfast and dinner included)", "Yes, Homestay with a local family (no meals included)", "I don't need accommodation"]} placeholder="--Select an option--" value={formData.accommodation} onChange={handleInputChange} />
      <Field label="Accommodation dates start (minimum 6 nights)" name="accommodationFrom" type="date" value={formData.accommodationFrom} onChange={handleInputChange} />
      <Field label="Accommodation dates finish" name="accommodationTo" type="date" value={formData.accommodationTo} onChange={handleInputChange} />
    </>
  );

  const PageFive = () => (
    <>
      <SelectField label="Payment method (Homestays accept only cash payment upon arrival)" name="paymentMethod" options={["Bank transfer (Western Union)", "Cash upon arrival (USD/ Euro/ Real)", "Credit card"]} placeholder="--Select Payment Method--" value={formData.paymentMethod} onChange={handleInputChange} />
      <Field label="Emergency contact (Name - Relationship to the student - Phone number - Email)" name="emergencyContact" type="text" value={formData.emergencyContact} onChange={handleInputChange} />
      <TextArea label="Any comments?" name="comments" placeholder="Your comments..." value={formData.comments} onChange={handleInputChange} />
      <div className="flex items-center mt-3">
        <input
          type="checkbox"
          name="legal"
          checked={formData.legal}
          onChange={handleInputChange}
        />
        <label className="ml-2">
          I accept the legal information and policies
        </label>
      </div>
      {renderError("legal")}
    </>
  );

  return (
    <div className="container mx-auto py-8">
    <form onSubmit={handleCustomSubmit}>
      {page === 1 && <PageOne />}
      {page === 2 && <PageTwo />}
      {page === 3 && <PageThree />}
      {page === 4 && <PageFour />}
      {page === 5 && <PageFive />}

      <div className="flex justify-between mt-4">
        {page > 1 && (
          <button
            type="button"
            onClick={() => setPage(page - 1)}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Previous
          </button>
        )}
        {page < 5 ? (
          <button
            type="button"
            onClick={handleNextPage}
            disabled={isNextDisabled}
            className={`bg-blue-500 text-white px-4 py-2 rounded ${isNextDisabled ? 'bg-slate-200' : ''}`}
          >
            Next
          </button>
        ) : (
          <button
            type="submit"
            className={`bg-green-500 text-white px-4 py-2 rounded ${isNextDisabled ? 'bg-slate-200' : ''}`}
            disabled={isNextDisabled || isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        )}
      </div>
    </form>
  </div>
);
}





export default ContactForm;
