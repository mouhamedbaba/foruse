import React from 'react'

export const SearchBar = () => {
  return (
<div className="bg-white dark:bg-slate-800  h-24 rounded-3xl">
    <div className="py-3 px-4 h-full  w-full flex gap-2 items-center">
      <div className="div grow">
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-transparent  dark:text-white-100 border border-gray-300 dark:border-gray-600  outline-none px-4 py-2 rounded-3xl"
        />
      </div>
        <button className="h-10 bg-red-600 w-10 rounded-full  flex justify-center items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              fill="white"
              d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
            ></path>
          </svg>
        </button>
    </div>
  </div>
  )
}
