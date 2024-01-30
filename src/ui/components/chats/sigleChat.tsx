import React from "react";

export const SingleChat = () => {
  return (
    <li className="hover:bg-slate-200 px-2 dark:hover:bg-slate-900 flex justify-between gap-x-6 py-5">
      <div className="flex min-w-0 gap-x-4">
        <div
          className="h-12 w-12 flex-none rounded-full bg-gray-500 animate-pulse"
          // src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          // alt=""
        ></div>
        <div className="min-w-0 flex-auto">
          <div className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-100">
            Lindsay Walton
          </div>
          <div className="mt-1 truncate text-xs leading-5 text-gray-500">
            lindsay.walton@example.com
          </div>
        </div>
      </div>
      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <div className="mt-1 text-xs leading-5 text-gray-500">
          <time dateTime="2023-01-23T13:23Z">10:27 AM</time>
        </div>
        <div className="mt-1 text-xs leading-5 text-gray-500">
          <div className="inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full  dark:border-gray-900">
            1
          </div>
        </div>
      </div>
    </li>
  );
};
