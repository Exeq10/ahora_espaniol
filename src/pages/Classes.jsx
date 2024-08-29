import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Users, Info } from 'lucide-react'

export default function Classes() {
    return (
        <div className="bg-white min-h-screen font-montserrat">
            <Nav />

            <main>
                <section className="relative h-[300px] overflow-hidden">
                    <img src="/placeholder.svg?height=300&width=1200" alt="Students studying" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h1 className="font-londrina-solid font-black text-5xl text-white">Learning English with Ahora Español</h1>
                    </div>
                </section>

                <section className="py-16 bg-[#B4E1DF] rounded-3xl">
                    <div className="container mx-auto px-4">
                        <h2 className="font-londrina-solid font-black text-4xl mb-8 flex items-center">
                            <Users className="mr-2" />
                            Pricing small group classes</h2>
                        <div>
                            <div className="grid grid-cols-3 bg-white overflow-hidden shadow-lg font-londrina-solid font-black text-xl mb-2 rounded-3xl">
                                <div className="p-4">Hours/week</div>
                                <div className="p-4 text-center">Schedule</div>
                                <div className="p-4">Weekly Price</div>
                            </div>
                            <div className="grid grid-cols-3 bg-white overflow-hidden shadow-lg font-londrina-solid font-black text-xl mb-2 rounded-3xl">
                                <div className="p-4 ">2 hours/week</div>
                                <div className="p-4 text-center">
                                    <p>Monday to Friday</p>
                                    <p className="text-sm font-semibold">10am to 12pm or 1pm to 3pm</p>
                                    <p className="text-sm font-semibold">(Everyday classes/ 2 hours/day)</p>
                                </div>
                                <div className="p-4">€240 <span className="font-semibold">a week</span></div>
                            </div>
                            <div className="grid grid-cols-3 bg-white overflow-hidden shadow-lg font-londrina-solid font-black text-xl mb-2 rounded-3xl">
                                <div className="p-4">10 hours/week</div>
                                <div className="p-4 text-center">
                                    <p>Monday to Friday</p>
                                    <p className="text-sm font-semibold">10am to 12pm or 1pm to 3pm</p>
                                    <p className="text-sm font-semibold">(Everyday classes/ 2 hours/day)</p>
                                </div>
                                <div className="p-4">
                                    <p>€28 <span className="font-semibold">an hour, in our school</span></p>
                                    <p>€35 <span className="font-semibold">at a location of your choice</span></p>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 bg-white overflow-hidden shadow-lg font-londrina-solid font-black text-xl mb-2 rounded-3xl">
                                <div className="p-4">
                                    Intensive
                                    <br />
                                    20 hours/week
                                </div>
                                <div className="p-4 text-center">
                                    <p>Monday to Friday</p>
                                    <p className="text-sm font-semibold">10am to 12pm or 1pm to 3pm</p>
                                    <p className="text-sm font-semibold">(Everyday classes/ 2 hours/day)</p>
                                </div>
                                <div className="p-4">
                                    <p>€160 <span className="font-semibold">a week</span></p>
                                    <p>2 free activities</p>
                                    <p className="font-semibold">included after classes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                    <h2 className="font-londrina-solid font-black text-4xl mb-8 flex items-center">
                            <Users className="mr-2" />
                            Pricing Private Classes</h2>
                            <div>
                            <div className="grid grid-cols-3 bg-[#C1CA31] overflow-hidden shadow-lg font-londrina-solid font-black text-xl mb-2 rounded-3xl">
                                <div className="p-4">Hours/week</div>
                                <div className="p-4 text-center">Schedule</div>
                                <div className="p-4">Weekly Price</div>
                            </div>
                            <div className="grid grid-cols-3 bg-[#C1CA31] overflow-hidden shadow-lg font-londrina-solid font-black text-xl mb-2 rounded-3xl">
                                <div className="p-4 ">
                                Semi-intensive
                                        <br />
                                        One on one
                                        </div>
                                <div className="p-4 text-center">
                                    <p>Monday to Friday</p>
                                    <p className="text-sm font-semibold">10am to 12pm or 1pm to 3pm</p>
                                    <p className="text-sm font-semibold">(Everyday classes/ 2 hours/day)</p>
                                </div>
                                <div className="p-4">€240 <span className="font-semibold">a week</span></div>
                            </div>
                            <div className="grid grid-cols-3 bg-[#C1CA31] overflow-hidden shadow-lg font-londrina-solid font-black text-xl mb-2 rounded-3xl">
                                <div className="p-4">Pay as you go</div>
                                <div className="p-4 text-center">
                                    <p>Monday to Friday</p>
                                    <p className="text-sm font-semibold">10am to 12pm or 1pm to 3pm</p>
                                    <p className="text-sm font-semibold">(Everyday classes/ 2 hours/day)</p>
                                </div>
                                <div className="p-4">
                                    <p>€28 <span className="font-semibold">an hour, in our school</span></p>
                                    <p>€35 <span className="font-semibold">at a location of your choice</span></p>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 bg-[#C1CA31] overflow-hidden shadow-lg font-londrina-solid font-black text-xl mb-2 rounded-3xl">
                                <div className="p-4">
                                Intensive
                                        <br />
                                        20 hours/week
                                        <br />
                                        + private lessons
                                </div>
                                <div className="p-4 text-center">
                                    <p>Monday to Friday</p>
                                    <p className="text-sm font-semibold">10am to 12pm or 1pm to 3pm</p>
                                    <p className="text-sm font-semibold">(Everyday classes/ 2 hours/day)</p>
                                </div>
                                <div className="p-4">
                                    <p>€160 <span className="font-semibold">a week</span></p>
                                    <p>2 free activities</p>
                                    <p className="font-semibold">included after classes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="font-londrina-solid font-black text-4xl mb-8">Free activities</h2>
                    </div>
                </section>

                <div className="fixed bottom-8 right-8 bg-white rounded-full p-4 shadow-lg">
                    <div className="relative">
                        <Info className="w-8 h-8 text-[#43B3AF]" />
                        <div className="absolute bottom-full right-0 mb-2 w-64 bg-white p-4 rounded-lg shadow-lg hidden group-hover:block">
                            <p className="text-sm">2 to 5 students. There is no registration fee, and there are no hidden costs.</p>
                            <p className="text-sm mt-2">All prices are expressed in euros. All the prices include study materials, diploma, level test, direct access to our exclusive content and homework.</p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}