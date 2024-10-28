import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Nav() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#F5F5F5] overflow-hidden shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <img src="../public/NavBar Logo.png" alt="Ahora Español Logo" className="h-12 md:h-20" />

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
        >
          <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Links - Hidden on Mobile */}
        <div className="hidden md:flex space-x-4">
          <Link to="/classes" className="text-gray-600 hover:text-gray-900 font-montserrat">Classes</Link>
          <Link to="/accomodation" className="text-gray-600 hover:text-gray-900 font-montserrat">Accomodation</Link>
          <Link to="/Siele" className="text-gray-600 hover:text-gray-900 font-montserrat">SIELE</Link>
          <Link to="/contact" className="bg-[#43B3AF] text-white px-6 py-2 rounded-full hover:bg-[#3A9E9A] font-montserrat font-semibold">
            Contact Us
          </Link>

        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} px-4 pb-4`}>
        <Link to="/classes" className="block text-gray-600 hover:text-gray-900 py-2 font-montserrat">Classes</Link>
        <Link to="/accomodation" className="block text-gray-600 hover:text-gray-900 py-2 font-montserrat">Accomodation</Link>
        <Link to="#" className="block text-gray-600 hover:text-gray-900 py-2 font-montserrat">SIELE</Link>
        <Link to="/contact" className="block bg-[#43B3AF] text-white px-6 py-2 rounded-full hover:bg-[#3A9E9A] font-montserrat font-semibold mt-2">
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
