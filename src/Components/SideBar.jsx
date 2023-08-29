import React from 'react'
import {Card }from "flowbite-react"
export const SideBar = () => {
  return (

    
        <div className='flex flex-row'>
      {/* Sidebar Toggle Button */}
      <button
        type='button'
        onClick={() => {
          setOpen(!open);
        }}
        className='inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
      >
        {/* Sidebar toggle icon */}
      </button>

      {/* Sidebar Content */}
      <aside
        id='sidebar-multi-level-sidebar'
        className={`top-20 left-0 sticky self-start z-20 w-64 h-[76vh] transition-transform ${
          open ? '' : '-translate-x-full sm:translate-x-0'
        }`}
        aria-label='Sidebar'
      >
        <div className='h-full px-3 py-4 overflow-y-auto bg-[#FBFBFB] dark:bg-gray-800'>
          <ul className='space-y-2 font-medium'>
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-[12px] text-gray-400 rounded-lg dark:text-white group'
              >
                <span className='ml-2 font-sans'>DEPARTMENT</span>
              </a>
            </li>
            <li>
              <button
                type='button'
                onClick={() => {
                  setOpen(!open);
                }}
                className='flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                aria-controls='dropdown-example'
              >
                <span className='flex-1 font-sans text-sm ml-3 text-left whitespace-nowrap'>
                  Department
                </span>
                <svg
                  className='w-3 h-3'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 10 6'
                >
                  {/* Dropdown icon */}
                </svg>
              </button>

              <ul
                id='dropdown-example'
                className={`${
                  open ? 'py-2 space-y-2' : 'hidden'
                } transition-all`}
              >
                <li>
                  <a
                    href='#'
                    className='flex font-sans text-sm items-start bg-btn border-2 border-black  w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-7 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                  >
                    Computer science
                  </a>
                </li>
                <li>
                  {/* Other departments */}
                </li>
              </ul>
            </li>
            <li>
              <hr />
            </li>
            <li>
              <div className='flex items-center p-2 text-[12px] text-gray-400 rounded-lg dark:text-white  group'>
                <span className='ml-2 font-sans'>MY ACCOUNT</span>
              </div>
            </li>
            <li>
              <a
                href='#'
                className='flex justify-items-start p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
              >
                <span className='flex-1 font-sans ml-3 text-left whitespace-nowrap'>
                  Profile
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <div className='p-4 w-full'>
        <div className='pt-[3.85rem]'>

        </div>

        <div className='p-4 h-screen border-2 overflow-y-scroll border-gray-200 border-dashed rounded-lg dark:border-gray-700'>
          <Card />
          {/* More Cards */}
        </div>
      </div>
    </div>
  )
}
