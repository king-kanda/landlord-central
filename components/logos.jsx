import Image from 'next/image'
import React from 'react'

const logos = () => {
  return (
    <>
    <section className="bg-white ">
  <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
    <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center  md:text-3xl">
      You’ll be in good company
    </h2>
    <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 text-gray-400">
      <span>
        <Image
            src="/image1.avif" // Replace with your image path
            alt="Description of your image"
            width={200} // Replace with your image width
            height={30} // Replace with your image height
            />
      </span>
      <span>
        <Image
            src="/image2.avif" // Replace with your image path
            alt="Description of your image"
            width={200} // Replace with your image width
            height={30} // Replace with your image height
            />
      </span>
      <span>
        <Image
            src="/image3.gif" // Replace with your image path
            alt="Description of your image"
            width={200} // Replace with your image width
            height={30} // Replace with your image height
            />
      </span>
      <span>
        <Image
            src="/image4.png" // Replace with your image path
            alt="Description of your image"
            width={200} // Replace with your image width
            height={30} // Replace with your image height
            />
      </span>
      <span>
        <Image
            src="/image5.gif" // Replace with your image path
            alt="Description of your image"
            width={200} // Replace with your image width
            height={30} // Replace with your image height
            />
      </span>
      <span>
        <Image
            src="/image6.gif" // Replace with your image path
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

export default logos