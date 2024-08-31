import Footer from "../components/Footer";
import Nav from "../components/Nav";
import englishSpeakingCountries from "../hooks/countries";
import { englishLearningPlans } from "../hooks/countries";

function Contact() {
  return (
    <section>
      <Nav />

      <main
        className="bg-black h-auto w-full bg-cover bg-center flex justify-center md:flex-row flex-col  items-center p-5 md:p-10"
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
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="font-semibold mb-1">
                  Name
                </label>
                <input type="text" name="name" id="name" className="border py-2 px-4 rounded" placeholder="Name" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lastName" className="font-semibold mb-1">
                  Last Name
                </label>
                <input type="text" name="lastName" id="lastName" className="border py-2 px-4 rounded" placeholder="Last Name" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col">
                <label htmlFor="phone" className="font-semibold mb-1">
                  Phone
                </label>
                <input type="phone" name="phone" id="phone" className="border py-2 px-4 rounded" placeholder="Phone" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="font-semibold mb-1">
                  Email
                </label>
                <input type="email" name="email" id="email" className="border py-2 px-4 rounded" placeholder="Email" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col">
                <label htmlFor="nationality" className="font-semibold mb-1">
                  Nationality
                </label>
                <select name="nationality" id="nationality" className="border py-2 px-4 rounded">
                  <option value="-" selected disabled>--Nationality--</option>
                  {englishSpeakingCountries &&
                    englishSpeakingCountries.map((country, key) => (
                      <option key={key} value={country}>
                        {country}
                      </option>
                    ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="plans" className="font-semibold mb-1">
                  Program you're interested in
                </label>
                <select name="plans" id="plans" className="border py-2 px-4 rounded">
                  <option value="-" selected disabled>--Programs--</option>
                  {englishLearningPlans &&
                    englishLearningPlans.map((plan, key) => (
                      <option value={plan} key={key}>
                        {plan}
                      </option>
                    ))}
                </select>
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
            </div>

            <div className="w-full flex justify-end">
              <button
                type="submit"
                className="w-[50%] md:w-[25%] bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 font-semibold"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </section>
  );
}

export default Contact;
