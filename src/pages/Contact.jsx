import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Nav from "../components/Nav";



function Contact() {
  


  return (
    <section>
      <Nav />

      <main
        className="bg-black h-[830px] w-full bg-cover bg-center flex justify-center md:flex-row flex-col  items-center p-5 md:p-10"
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
        
        <ContactForm/>
        </div>
      </main>

      <Footer />
    </section>
  );
}

export default Contact;
