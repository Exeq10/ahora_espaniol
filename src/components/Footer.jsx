import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F5] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <img src="../public/logo 1.png" alt="Ahora Español Logo" />
            <p className="text-sm font-montserrat">Learn Spanish in Mar del Plata</p>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h4 className="font-londrina-solid font-black text-xl mb-2">About us</h4>
            <ul className="text-sm font-montserrat">
              <li><a href="#" className="hover:text-[#C1CA31]">Location</a></li>
              <li><a href="#" className="hover:text-[#C1CA31]">Courses</a></li>
              <li><a href="#" className="hover:text-[#C1CA31]">Activities</a></li>
              <li><a href="#" className="hover:text-[#C1CA31]">Accomodation</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h4 className="font-londrina-solid font-black text-xl mb-2">Contact us</h4>
            <p className="text-sm font-montserrat">+54 11566685463</p>
            <div className="flex space-x-4 mt-2">
              <a href="#">
                <Instagram/>
              </a>
              <a href="#">
                <Facebook/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}  