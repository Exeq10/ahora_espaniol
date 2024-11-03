import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Accommodation() {
    return (
        <div className="bg-white min-h-screen font-montserrat">
            <Nav />

            <header className="bg-[#B4E1DF] py-8">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center items-center mb-4">
                        <div className="mr-4">
                            <img src="" alt="" width={150} height={75} />
                        </div>
                        <div className="flex items-center">
                            <div className=" mr-2">
                                <img src="" alt="" width={150} height={75} />
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="text-black text-lg font-semibold">CENTRO DE EXAMEN AUTORIZADO SIELE</p>
                        <p className="text-black text-lg">N° 33708</p>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-start mb-8">
                    <div className="md:w-2/3 mb-6 md:mb-0">
                        <h2 className="text-4xl font-bold mb-4 flex items-center">
                            <span className="mr-2">
                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            SIELE
                        </h2>
                        <p className="text-lg mb-4">
                            Our school is an authorized SIELE exam center. <strong>What is SIELE?</strong> A prestigious and
                            internationally recognized diploma to certify your Spanish which certifies electronically the
                            command of the Spanish language proficiency for students and professionals.
                        </p>
                    </div>
                    <div className="md:w-1/3 flex justify-center md:justify-end">
                        <button
                            className="bg-[#C1CA31] text-black font-bold py-4 px-6 rounded-full w-48 h-48 flex flex-col items-center justify-center text-center transition-colors duration-300"
                            aria-label="Book your exam"
                        >
                            <span className="text-sm mb-2">Click here to</span>
                            <span className="text-xl">Book your examen</span>
                            <span className="mt-2">
                            </span>
                        </button>
                    </div>
                </div>

                <h3 className="text-2xl font-semibold text-center mb-4">
                    What advantages does SIELE provide our students?
                </h3>
                <p className="text-lg text-center mb-8">
                    Certify your spanish with the recognition of the most important institutions. These institutions guarantee the standards
                    for quality and good practices in the creation of the tests and the use of diverse linguistic varieties in the hispanic world.
                </p>

                <div className="flex flex-wrap justify-center items-center gap-8">
                    <img src="" alt="Universidad de Salamanca" width={150} height={75} />
                    <img src="" alt="Instituto Cervantes" width={150} height={75} />
                    <img src="" alt="UNAM" width={150} height={75} />
                    <img src="" alt="UBA" width={150} height={75} />
                </div>
            </div>

            <div className="">
                <div className="bg-[#B4E1DF] py-6">
                    <h2 className="text-4xl font-bold text-white text-center">Digital, simple and accessible</h2>
                </div>
                <div className="container mx-auto px-4 py-8">
                    <p className="mb-4">
                        With SIELE, everything is managed electronically (registration, reservation, notifications...).{' '}
                        <a href="https://www.siele.org" className="text-blue-600 hover:underline">www.siele.org</a>.
                        You will receive your certification in a maximum of 3 weeks, where it will be available in your personal area.
                    </p>
                    <p className="mb-4">You can choose the most comprehensive SIELE Global modality that includes:All four skills</p>
                    <ul className="list-disc list-inside mb-4 ml-4">
                        <li>Reading comprehension</li>
                        <li>Writing expression and interaction</li>
                        <li>Listening comprehension</li>
                        <li>Oral expression and interaction or any of the Independent modalities.</li>
                    </ul>
                    <p className="mb-4">
                        Read more:{' '}
                        <a href="https://siele.org/en/examen">https://siele.org/en/examen</a>
                    </p>
                    <p className="mb-4">
                        SIELE certifies the degree of proficiency for the Spanish language the exam takes as a reference to the levels established
                        by the Common European Framework of Reference for Languages (CEFR).
                    </p>
                    <p className="mb-4">
                        <strong>UNIFORM:</strong> It is pan-Hispanic and incorporates all the linguistic variations of Spanish.
                    </p>
                    <p className="mb-4">
                        <strong>FLEXIBLE:</strong> There are no pre-defined dates. You choose the day, time and place, and exam modality.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <h2 className="text-4xl font-bold mb-6 text-center">
                    Ready to take the SIELE test in Mar del Plata?
                </h2>
                <p className="text-lg mb-8 text-center">
                    You can check our{' '}
                    <a href="#" className="text-blue-600 hover:underline">exam dates</a>{' '}
                    on our official SIELE page, or feel free to message us if you'd like to schedule a test at a time
                    that suits you best.
                </p>
                <div className="space-y-4 max-w-2xl mx-auto">
                    {[
                        { name: '1 hs Preparation Siele EXAM', price: '28 USD / 25 Euro' },
                        { name: '5 hs  Preparation Siele EXAM', price: '130 USD' },
                        { name: '10 hours one-on-one classes', subtext: 'starting every day all year long', price: '250 USD' },
                    ].map((item, index) => (
                        <div key={index} className="bg-[#C1CA31] rounded-lg p-4 flex justify-between items-center">
                            <div>
                                <h3 className="font-semibold">{item.name}</h3>
                                {item.subtext && <p className="text-sm">{item.subtext}</p>}
                            </div>
                            <span className="font-bold">{item.price}</span>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    )
}