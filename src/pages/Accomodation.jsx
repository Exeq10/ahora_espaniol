import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Accommodation() {
  return (
    <div className="bg-white min-h-screen font-montserrat">
      <Nav />

      <main>
        <section className="relative h-[300px] md:h-[400px] overflow-hidden">
          <img src="../public/Rectangle 3.png?height=400&width=1200" alt="Mar del Plata coastline" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="font-londrina-solid font-black text-3xl md:text-6xl text-center text-white px-4">Accomodation at Mar del Plata</h1>
          </div>
        </section>

        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8 md:mb-12">
              <div className="flex items-center mb-4">
                <img src="../public/solar_plain-bold.png" className="mr-4" />
                <p className="text-base md:text-lg">
                  Living with local families offers a holistic language learning experience that combines linguistic immersion with cultural enrichment, making it an invaluable option for those seeking to improve their Spanish skills.
                </p>
              </div>
              <div className="flex items-center mb-4">
                <img src="../public/solar_plain-bold.png" className="mr-4" />
                <p className="text-base md:text-lg">
                  Constant exposure to the language in real-life situations accelerates your language learning process. You'll have ample opportunities to engage in conversations, ask questions, and receive feedback from native speakers, which can significantly improve your speaking skills. Conversing with your host family allows you to pick up colloquialisms, accents, and cultural nuances that you might not encounter in a classroom setting.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-16 bg-[#B4E1DF] rounded-3xl">
          <div className="container mx-auto px-4">
            <h2 className="font-londrina-solid font-black text-2xl md:text-4xl mb-4 md:mb-8 flex items-center">
              <img src="../public/icon house.png" className="mr-4" />
              Prices Homestays
            </h2>
            <div className="space-y-4">
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 p-4 gap-4">
                  <div className="font-bold text-center md:text-left">Hosts families with 2 meals</div>
                  <div className="text-center">We suggest this opportunity. Stay with a local family to enhance your Spanish skills daily and learn about your hosts' customs and routines.</div>
                  <div className="text-center md:text-right">
                    <p>One bedroom - Breakfast - Evening meal: bathroom sharing</p>
                    <p className="font-bold">7 nights cost: €340/ USD 360</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 p-4 gap-4">
                  <div className="font-bold text-center md:text-left">Hosts families no meal included</div>
                  <div className="text-center">This option is for students who prefer to have more independence and flexibility during their stay or to make their own food.</div>
                  <div className="text-center md:text-right">
                    <p className="font-bold">7 nights per week cost: €190/USD 210</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg p-4">
                  <div className="font-bold text-center md:text-left">Apartment sharing at a nearby location</div>
                  <div className="text-center">You can become part of the local community while still being independent. You can choose to stay in a single or double room.</div>
                </div>
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg p-4">
                  <div className="font-bold text-center md:text-left">Student hostels</div>
                  <div className="text-center">Mar del Plata has a lot of students hosteles, let us help you choosing the right one for you.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              <div className="relative">
                <img src="../public/Rectangle 26.png" alt="Family experience" className="w-full h-auto" />
                <div className="absolute bottom-0 flex flex-col justify-center bg-[#C1CA31] rounded-b-3xl h-52">
                  <p className="text-white p-4 text-center">
                    Staying with a local family offers a unique cultural experience. You'll get firsthand insight into the daily lives, habits, customs, and traditions of the local community. This immersion can include participating in family activities, and celebrations, enjoying typical meals, and gaining a deeper understanding and appreciation of Argentinian culture.
                  </p>
                </div>
              </div>

              <div className="relative">
                <img src="../public/Rectangle 26 (1).png" alt="Family experience" className="w-full h-auto" />
                <div className="absolute bottom-0 flex flex-col justify-center bg-[#C1CA31] rounded-b-3xl h-52">
                  <p className="text-white p-4 text-center">
                    Host families often provide additional support and guidance, especially if you're new to the area. They can offer local tips on transportation and attractions, making your transition smoother and more enjoyable.
                  </p>
                </div>
              </div>

              <div className="relative">
                <img src="../public/Rectangle 28.png" alt="Family experience" className="w-full h-auto" />
                <div className="absolute bottom-0 flex flex-col justify-center bg-[#C1CA31] rounded-b-3xl h-52">
                  <p className="text-white p-4 text-center">
                    Living with a local family allows you to savor authentic homemade meals, giving you a true taste of Argentine cuisine. This not only enhances your cultural experience but also provides an opportunity to expand your culinary horizons.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-londrina-solid font-black text-4xl md:text-6xl mb-8">Mar del Plata</h2>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}