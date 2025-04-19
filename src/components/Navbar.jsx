import logo from "../assets/icon 1.png";
import { useState } from "react";


const Navbar = () => {

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
<div>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/800">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
 
            <div className="flex items-center flex-shrink-0">
              {/* <img className="h-16 w-16 mr-2" src={logo} alt="logo" /> */}
              <span className="text-xl tracking-tight">Hephaestus</span>
            </div>

            
            <ul className="hidden lg:flex ml-14 space-x-12">
              
            </ul>

            
            <div className="hidden lg:flex space-x-4 items-center">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a href="#" className="bg-gradient-to-r from-blue-500 to-black-800 py-2 px-3 rounded-md">
                Create an Account
              </a>
            </div>

            
            <button
              className="lg:hidden text-gray-400 p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M4 5h16M4 12h16M4 19h16"
                  className={isMobileMenuOpen ? 'hidden' : 'block'}
                />
                <path
                  d="M6 6l12 12M6 18L18 6"
                  className={isMobileMenuOpen ? 'block' : 'hidden'}
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-3 space-y-2">
              <ul className="flex flex-col space-y-2">
                
              </ul>
              <div className="flex flex-col space-y-2 mt-3">
                <a href="#" className="py-2 px-3 border rounded-md text-center">
                  Sign In
                </a>
                <a href="#" className="bg-gradient-to-r from-blue-500 to-black-800 py-2 px-3 rounded-md text-center">
                  Create an Account
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
