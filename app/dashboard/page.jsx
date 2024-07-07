// data yote inapitia hapa ikipelekwa kwa child components


import { RentChart } from "@/components";
import { Poppins } from "next/font/google";
import { Raleway } from 'next/font/google';
import { ImArrowUp , ImArrowDown } from "react-icons/im";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],  
});

const raleway = Raleway({ 
    subsets: ["latin"],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],  
  });

const page = () => {
    return (
        <>
           <section className="p-4">
            {/* section one overview */}
            <div className="grid grid-cols-3 gap-6">
                <div className="p-6 m-2 shadow-lg rounded-lg ">
                  <div className="text-center ">
                    <h1 className={` ${poppins.className} text-6xl text-navy-blue font-bold`}>
                        25
                    </h1>
                    <span className={` ${raleway.className} text-sm `} >
                        properties
                    </span>
                  </div>
                 
                </div>
                <div className="p-6 m-2 shadow-lg rounded-lg ">
                  <div className="text-center ">
                    <h1 className={` ${poppins.className} text-navy-blue text-6xl font-bold`}>
                        250
                        <span className={`text-sm text-orange`}>
                            /1000
                        </span>
                    </h1>
                    <span className={` ${raleway.className} text-sm `} >
                       Occupied Units
                    </span>
                  </div>
                 
                </div> <div className="p-6 m-2 shadow-lg rounded-lg ">
                  <div className="text-center ">
                    <h1 className={` ${poppins.className} text-6xl text-navy-blue font-bold`}>
                        600
                    </h1>
                    <span className={` ${raleway.className} text-sm `} >
                        Tentant
                    </span>
                  </div>
                 
                </div>
            </div>
           </section>
           <hr />
            {/* charts or rent and occupants */}
            <section className="rent p-1">
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 chart-rent-p-4">
                        <RentChart/>
                    </div>
                    <div className="col-span-1 shadow-lg  rounded-lg">
                        {/* total outstanding areas  */}
                        <div className="p-6 ">
                            <div className="outstanding p-6">
                                <h2 className={` ${poppins.className} font-bold text-5xl text-red-500 inline-flex items-center  `}>
                                    <span className={` text-red-500 text-xl mx-3`}>
                                     <ImArrowUp /> 
                                    </span> 
                                    2300 $
                                </h2>
                                <br />
                                <span className="italic text-xs text-navy-blue">
                                    Total outstanding rent since jan 2022
                                </span>
                            </div>
                        </div>
                        <hr />
                        <div className="p-6 ">
                            <div className="outstanding p-6">
                                <h2 className={` ${poppins.className} font-bold text-5xl text-green-500 inline-flex items-center  `}>
                                    <span className={` text-green-500 text-xl mx-3`}>
                                     <ImArrowDown /> 
                                    </span> 
                                    300 $
                                </h2>
                                <br />
                                <span className="italic text-xs text-navy-blue">
                                    Total outstanding rent since jan 2022
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Transactions */}


            {/* maintanance request and fullfillments */}

        </>
    );
}

export default page;