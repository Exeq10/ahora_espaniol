import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import englishSpeakingCountries from "../hooks/countries";
import { englishLearningPlans } from "../hooks/countries";

function ContactForm() {
  const [state, handleSubmit] = useForm("xanwvgrg");
  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    const newErrors = {};
    if (!formData.get('name')) newErrors.name = 'Name is required';
    if (!formData.get('lastName')) newErrors.lastName = 'Last name is required';
    if (!formData.get('phone')) newErrors.phone = 'Phone number is required';
    if (!formData.get('email')) newErrors.email = 'Email is required';
    if (!formData.get('nationality')) newErrors.nationality = 'Nationality is required';
    if (!formData.get('plans')) newErrors.plans = 'Please select a program';
    if (!formData.get('text')) newErrors.text = 'Message cannot be empty';
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

  if (state.succeeded) {
    return (
      <div className="py-16 flex flex-col justify-center items-center">
        <p className="text-3xl border px-3 rounded-full py-2 bg-green-600 text-white">✓
        </p>
        <p>Message sent</p>
        <p>Thank you for writing to us!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleCustomSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="font-semibold mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="border py-2 px-4 rounded"
            placeholder="Name"
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastName" className="font-semibold mb-1">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="border py-2 px-4 rounded"
            placeholder="Last Name"
          />
          {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
          <ValidationError
            prefix="Last Name"
            field="lastName"
            errors={state.errors}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col">
          <label htmlFor="phone" className="font-semibold mb-1">
            Phone
          </label>
          <input
            type="phone"
            name="phone"
            id="phone"
            className="border py-2 px-4 rounded"
            placeholder="Phone"
          />
          {errors.phone && <p className="text-red-500">{errors.phone}</p>}
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border py-2 px-4 rounded"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col">
          <label htmlFor="nationality" className="font-semibold mb-1">
            Nationality
          </label>
          <select
            name="nationality"
            id="nationality"
            className="border py-2 px-4 rounded"
          >
            <option value="-" disabled>
              --Nationality--
            </option>
            {englishSpeakingCountries &&
              englishSpeakingCountries.map((country, key) => (
                <option key={key} value={country}>
                  {country}
                </option>
              ))}
          </select>
          {errors.nationality && (
            <p className="text-red-500">{errors.nationality}</p>
          )}
          <ValidationError
            prefix="Nationality"
            field="nationality"
            errors={state.errors}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="plans" className="font-semibold mb-1">
            Program you're interested in
          </label>
          <select name="plans" id="plans" className="border py-2 px-4 rounded">
            <option value="-" disabled>
              --Programs--
            </option>
            {englishLearningPlans &&
              englishLearningPlans.map((plan, key) => (
                <option value={plan} key={key}>
                  {plan}
                </option>
              ))}
          </select>
          {errors.plans && <p className="text-red-500">{errors.plans}</p>}
          <ValidationError
            prefix="Plans"
            field="plans"
            errors={state.errors}
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="text" className="font-semibold mb-1">
          Message
        </label>
        <textarea
          name="text"
          id="text"
          className="border py-2 px-4 rounded w-full h-24"
          placeholder="Message"
        ></textarea>
        {errors.text && <p className="text-red-500">{errors.text}</p>}
        <ValidationError
          prefix="Message"
          field="text"
          errors={state.errors}
        />
      </div>

      <div className="w-full flex justify-end">
        <button
          type="submit"
          disabled={state.submitting}
          className="w-[50%] md:w-[25%] bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 font-semibold"
        >
          Send message
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
