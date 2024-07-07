import Image from 'next/image'
import React from 'react'


const Integrations = () => {
  return (
    <>
    <section className="bg-white ">
  <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
    <div className="flex flex-col items-center">
    <h2 className="mb-6 text-4xl font-extrabold tracking-tight leading-tight text-center  md:text-4xl">
        Integrations
    </h2>
    <p className="text-center mb-8 w-2/5">
    EazzyRent integrates with local financial institutions to process payments in real time. We integrate with all major banks
    </p>
    </div>
    <div className="flex items-center justify-around">
    
      <span>
        <Image
            src="https://eazzyrent.com/images/landing-page/mpesa_logo.png" // Replace with your image path
            alt="Description of your image"
            width={100} // Replace with your image width
            height={30} // Replace with your image height
            />
      </span>
      <span>
        <Image
            src="https://eazzyrent.com/images/landing-page/KCB_Bank_Kenya_Limited_logo.png" // Replace with your image path
            alt="Description of your image"
            width={100} // Replace with your image width
            height={30} // Replace with your image height
            />
      </span>
      
      <span>
        <Image
            src="https://eazzyrent.com/images/landing-page/national_bank_logo.webp" // Replace with your image path
            alt="Description of your image"
            width={100} // Replace with your image width
            height={30} // Replace with your image height
            />
      </span>
      
      <span>
        <Image
            src="https://eazzyrent.com/images/landing-page/family_bank_logo.png" // Replace with your image path
            alt="Description of your image"
            width={100} // Replace with your image width
            height={30} // Replace with your image height
            />
      </span>
      <span>
        <Image
            src="https://cdn-webportal.airtelstream.net/website/kenya/assets/images/main-logo.svg" // Replace with your image path
            alt="Description of your image"
            width={100} // Replace with your image width
            height={30} // Replace with your image height
            />
      </span>
      <span>
        <Image
            src="https://a.sfdcstatic.com/shared/images/c360-nav/salesforce-with-type-logo.svg" // Replace with your image path
            alt="Description of your image"
            width={100} // Replace with your image width
            height={30} // Replace with your image height
            />
      </span>

    </div>
  </div>
  <hr />
</section>

    </>
  )
}

export default Integrations