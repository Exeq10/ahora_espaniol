import { Link } from 'react-router-dom'
export default function Nav() {
    return (
      <nav className="bg-[#F5F5F5] overflow-hidden shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <img src="/public/NavBar Logo.png" alt="Ahora Español Logo" className="h-20" />
          <div className="space-x-4">
            <Link to="/classes" className="text-gray-600 hover:text-gray-900 font-montserrat">Classes</Link>
            <Link to="/accomodation" className="text-gray-600 hover:text-gray-900 font-montserrat">Accomodation</Link>
            <Link to="#" className="text-gray-600 hover:text-gray-900 font-montserrat">SIELE</Link>
            <Link to="/contact" className="bg-[#43B3AF] text-white px-6 py-2 rounded-full hover:bg-[#3A9E9A] font-montserrat font-semibold">
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    )
  }