import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Home } from 'lucide-react'

export default function Accommodation() {
  return (
    <div className="bg-white min-h-screen font-montserrat">
      <Nav />

      <main>
        <section className="relative h-[400px] overflow-hidden">
          <img src="/placeholder.svg?height=400&width=1200" alt="Mar del Plata coastline" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="font-londrina-solid font-black text-6xl text-white">Accomodation at Mar del Plata</h1>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <p className="text-lg mb-4">
                Living with local families offers a holistic language learning experience that combines linguistic immersion with cultural enrichment, making it an invaluable option for those seeking to improve their Spanish skills.
              </p>
              <p className="text-lg">
                Constant exposure to the language in real-life situations accelerates your language learning process. You'll have ample opportunities to engage in conversations, ask questions, and receive feedback from native speakers, which can significantly improve your speaking skills.Conversing with your host family allows you to pick up colloquialisms, accents, and cultural nuances that you might not encounter in a classroom setting.
              </p>
            </div>
            </div>
            </section>
            <section className="py-16 bg-[#B4E1DF] rounded-3xl">
            <div className="container mx-auto px-4">
            <h2 className="font-londrina-solid font-black text-4xl mb-8 flex items-center">
              <Home className="mr-2 fill-current" />
              Prices Homestays
            </h2>
            <div className="space-y-4">
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
                <div className="grid grid-cols-3 p-4">
                  <div className="font-bold">Hosts families with 2 meals</div>
                  <div className="text-center">We suggest this opportunity. Stay with a local family to enhance your Spanish skills daily and learn about your hosts' customs and routines.</div>
                  <div className="text-right">
                    <p>One bedroom - Breakfast - Evening meal: bathroom sharing</p>
                    <p className="font-bold">7 nights cost: €280</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
                <div className="grid grid-cols-3 p-4">
                  <div className="font-bold">Hosts families no meal included</div>
                  <div className="text-center">This option is for students who prefer to have more independence and flexibility during their stay or to make their own food.</div>
                  <div className="text-right">
                    <p className="font-bold">7 nights per week cost: €190</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="grid grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-lg p-4 mr-2">
                  <div className="font-bold">Apartment sharing at a nearby location</div>
                  <div className="text-center">You can become part of the local community while still being independent. You can choose to stay in a single or double room.</div>
                </div>
                <div className="grid grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-lg p-4 ml-2">    
                    <div className="font-bold">Student hostels</div>
                    <div className="text-center">Mar del Plata has a lot of students hosteles, let us help you choosing the right one for you.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#C1CA31] rounded-3xl p-6 text-white">
                <img src="/placeholder.svg?height=200&width=300" alt="Family experience" className="w-full h-48 object-cover rounded-2xl mb-4" />
                <p className="text-lg">
                  Staying with a local family offers a unique cultural experience. You'll get firsthand insight into the daily lives, habits, customs, and traditions of the local community. This immersion can include participating in family activities, and celebrations, enjoying typical meals, and gaining a deeper understanding and appreciation of Argentinian culture.
                </p>
              </div>
              <div className="bg-[#C1CA31] rounded-3xl p-6 text-white">
                <img src="/placeholder.svg?height=200&width=300" alt="Host family support" className="w-full h-48 object-cover rounded-2xl mb-4" />
                <p className="text-lg">
                  Host families often provide additional support and guidance, especially if you're new to the area. They can offer local tips on transportation and attractions, making your transition smoother and more enjoyable.
                </p>
              </div>
              <div className="bg-[#C1CA31] rounded-3xl p-6">
                <img src="/placeholder.svg?height=200&width=300" alt="Local cuisine" className="w-full h-48 object-cover rounded-2xl mb-4" />
                <p className="text-lg">
                  Living with a local family allows you to savor authentic homemade meals, giving you a true taste of Argentine cuisine. This not only enhances your cultural experience but also provides an opportunity to expand your culinary horizons.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-londrina-solid font-black text-6xl mb-8">Mar del plata</h2>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}