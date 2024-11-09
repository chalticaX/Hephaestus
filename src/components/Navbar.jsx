import logo from "../assets/sc1.jpg";

const Navbar = () => {

  return (

    <div>

      <nav  className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/800">
      
      <div className="container ps -4 mx-auto relative text-sm" >
        <div className="flex justify-centre items-centre">
          <div className=" flex items-centre flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">Hephaestus</span>
          </div>
        </div>
      </div>
      
      </nav>

      


    </div>
  )
}

export default Navbar
