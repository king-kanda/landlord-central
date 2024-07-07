import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { FaPlus ,FaMinus } from "react-icons/fa";


export default function Example() {
  return (
    <div className=" w-full h-scresen p-16">
    <div className="flex flex-col items-center">
        <h2 className="mb-6 text-4xl font-extrabold tracking-tight leading-tight text-center  md:text-4xl">
            FAQs
        </h2>
        <p className="text-center mb-8 w-2/5">
        Frequently Asked Questions
        </p>
    </div>
      <div className="mx-auto w-full max-w-lg divide-y divide-green-700/5 rounded-xl bg-green-700/5">
        <Disclosure as="div" className="p-6" defaultOpen={true}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm/6 font-medium text-navy-blue group-data-[hover]:text-navy-blue/80">
              What is your refund policy?
            </span>
            <FaMinus className="size-5 fill-navy-blue/60 group-data-[hover]:fill-navy-blue/50 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 ">
            If you&apos;re unhappy with your purchase, we&apos;ll refund you in full.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="p-6">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm/6 font-medium text-navy-blue group-data-[hover]:text-navy-blue/80">
              Do you offer technical support?
            </span>
            <FaMinus className="size-5 fill-navy-blue/60 group-data-[hover]:fill-navy-blue/50 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 ">
          Yes! We are always ready to offer you support through email, chat and phone call.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="p-6">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm/6 font-medium text-navy-blue group-data-[hover]:text-navy-blue/80">
            Can I download LandLordCentral?
            </span>
            <FaMinus className="size-5 fill-navy-blue/60 group-data-[hover]:fill-navy-blue/50 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 ">
          Yes! LC is a cloud based solution and we suggest that you access it online through our servers. However if you require to install it on your phone, you can click the download link here
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="p-6">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm/6 font-medium text-navy-blue group-data-[hover]:text-navy-blue/80">
            How do I buy LandLord Central?
            </span>
            <FaMinus className="size-5 fill-navy-blue/60 group-data-[hover]:fill-navy-blue/50 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5  origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0">
          Simply reach out to us and we will set up your account. You can also request for a presentation here
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="p-6">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm/6 font-medium text-navy-blue group-data-[hover]:text-navy-blue/80">
            Can I upgrade or downgrade my package?
            </span>
            <FaMinus className="size-5 fill-navy-blue/60 group-data-[hover]:fill-navy-blue/50 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5  origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0">
          Yes. We scale with your operations. You can also choose to switch to a lower package anytime.
          </DisclosurePanel>
        </Disclosure>
        
      </div>
    </div>
  )
}