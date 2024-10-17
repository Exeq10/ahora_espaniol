import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function Classes() {
    return (
        <div className="bg-white min-h-screen font-montserrat relative">
            <Nav />

            <main>
                {/* Sección de la imagen principal */}
                <section className="relative h-[300px] overflow-hidden">
                    <img src="../public/Rectangle 2.png?height=300&width=1200" alt="Students studying" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h1 className="font-londrina-solid font-black text-5xl text-white">Learning English with Ahora Español</h1>
                    </div>
                </section>

                {/* Sección de precios para clases grupales */}
                <section className="py-16 bg-[#B4E1DF] rounded-b-3xl relative z-10">
                <div className="container mx-auto px-4 md:pr-[380px] md:pb-0 pb-[160px]">
                        <h2 className="font-montserrat font-bold text-4xl mb-8 flex items-center">
                            <img src="../public/ICON USERS.png" className="mr-4" />
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
                                    <p className="font-bold" >Tuesdays and Thursdays</p>
                                    <p className="text-sm">from 10am to 12pm</p>
                                </div>
                                <div className="p-4 font-bold">USD 26 <span className="font-normal">a week</span>
                                    <p className="text-sm">( USD 13 per class)</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 bg-white overflow-hidden shadow-lg font-montserrat text-xl mb-2 rounded-3xl">
                                <div className="p-4 font-bold">
                                    6 hours/week
                                    <br />
                                    9 hours/ week
                                </div>
                                <div className="p-4 font-bold text-center">
                                    <p className="font-bold">Monday to Friday</p>
                                    <p className="text-sm ">from 10am to 1pm</p>
                                    <p className="text-sm "> (with a coffee/mate break at 11am)</p>
                                    <p className="text-sm ">3 hours/day minimum two consecutives days</p>
                                </div>
                                <div className="p-4 font-bold">
                                    <p>USD 68 <span className="font-normal">Two days= 6 hs /Week</span></p>
                                    <p>USD 90 <span className="font-normal">Three days= 9h/w</span></p>
                                    <p className="text-sm">You can combine the weekly frequency of classes according to your stay in Mar del Plata</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 bg-white overflow-hidden shadow-lg font-montserrat text-xl mb-2 rounded-3xl">
                                <div className="p-4 font-bold">
                                    Intensive
                                    <br />
                                    15 hours/week
                                </div>
                                <div className="p-4 text-center">
                                    <p className="font-bold">Monday to Friday</p>
                                    <p className="text-sm ">from  10 am to 1pm</p>
                                    <p className="text-sm ">(with a coffee/mate break at 11am)</p>
                                    <p className="text-sm ">3 hours/day</p>
                                </div>
                                <div className="p-4 font-bold">
                                    <p>USD 142 <span className="font-normal">a week</span></p>
                                    <p>2 free activities</p>
                                    <p className="font-normal">included after classes</p>
                                    <p className="text-sm ">( USD 9.5 per class)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sección de precios para clases privadas */}
                <section className="py-16 bg-white rounded-b-3xl relative z-10">
                <div className="container mx-auto px-4 md:pr-[380px] md:pt-0 pt-[160px]">
                        <h2 className="font-montserrat font-bold text-4xl mb-8 flex items-center">
                            <img src="../public/ICON USERS.png" className="mr-4" />
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
                                <div className="p-4 font-bold">USD 240 <span className="font-normal">a week</span></div>
                            </div>
                            <div className="grid grid-cols-3 bg-[#C1CA31] overflow-hidden shadow-lg font-montserrat text-xl mb-2 rounded-3xl">
                                <div className="p-4 font-bold">Pay as you go</div>
                                <div className="p-4 text-center">
                                    <p className="font-bold">Starts any day</p>
                                    <p className="font-bold">All year round</p>
                                </div>
                                <div className="p-4 font-bold">
                                    <p>USD 25 <span className="font-normal">an hour, in our school</span></p>
                                    <p>USD 35 <span className="font-normal">at a location of your choice</span></p>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 bg-[#C1CA31] overflow-hidden shadow-lg font-montserrat text-xl mb-2 rounded-3xl">
                                <div className="p-4 font-bold">
                                    Intensive
                                    <br />
                                    15 hours/week
                                    <br />
                                    5hs private lessons
                                </div>
                                <div className="p-4 text-center">
                                    <p className="font-bold">Monday to Friday</p>
                                    <p className="text-sm ">10am to 1pm (small group)</p>
                                    <p className="text-sm ">& 2-3pm (Private tutoring)</p>
                                    <p className="text-sm ">4 hours/day</p>
                                    <p className="text-sm ">= 20 hours/week</p>
                                </div>
                                <div className="p-4 font-bold">
                                    <p>USD 225 <span className="font-normal">a week</span></p>
                                    <p>2 free activities</p>
                                    <p className="font-normal">included after classes</p>
                                    <p className="text-sm">( USD 16 per hour private lesson)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Círculo en la intersección */}
                <div className="absolute right-0 flex justify-center transform md:top-[860px] top-[1200px] z-20 md:w-[300px] md:h-[300px] lg:w-[380px] lg:h-[380px] hidden md:block">
                    <div className="bg-white flex flex-col items-center justify-center rounded-full p-4 shadow-lg w-full h-full">
                        <img src="../public/icono warning.png" className="mb-4" />
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
