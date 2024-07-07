import React from 'react'

const footer = () => {
  return (
   <>
    <footer className="bg-navy-blue shadow">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-white sm:text-center">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline text-orange-500">
                Flowbite™
            </a>
            . All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
            <li>
                <a href="#" className="hover:underline me-4 md:me-6 text-white hover:text-orange-500">
                About
                </a>
            </li>
            <li>
                <a href="#" className="hover:underline me-4 md:me-6 text-white hover:text-orange-500">
                Privacy Policy
                </a>
            </li>
            <li>
                <a href="#" className="hover:underline me-4 md:me-6 text-white hover:text-orange-500">
                Licensing
                </a>
            </li>
            <li>
                <a href="#" className="hover:underline text-white hover:text-orange-500">
                Contact
                </a>
            </li>
            </ul>
        </div>
    </footer>
   </>
  )
}

export default footer