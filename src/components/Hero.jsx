import vid1 from "../assets/heel.mp4";

const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20" >
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide" > 
        Your Partner In Community {" "}
        <span className="bg-gradient-to-r from-blue-500 to-black-800 text-transparent bg-clip-text" >
         Empowerment and Development
        </span>
         </h1>
         <p className="mt-10 text-lg text-center text-neutral-500 max-2-4xl" >
            We as Hephaestus strive to help those in need of support , by offering Physical Aid Devices , Literature , PWD's Financial Aid and a community ready to guide you though each process. 
         </p>
         <div className="flex justify-centre my-10" >

            <a href="#" className="bg-gradient-to-r from-blue-500 to-black-800 py-3 px-4 mx-3 rounded-md" > 
                Learn More about us
            </a>
            <a href="#" className="py-3 px-4 mx-3 rounded-md border" >
                Donate 
            </a>
         </div>
         <div className="flex mt-10 justify-center" >
            <video autoPlay loop muted className="rounded-lg w-1/2 border border-blue-700 shadow-blue-400 mx-2 my-4">
                <source src={vid1} type="video/mp4"/>
            </video>
             </div>
    </div>
  )
}

export default Hero;
