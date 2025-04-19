import img3 from "../assets/h1.jpg";
import img4 from "../assets/h2.jpg";
import img7 from "../assets/h5.jpg";
import img8 from "../assets/h6.jpg";
import img9 from "../assets/h7.jpg";


const Info = () => {
  return (
    <div className="mt-20">

        <h2 className="text-3xl sm:text-5xl lg:text-gxl text-center mt-6 tracking-wide">
            
            Our Outreach {" "}
            <span className="bg-gradient-to-r from-blue-500 to-black-800 text-transparent bg-clip-text" >
            progress and Achievements
            </span>
            
            </h2>

            <p className="mt-10 text-lg text-center text-neutral-500 max-2-4xl" >
            We are Currently based in Nairobi,Kenya where most of our operations take place , Our plan through 2024/2025 is to reach out to as many person's with disabilities in Kenya and Beyond , All proceedings and from the Donations will go to Charity and Community development. 
         </p>

            <div className=" ml-8 columns-sm  justify-center" >
                <div className="mt-6 lg:w-1/2" >
                    <img className="rounded-lg w-1/2 border border-blue-700 shadow-blue-400" src={img3} alt="code"/> 
                    <br></br>
                    <img className="rounded-lg w-1/2 border border-blue-700 shadow-blue-400" src={img4} alt="code"/> 
                    <br></br>
                    <img className="rounded-lg w-1/2 border border-blue-700 shadow-blue-400" src={img7} alt="code"/>
                    <br></br>
                    <img className="rounded-lg w-1/2 border border-blue-700 shadow-blue-400" src={img8} alt="code"/> 
                    <br></br>
                    <img className="rounded-lg w-1/2 border border-blue-700 shadow-blue-400" src={img9} alt="code"/> 
                </div>

            </div>
    </div>
  )
}

export default Info;
