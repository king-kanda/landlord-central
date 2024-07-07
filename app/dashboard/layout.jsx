"use client"

import { Fragment  } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import {
    HomeIcon,
    UsersIcon,
    BuildingOfficeIcon,
    CalendarIcon,
    CalculatorIcon,
    ChartPieIcon,
    Cog6ToothIcon,
    Bars3Icon,
    BellIcon,
    WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const navigation = [
    { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
    { name: 'Tenants', href: '#', icon: UsersIcon, current: false },
    { name: 'Properties', href: '#', icon: BuildingOfficeIcon, current: false },
    { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
    { name: 'Alerts', href: '#', icon: BellIcon, current: false },
    { name: 'Invoices', href: '#', icon:  CalculatorIcon, current: false },
    { name: 'Maintenance', href: '#', icon:  WrenchScrewdriverIcon, current: false },
  ];
const teams = [
  { id: 1, name: 'Buy SMS', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Switch to Tenant', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Balance', href: '#', initial: 'B', current: false },
]
const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example({ children }) {
//   const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
     
      <div>
       
        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col  ">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 text-white bg-navy-blue px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
                <h1>
                    L.Central
                </h1>
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-50 text-navy-blue'
                              : 'text-white hover:text-navy-blue hover:bg-gray-50',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current ? 'text-orange' : 'text-gray-100 group-hover:text-navy-blue',
                              'h-6 w-6 shrink-0'
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="text-xs font-semibold leading-6 text-gray-00 underline ">More Items</div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {teams.map((team) => (
                      <li key={team.name}>
                        <a
                          href={team.href}
                          className={classNames(
                            team.current
                              ? 'bg-gray-50 text-navy-blue'
                              : 'text-white hover:text-navy-blue hover:bg-gray-50',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                          )}
                        >
                          <span
                            className={classNames(
                              team.current
                                ? 'text-white border-orange'
                                : 'text-white border-gray-200 group-hover:border-indigo-600 group-hover:text-navy-blue',
                              'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-light-orange'
                            )}
                          >
                            {team.initial}
                          </span>
                          <span className="truncate">{team.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="mt-auto">
                  <a
                    href="#"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-white hover:bg-gray-50 hover:text-navy-blue"
                  >
                    <Cog6ToothIcon
                      className="h-6 w-6 shrink-0 text-white group-hover:text-orange"
                      aria-hidden="true"
                    />
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

{/* top section */}
        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" 
            // onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div className="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <form className="relative flex flex-1" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <MagnifyingGlassIcon
                  className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                  aria-hidden="true"
                />
                <input
                  id="search-field"
                  className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                  placeholder="Search..."
                  type="search"
                  name="search"
                />
              </form>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Separator */}
                <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" aria-hidden="true" />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <MenuButton className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <Image
                      height={40}
                      width={40}
                      className="h-8 w-8 rounded-full bg-gray-50"
                      src={'/vercel.svg'}
                      alt=""
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span className="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                        Tom Cook
                      </span>
                      <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                  </MenuButton>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <MenuItems className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      {userNavigation.map((item) => (
                         <MenuItem key={item.name}>
                         {({ active }) => (
                             <a
                                 href={item.href}
                                 className={classNames(
                                     active ? 'bg-gray-50' : '',
                                     'block px-3 py-1 text-sm leading-6 text-gray-900'
                                 )}
                             >
                                 {item.name}
                             </a>
                         )}
                        </MenuItem>
                      ))}
                      
                    </MenuItems>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <main className="py-10 ">
            <div className="px-4 sm:px-6 lg:px-8">
                {children}
            </div>
          </main>
        </div>
      </div>
    </>
  )
}