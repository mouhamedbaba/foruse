import { Seo } from "@/ui/components/seo/seo";

const Chat = () => {
  return (
    <>
      <Seo title="Chat" description="app pour message" />
      <div className=" mx-auto p-5 h-screen">
        <div className="h-full flex gap-1">
          <div className="w-1/12">
            <div className="h-full w-full bg-slate-900 dark:bg-white-200 rounded-3xl"></div>
          </div>
          <div className=" w-3/12 h-full">
            <div className="flex flex-col h-full gap-2">
              <div className="bg-white dark:bg-slate-800  h-24 rounded-3xl">
                <div className="py-3 px-4 h-full  w-full flex gap-2 items-center">
                 <div className="div">
                    <h1 className="text-xl  font-bold  text-gray-700 dark:text-gray-200 sm:truncate ms-1 sm:tracking-tight" >Chat</h1>
                 </div>
                 <div className="div grow">
                  <input type="text"
                    className="w-full bg-slate-100 dark:bg-slate-800 dark:text-white-100 border-none outline-none px-4 py-2 rounded-3xl"
                  />
                 </div>
                 <div className="div">
                    <div className="h-full bg-red-600 w-10 rounded-full"></div>
                 </div>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-800  h-full rounded-3xl overflow-hidden pb-10 relative">
                <div className="py-3 h-full  ">
                  <h1 className="text-base  font-semibold  text-gray-700 dark:text-gray-200 sm:truncate ms-1 sm:tracking-tight fixed px-3">
                    PINNED
                  </h1>
                  <div className="mt-10 h-full rounded-sm">
                    <ul
                      role="list"
                      className="divide-y divide-gray-100 dark:divide-gray-700 overflow-auto h-full"
                    >
                      <li className="hover:bg-slate-200 dark:bg-slate-900 bg-slate-100 dark:text-white-100 px-2 dark:hover:bg-slate-800 flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                          <img
                            className="h-12 w-12 flex-none rounded-full bg-gray-50"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                          <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-100">
                              Leslie Alexander
                            </p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                              leslie.alexander@example.com
                            </p>
                          </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                          <p className="mt-1 text-xs leading-5 text-gray-500">
                            <time dateTime="2023-01-23T13:23Z">10:27 AM</time>
                          </p>
                          <p className="mt-1 text-xs leading-5 text-gray-500">
                            {/* <div className="inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full  dark:border-gray-900">
                              1
                            </div> */}
                          </p>
                        </div>
                      </li>

                      <li className="hover:bg-slate-200 px-2 dark:hover:bg-slate-900 flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                          <img
                            className="h-12 w-12 flex-none rounded-full bg-gray-50"
                            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                          <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-100">
                              Lindsay Walton
                            </p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                              lindsay.walton@example.com
                            </p>
                          </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                          <p className="mt-1 text-xs leading-5 text-gray-500">
                            <time dateTime="2023-01-23T13:23Z">10:27 AM</time>
                          </p>
                          <p className="mt-1 text-xs leading-5 text-gray-500">
                            <div className="inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full  dark:border-gray-900">
                              1
                            </div>
                          </p>
                        </div>
                      </li>
                      <li className="hover:bg-slate-200 px-2 dark:hover:bg-slate-900 flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                          <img
                            className="h-12 w-12 flex-none rounded-full bg-gray-50"
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                          <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-100">
                              Courtney Henry
                            </p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                              courtney.henry@example.com
                            </p>
                          </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                          <p className="mt-1 text-xs leading-5 text-gray-500">
                            <time dateTime="2023-01-23T13:23Z">10:27 AM</time>
                          </p>
                          <p className="mt-1 text-xs leading-5 text-gray-500">
                            <div className="inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full  dark:border-gray-900">
                              1
                            </div>
                          </p>
                        </div>
                      </li>
                      <li className="hover:bg-slate-200 px-2 dark:hover:bg-slate-900 flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                          <img
                            className="h-12 w-12 flex-none rounded-full bg-gray-50"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                          <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-100">
                              Tom Cook
                            </p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                              tom.cook@example.com
                            </p>
                          </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                          <p className="mt-1 text-xs leading-5 text-gray-500">
                            <time dateTime="2023-01-23T13:23Z">10:27 AM</time>
                          </p>
                          <p className="mt-1 text-xs leading-5 text-gray-500">
                            {/* <div className="inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full  dark:border-gray-900">
                              1
                            </div> */}
                          </p>
                        </div>
                      </li>
                      <li className="hover:bg-slate-200 px-2 dark:hover:bg-slate-900 flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                          <img
                            className="h-12 w-12 flex-none rounded-full bg-gray-50"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                          <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-100">
                              Leslie Alexander
                            </p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                              leslie.alexander@example.com
                            </p>
                          </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                          <p className="mt-1 text-xs leading-5 text-gray-500">
                            <time dateTime="2023-01-23T13:23Z">10:27 AM</time>
                          </p>
                          <p className="mt-1 text-xs leading-5 text-gray-500">
                            <div className="inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full  dark:border-gray-900">
                              1
                            </div>
                          </p>
                        </div>
                      </li>
                      <li className="hover:bg-slate-200 px-2 dark:hover:bg-slate-900 flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                          <img
                            className="h-12 w-12 flex-none rounded-full bg-gray-50"
                            src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                          <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-100">
                              Michael Foster
                            </p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                              michael.foster@example.com
                            </p>
                          </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                          <p className="mt-1 text-xs leading-5 text-gray-500">
                            <time dateTime="2023-01-23T13:23Z">10:27 AM</time>
                          </p>
                          <p className="mt-1 text-xs leading-5 text-gray-500">
                            <div className="inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full  dark:border-gray-900">
                              1
                            </div>
                          </p>
                        </div>
                      </li>
                      <li className="hover:bg-slate-200 px-2 dark:hover:bg-slate-900 flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                          <img
                            className="h-12 w-12 flex-none rounded-full bg-gray-50"
                            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                          <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-100">
                              Dries Vincent
                            </p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                              dries.vincent@example.com
                            </p>
                          </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                          
                          <div className="mt-1 flex items-center gap-x-1.5">
                            <div className="flex-none rounded-full bg-emerald-500/20 p-1 animate-pulse">
                              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 "></div>
                            </div>
                            <p className="text-xs leading-5 text-gray-500">
                              Online
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="hover:bg-slate-200 px-2 dark:hover:bg-slate-900 flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                          <img
                            className="h-12 w-12 flex-none rounded-full bg-gray-50"
                            src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                          <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-100">
                              Michael Foster
                            </p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                              michael.foster@example.com
                            </p>
                          </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                          <p className="mt-1 text-xs leading-5 text-gray-500">
                            <time dateTime="2023-01-23T13:23Z">10:27 AM</time>
                          </p>
                          <p className="mt-1 text-xs leading-5 text-gray-500">
                            <div className="inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full  dark:border-gray-900">
                              1
                            </div>
                          </p>
                        </div>
                      </li>
                      <li className="hover:bg-slate-200 px-2 dark:hover:bg-slate-900 flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                          <img
                            className="h-12 w-12 flex-none rounded-full bg-gray-50"
                            src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                          <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-100">
                              Michael Foster
                            </p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                              michael.foster@example.com
                            </p>
                          </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                          <p className="mt-1 text-xs leading-5 text-gray-500">
                            <time dateTime="2023-01-23T13:23Z">10:27 AM</time>
                          </p>
                          <p className="mt-1 text-xs leading-5 text-gray-500">
                            <div className="inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full  dark:border-gray-900">
                              1
                            </div>
                          </p>
                        </div>
                      </li>
                      <li className="hover:bg-slate-200 px-2 dark:hover:bg-slate-900 flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                          <img
                            className="h-12 w-12 flex-none rounded-full bg-gray-50"
                            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                          <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-100">
                              Dries Vincent
                            </p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                              dries.vincent@example.com
                            </p>
                          </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                          
                          <div className="mt-1 flex items-center gap-x-1.5">
                            <div className="flex-none rounded-full bg-emerald-500/20 p-1 animate-pulse">
                              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 "></div>
                            </div>
                            <p className="text-xs leading-5 text-gray-500">
                              Online
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-8  bg-gradient-to-b from-transparent to-white dark:to-slate-900"></div>
              </div>
            </div>
          </div>
          <div className="w-8/12 h-full">
            <div className="flex flex-col h-full gap-2">
              <div className="bg-white dark:bg-slate-800  h-24 rounded-3xl"></div>
              <div className="bg-white dark:bg-slate-800  h-full rounded-3xl"></div>
              <div className="flex gap-1 h-20">
                <div className="bg-white dark:bg-slate-800 h-full rounded-xl  w-11/12"></div>
                <div className="h-full  w-2/12 flex gap-1">
                  <div className="bg-white dark:bg-slate-800 h-full rounded-xl w-6/12"></div>
                  <div className="bg-white dark:bg-slate-800 h-full rounded-xl w-6/12 "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
