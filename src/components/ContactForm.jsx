import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import englishSpeakingCountries from "../hooks/countries";
import { englishLearningPlans } from "../hooks/countries";

function ContactForm() {
  const [state, handleSubmit] = useForm("xanwvgrg");
  const [errors, setErrors] = useState({});
  const [page, setPage] = useState(1);

  const validateForm = (formData) => {
    const newErrors = {};
    const requiredFields = {
      1: ["name", "lastName", "phone", "email", "nationality", "plans", "text"],
      2: ["courseDetails"],
      3: ["privateClasses", "courseStartDate", "courseDuration"],
      4: ["accommodation", "accommodationFrom", "accommodationTo", "paymentMethod"]
    };
    requiredFields[page].forEach((field) => {
      if (!formData.get(field)) newErrors[field] = `${field} is required`;
    });
    return newErrors;
  };

  const handleCustomSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newErrors = validateForm(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      await handleSubmit(event);
    }
  };

  const renderError = (field) => errors[field] && <p className="text-red-500">{errors[field]}</p>;

  if (state.succeeded) {
    return (
      <div className="py-16 flex flex-col justify-center items-center">
        <p className="text-3xl border px-3 rounded-full py-2 bg-green-600 text-white">✓</p>
        <p>Message sent</p>
        <p>Thank you for writing to us!</p>
      </div>
    );
  }

  const PageOne = () => (
    <>
      <Field label="Name" name="name" type="text" placeholder="Name" />
      <Field label="Last Name" name="lastName" type="text" placeholder="Last Name" />
      <Field label="Phone" name="phone" type="tel" placeholder="Phone" />
      <Field label="Email" name="email" type="email" placeholder="Email" />
      <SelectField label="Nationality" name="nationality" options={englishSpeakingCountries} placeholder="--Nationality--" />
      <SelectField label="Program you're interested in" name="plans" options={englishLearningPlans} placeholder="--Programs--" />
    </>
  );

  const PageTwo = () => (
    <>
      <SelectField label="My Spanish level" name="spanishLevel" options={["A1", "A2", "B1.1", "B1.2", "B2.1", "B2.2", "C1", "C2"]} placeholder="Select your Spanish level" />
      <TextArea label="Languages you speak" name="languages" placeholder="Indicate mother tongue and level for other languages" />
      <SelectField label="Class Type" name="classType" options={["Small Groups", "Private Classes"]} placeholder="Select class type" />
      <CheckboxGroup label="Sign up for:" name="signUpFor" options={["Spanish Classes", "Accommodation", "Airport Transfer"]} />
      <SelectField label="Course Details" name="courseDetails" options={["2 hours per week", "4 hours per week"]} placeholder="--Select Course Details--" />
    </>
  );

  const PageThree = () => (
    <>
      <SelectField label="Private Classes" name="privateClasses" options={["2 hours", "3 hours", "4 hours", "5 hours", "6 hours", "9 hours", "More"]} placeholder="--Select Private Class Hours--" />
      <Field label="Course Start Date" name="courseStartDate" type="text" placeholder="Group classes start every Monday" />
      <SelectField label="Course Duration" name="courseDuration" options={["1 week", "2 weeks", "3 weeks", "4 weeks"]} placeholder="--Select Duration--" />
    </>
  );

  const PageFour = () => (
    <>
      <SelectField label="Accommodation" name="accommodation" options={["Yes, Homestay with a local family (breakfast and dinner included)", "Yes, Homestay with a local family (no meals included)", "I don't need accommodation"]} placeholder="--Select an option--" />
      <Field label="Accommodation From" name="accommodationFrom" type="date" />
      <Field label="Accommodation To" name="accommodationTo" type="date" />
      <SelectField label="Payment Method" name="paymentMethod" options={["Bank transfer (Western Union)", "Cash upon arrival (USD/ Euro/ Real)", "Credit card"]} placeholder="--Select Payment Method--" />
    </>
  );

  const Field = ({ label, name, type = "text", placeholder }) => (
    <div className="flex flex-col mb-4">
      <label htmlFor={name} className="font-semibold mb-1">{label}</label>
      <input type={type} name={name} id={name} className="border py-2 px-4 rounded" placeholder={placeholder} />
      {renderError(name)}
      <ValidationError prefix={label} field={name} errors={state.errors} />
    </div>
  );

  const SelectField = ({ label, name, options, placeholder }) => (
    <div className="flex flex-col mb-4">
      <label htmlFor={name} className="font-semibold mb-1">{label}</label>
      <select name={name} id={name} className="border py-2 px-4 rounded">
        <option value="" disabled>{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
      {renderError(name)}
      <ValidationError prefix={label} field={name} errors={state.errors} />
    </div>
  );

  const TextArea = ({ label, name, placeholder }) => (
    <div className="flex flex-col mb-4">
      <label htmlFor={name} className="font-semibold mb-1">{label}</label>
      <textarea name={name} id={name} className="border py-2 px-4 rounded w-full h-24" placeholder={placeholder}></textarea>
      {renderError(name)}
    </div>
  );

  const CheckboxGroup = ({ label, name, options }) => (
    <div className="flex flex-col mb-4">
      <label className="font-semibold mb-1">{label}</label>
      <div className="flex gap-4">
        {options.map((option, index) => (
          <label key={index}>
            <input type="checkbox" name={name} value={option} /> {option}
          </label>
        ))}
      </div>
    </div>
  );

  const renderPage = () => {
    switch (page) {
      case 1: return <PageOne />;
      case 2: return <PageTwo />;
      case 3: return <PageThree />;
      case 4: return <PageFour />;
      default: return <PageOne />;
    }
  };

  return (
    <form onSubmit={handleCustomSubmit} className="space-y-8">
      {renderPage()}
      <div className="flex justify-between">
        {page > 1 && <button type="button" onClick={() => setPage(page - 1)} className="py-2 px-4 bg-gray-200 rounded">Previous</button>}
        {page < 4 ? (
          <button type="button" onClick={() => setPage(page + 1)} className="py-2 px-4 bg-blue-500 text-white rounded">Next</button>
        ) : (
          <button type="submit" className="py-2 px-4 bg-teal-500 text-white rounded">Send message</button>
        )}
      </div>
    </form>
  );
}

export default ContactForm;
