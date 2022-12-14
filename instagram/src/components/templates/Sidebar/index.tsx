import React from 'react'
import { NextPage } from 'next'
import { HiOutlineHome, HiOutlineSearch, HiOutlineMap } from 'react-icons/hi'
const Sidebar: NextPage = (): JSX.Element => {
  return (
    <aside
      className="hidden h-full w-60 flex-shrink-0 border-r border-gray-300 lg:block"
      aria-label="Sidebar"
    >
      <div className="h-full overflow-y-auto bg-white py-7 px-4 ">
        <div className="mx-2 mb-10 mt-3 h-[35px] w-[105px] bg-[url('/images/ig_logo.png')] bg-cover"></div>
        <ul className="space-y-5">
          <li>
            <a
              href="#"
              className="flex items-center rounded-full p-2 text-sm font-normal text-gray-700 hover:bg-gray-100 "
            >
              <HiOutlineHome className="h-7 w-7" />
              <span className="ml-3">Home</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center rounded-full p-2 text-sm font-normal text-gray-700 hover:bg-gray-100 "
            >
              <HiOutlineSearch className="h-7 w-7" />
              <span className="ml-3">Search</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center rounded-full p-2 text-sm font-normal text-gray-700 hover:bg-gray-100 "
            >
              <HiOutlineMap className="h-7 w-7" />
              <span className="ml-3">Explore</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
