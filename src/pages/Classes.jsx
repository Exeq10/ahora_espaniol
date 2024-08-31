import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function Classes() {
    return (
        <div className="bg-white min-h-screen font-montserrat relative">
            <Nav />

            <main>
                {/* Sección de la imagen principal */}
                <section className="relative h-[300px] overflow-hidden">
                    <img src="/Rectangle 2.png?height=300&width=1200" alt="Students studying" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h1 className="font-londrina-solid font-black text-5xl text-white">Learning English with Ahora Español</h1>
                    </div>
                </section>

                {/* Sección de precios para clases grupales */}
                <section className="py-16 bg-[#B4E1DF] rounded-b-3xl relative z-10">
                <div className="container mx-auto px-4 md:pr-[380px] md:pb-0 pb-[160px]">
                        <h2 className="font-montserrat font-bold text-4xl mb-8 flex items-center">
                            <img src="/ICON USERS.png" className="mr-4" />
                            Pricing small group classes
                        </h2>
                        <div>
                            <div className="grid grid-cols-3 bg-white overflow-hidden shadow-lg font-montserrat text-xl mb-2 rounded-3xl">
                                <div className="p-4 font-bold">Hours/week</div>
                                <div className="p-4  font-bold text-center">Schedule</div>
                                <div className="p-4 font-bold">Weekly Price</div>
                            </div>
                            <div className="grid grid-cols-3 bg-white overflow-hidden shadow-lg font-montserrat text-xl mb-2 rounded-3xl">
                                <div className="p-4 font-bold">2 hours/week</div>
                                <div className="p-4 text-center">
                                    <p className="font-bold" >Monday to Friday</p>
                                    <p className="text-sm ">10am to 12pm or 1pm to 3pm</p>
                                    <p className="text-sm">(Everyday classes/ 2 hours/day)</p>
                                </div>
                                <div className="p-4 font-bold">€240 <span className="font-normal">a week</span></div>
                            </div>
                            <div className="grid grid-cols-3 bg-white overflow-hidden shadow-lg font-montserrat text-xl mb-2 rounded-3xl">
                                <div className="p-4 font-bold">10 hours/week</div>
                                <div className="p-4 font-bold text-center">
                                    <p className="font-bold">Monday to Friday</p>
                                    <p className="text-sm ">10am to 12pm or 1pm to 3pm</p>
                                    <p className="text-sm ">(Everyday classes/ 2 hours/day)</p>
                                </div>
                                <div className="p-4 font-bold">
                                    <p>€28 <span className="font-normal">an hour, in our school</span></p>
                                    <p>€35 <span className="font-normal">at a location of your choice</span></p>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 bg-white overflow-hidden shadow-lg font-montserrat text-xl mb-2 rounded-3xl">
                                <div className="p-4 font-bold">
                                    Intensive
                                    <br />
                                    20 hours/week
                                </div>
                                <div className="p-4 text-center">
                                    <p className="font-bold">Monday to Friday</p>
                                    <p className="text-sm ">10am to 12pm or 1pm to 3pm</p>
                                    <p className="text-sm ">(Everyday classes/ 2 hours/day)</p>
                                </div>
                                <div className="p-4 font-bold">
                                    <p>€160 <span className="font-normal">a week</span></p>
                                    <p>2 free activities</p>
                                    <p className="font-normal">included after classes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sección de precios para clases privadas */}
                <section className="py-16 bg-white rounded-b-3xl relative z-10">
                <div className="container mx-auto px-4 md:pr-[380px] md:pt-0 pt-[160px]">
                        <h2 className="font-montserrat font-bold text-4xl mb-8 flex items-center">
                            <img src="/ICON USERS.png" className="mr-4" />
                            Pricing Private Classes
                        </h2>
                        <div>
                            <div className="grid grid-cols-3 bg-[#C1CA31] overflow-hidden shadow-lg font-montserrat text-xl mb-2 rounded-3xl">
                                <div className="p-4 font-bold">Hours/week</div>
                                <div className="p-4 font-bold text-center">Schedule</div>
                                <div className="p-4 font-bold">Weekly Price</div>
                            </div>
                            <div className="grid grid-cols-3 bg-[#C1CA31] overflow-hidden shadow-lg font-montserrat text-xl mb-2 rounded-3xl">
                                <div className="p-4 font-bold">
                                    Semi-intensive
                                    <br />
                                    One on one
                                </div>
                                <div className="p-4 text-center">
                                    <p className="font-bold">Monday to Friday</p>
                                    <p className="text-sm ">10am to 12pm or 1pm to 3pm</p>
                                    <p className="text-sm ">(Everyday classes/ 2 hours/day)</p>
                                </div>
                                <div className="p-4 font-bold">€240 <span className="font-normal">a week</span></div>
                            </div>
                            <div className="grid grid-cols-3 bg-[#C1CA31] overflow-hidden shadow-lg font-montserrat text-xl mb-2 rounded-3xl">
                                <div className="p-4 font-bold">Pay as you go</div>
                                <div className="p-4 text-center">
                                    <p className="font-bold">Monday to Friday</p>
                                    <p className="text-sm ">10am to 12pm or 1pm to 3pm</p>
                                    <p className="text-sm ">(Everyday classes/ 2 hours/day)</p>
                                </div>
                                <div className="p-4 font-bold">
                                    <p>€28 <span className="font-normal">an hour, in our school</span></p>
                                    <p>€35 <span className="font-normal">at a location of your choice</span></p>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 bg-[#C1CA31] overflow-hidden shadow-lg font-montserrat text-xl mb-2 rounded-3xl">
                                <div className="p-4 font-bold">
                                    Intensive
                                    <br />
                                    20 hours/week
                                    <br />
                                    + private lessons
                                </div>
                                <div className="p-4 text-center">
                                    <p className="font-bold">Monday to Friday</p>
                                    <p className="text-sm ">10am to 12pm or 1pm to 3pm</p>
                                    <p className="text-sm ">(Everyday classes/ 2 hours/day)</p>
                                </div>
                                <div className="p-4 font-bold">
                                    <p>€160 <span className="font-normal">a week</span></p>
                                    <p>2 free activities</p>
                                    <p className="font-normal">included after classes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Círculo en la intersección */}
                <div className="absolute right-0 flex justify-center transform md:top-[860px] top-[1200px] z-20 md:w-[300px] md:h-[300px] lg:w-[380px] lg:h-[380px]">
                    <div className="bg-white flex flex-col items-center justify-center rounded-full p-4 shadow-lg w-full h-full">
                        <img src="/icono warning.png" className="mb-4" />
                        <p className="text-sm text-center">2 to 5 students. There is no registration fee, and there are no hidden costs.</p>
                        <p className="text-sm mt-2 text-center">All prices are expressed in euros. All the prices include study materials, diploma, level test, direct access to our exclusive content and homework.</p>
                    </div>
                </div>

                {/* Sección de actividades gratuitas */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="font-londrina-solid font-black text-4xl mb-8">Free activities</h2>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
