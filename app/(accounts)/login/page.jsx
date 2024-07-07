import React from 'react'
import styles from '@/styles/home.module.scss'
import {FcGoogle } from 'react-icons/fc'
import Link from 'next/link'
import { FaHome } from "react-icons/fa";
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


const login = () => {
  return (
    <>
    <main>
            <section className="absolute w-full h-full">
                <div className="grid grid-cols-2 gap-2">
                    <div className={` p-6 bg-navy-blue ${styles.empty} `}>
                        <div className="absolute top-10">
                            <Link href="/">
                                <span className="text-white text-2xl">
                                    <FaHome /> 
                                </span>
                            </Link>
                            </div>
                    </div>
                    <div className={` form-sec p-16`}>
                        {/* form section */}
                        <div className={` ${styles.welcome}`}>
                            <h2 className={`text-center font-bold ${poppins.className} `}>
                                Welcome Back
                            </h2>
                            <p className='text-center'>
                                Taking care of your properties has never been easier.
                            </p>
                        </div>
                        <div className="form-section mt-5 px-14">
                            <form className={` ${styles.formSec} space-y-4 md:space-y-6`} action="#">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium ">Your email :</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-midblack text-black sm:text-sm rounded-lg focus:ring-light-orange focus:border-white-smoke block w-full p-2.5" placeholder="name@company.com" required=""/>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium">Password :</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-midblack text-black sm:text-sm rounded-lg focus:ring-light-orange focus:border-white-smoke block w-full p-2.5" required=""/>
                                </div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-grey rounded bg-gray-50 focus:ring-3 focus:ring-white-smoke  " required=""/>
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-700">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline ">Forgot password?</a>
                                </div>
                            <div>
                                <Link href="/dashboard" className='my-5'>
                                    <button type="submit" className="w-full text-white bg-navy-blue hover:bg-orange focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center ">Sign in</button>
                                    </Link>
                            </div>
                                <button type="submit" className="inline-flex items-center justify-center w-full text-white bg-black hover:bg-sfteal focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center ">
                                    <span className='text-2xl px-4'>
                                    <FcGoogle/>
                                    </span>
                                    <p>
                                        Sign in With Google
                                    </p>
                                    
                                </button>
                                
                            </form>
                            
                        
                        </div>
                        <div className="sign-up-sec mt-10 text-center">
                            <div className="create-account">
                                <p>
                                    Don&apos;t have an account? <Link href="/register"><span className='text-orange underline font-bold'>
                                        Create an account</span></Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>   
    </main>
    </>
  )
}

export default login