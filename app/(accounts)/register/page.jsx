'use client'

import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import styles from '@/styles/home.module.scss'
import { FaHome } from "react-icons/fa";
import Link from 'next/link'
import { Poppins } from "next/font/google";
import { Raleway } from 'next/font/google';


const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],  
});

const raleway = Raleway({ 
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],  
});

const Page = () => {

  
    return (
        <>
            <section className={` ${styles.pageCont}`}>
                <div className="grid grid-cols-3 gap-0 items-center">
                    <div className={`col-span-2 p-6 bg-navy-blue ${styles.imgSec}`}>
                        {/* img  section */}
                         <div className="absolute top-10">
                           <Link href="/">
                            <span className="text-white text-2xl">
                                <FaHome /> 
                            </span>
                           </Link>
                         </div>
                    </div>

                    <div className="form-section p-6 ">

                        <div className={` ${poppins.className}  ${styles.formHeading} mb-6`}>
                            <h1 className="text-navy-blue">
                                Work With Ease <span className="text-orange">.</span>
                            </h1>
                            <h3>Join us today</h3>
                        </div>
                        <div className="button-sections">
                            <button
                                type="submit"
                                className="w-full border border-black  font-medium rounded-full text-sm mt-2 px-5 py-2.5 focus:outline-none"
                            >
                               <p className="inline-flex items-center justify-between">
                                  <span className="loginIcons mx-2"> <BsFacebook /> </span> Continue With Facebook
                               </p> 
                            </button>
                            <button
                                type="submit"
                                className="w-full border border-black  font-medium rounded-full text-sm mt-2 px-5 py-2.5 focus:outline-none"
                                // onClick={handleSignIn}
                            >
                               <p className="inline-flex items-center justify-between">
                                  <span className="loginIcons mx-2"> <FcGoogle /> </span> Continue With Google
                               </p> 
                            </button>
                        </div>
                        <div className="flex items-center justify-center space-x-4 my-4">
                            <div className="border-t border-gray-600 flex-grow"></div>
                            <span className="text-gray-700">OR</span>
                            <div className="border-t border-gray-600 flex-grow"></div>
                        </div>
                           <Link href="/signup/email-signup">
                            <button
                                    type="submit"
                                    className="w-full bg-navy-blue hover:bg-gray-400 text-white hover:text-green  font-medium rounded-full text-sm mt-2 px-5 py-2.5 focus:outline-none"
                                >
                                    Sign up with Phone or Email
                                
                                </button>
                           </Link>
                            <div className="term-of-service mt-4">
                                <p className="text-sm text-gray-700">
                                    By signing up, you agree to the Terms of Service and 
                                    Privacy Policy, including cookie use.
                                </p>
                            </div>
                            <div className="mt-6">
                                <p className="font-semibold mb-2">
                                    Already Have an account?
                                </p>
                                 <Link href="/login">
                                    <button
                                            type="submit"
                                            className="w-full border border-black  font-medium rounded-full text-sm mt-2 px-5 py-2.5 focus:outline-none"
                                            >
                                        <p className="inline-flex items-center justify-between">
                                            Login
                                        </p> 
                                    </button>    
                                </Link>       
                            </div>
                    </div>
                    
                </div>
            </section>
        </>
    );
}

export default Page;