import React, { useState } from 'react';

export const Menu = () => {
  const [show, setShow] = useState(false);
  const [opens, setOpens] = useState(false);

  const toggleShow = () => {
    setShow(!show);
    setOpens(false); // Close the other dropdown if it's open
  };

  const toggleOpens = () => {
    setOpens(!opens);
    setShow(false); // Close the other dropdown if it's open
  };

  return (
    <>
      <nav className='flex px-5 py-3 text-gray-700 justify-between rounded-lg bg-[#FBFBFB] dark:bg-gray-800 dark:border-gray-700'>
        <div className='inline-flex items-center space-x-1 md:space-x-3'>
          {/* ... Your Year Dropdown */}
          <div className='relative inline-block text-left'>
            <button
              type='button'
              onClick={toggleShow}
              className='flex bg-white border border-black items-center w-[100px] p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
            >
              {/* button content */}

              <span class='flex-1 ml-3 text-left whitespace-nowrap'>Year</span>
            <svg
              class='w-3 h-3'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 10 6'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='m1 1 4 4 4-4'
              />
            </svg>
            </button>
            <div
              className={`origin-top-right absolute right-0 mt-2 w-[8rem] rounded-lg shadow-lg ${
                show ? 'visible' : 'invisible'
              } bg-white divide-y divide-gray-100 dark:bg-gray-700`}
            >
              <ul className='py-2 text-sm text-gray-700 dark:text-gray-200'>
                {/*dropdown items */}

                <li>
                <a
                  href='#'
                  class='block px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  1st year
                </a>
              </li>
              <li>
                <a
                  href='#'
                  class='block px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  2nd year
                </a>
              </li>
              <li>
                <a
                  href='#'
                  class='block px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  3rd year
                </a>
              </li>
              <li>
                <a
                  href='#'
                  class='block px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  4th year
                </a>
              </li>
              </ul>
            </div>
          </div>

          <ol class='inline-flex items-center space-x-1 md:space-x-3'>
            <li class='inline-flex items-center'></li>
            <li class='inline-flex items-center'>
              <a
                href='#'
                class='inline-flex  font-sans items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'
              >
                {/* <svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
        </svg> */}
                Data structures
              </a>
            </li>
            <li>
              <div class='flex items-center'>
                {/* <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg> */}
                <a
                  href='#'
                  class='ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white'
                >
                  Web
                </a>
              </div>
            </li>
            <li>
              <div class='flex items-center'>
                {/* <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg> */}
                <a
                  href='#'
                  class='ml-1 text-sm font-sans font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white'
                >
                  Networking
                </a>
              </div>
            </li>
            <li>
              <div class='flex items-center'>
                {/* <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg> */}
                <a
                  href='#'
                  class='ml-1 text-sm font-sans font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white'
                >
                  Robotics
                </a>
              </div>
            </li>
            <li>
              <div class='flex items-center'>
                {/* <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg> */}
                <a
                  href='#'
                  class='ml-1 text-sm font-sans font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white'
                >
                  Data science
                </a>
              </div>
            </li>
            <li>
              <div class='flex items-center'>
                {/* <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg> */}
                <a
                  href='#'
                  class='ml-1 text-sm font-sans font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white'
                >
                  Mobile app
                </a>
              </div>
            </li>
          </ol>
        </div>

        <div className='relative inline-block text-left'>
          {/* ... Your Filter Dropdown */}
          <button
            type='button'
            onClick={toggleOpens}
            className='flex bg-white border border-black items-center w-[100px] p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 -z-50'
          >
             <svg class='flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 18 21' enable-background="new 0 0 128 128"id="filter"><path fill="#373737" d="M126.6,13.6v7.8L77.3,70.7v27.2l-26.5,19.2V70.7L1.4,21.4v-7.8c0-1.5,1.2-2.7,2.7-2.7h119.7
	C125.3,10.9,126.6,12.1,126.6,13.6z"></path></svg>
          
          <span class='flex-1 ml-3 text-left whitespace-nowrap font-sans'>
            Filter
          </span>
          
          <svg
            class='w-3 h-3'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 10 6'
          >
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='m1 1 4 4 4-4'
            />
          </svg>
          </button>
          <div
            className={`origin-top-right absolute right-0 mt-2 w-[8rem] rounded-lg shadow-lg ${
              opens ? 'visible' : 'invisible'
            } bg-white divide-y divide-gray-100 dark:bg-gray-700`}
          >
            <ul className='py-2 text-sm text-gray-700 dark:text-gray-200'>
              {/* ... Your dropdown items */}
              <li>
                <a
                  href='#'
                  class='block px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  Recent
                </a>
              </li>
              <li>
                <a
                  href='#'
                  class='block px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  Top
                </a>
              </li>
              <li>
                <a
                  href='#'
                  class='block px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  Time 
                </a>
              </li>
              <li>
                <a
                  href='#'
                  class='block px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  Day
                </a>
              </li>
            
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
