import logo from "../assets/icon 1.png";
import navItems from "../App.js";


const Navbar = () => {


  return (

    <div>

      <nav  className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/800">
      
      <div className="container px-4 mx-auto relative text-sm" >
        <div className="flex justify-between items-center">
          <div className=" flex items-center flex-shrink-0">
            <img className="h-16 w-16 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">Hephaestus</span>
          </div>

          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems}
          </ul>
         <div className="lg:flex justify-center space-x-12 items-centre">

          <a href="#" className="py-2 px-3 border rounded-md">
            Sign In
          </a>
          <a href="#" className="bg-gradient-to-r from-blue-500 to-black-800 py-2 px-3 rounded-md">
             Create an Account
          </a>
         </div>
      
        </div>
      </div>
      
      </nav>

      


    </div>
  )
}

export default Navbar;
