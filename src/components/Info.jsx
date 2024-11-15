import img2 from "../assets/dono1.jpg";


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

            <div className="flex flex-wrap justify-center" >
                <div className="w-80 my-10 lg:w-1/2" >
                    <img src={img2} alt="code"/> 
                </div>

            </div>
    </div>
  )
}

export default Info;
