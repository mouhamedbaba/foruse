import { Seo } from "@/ui/components/seo/seo";

const Chat = () => {
  return (
    <>
      <Seo title="Chat" description="app pour message" />
      <div className="px-2 container   lg:px-24 mx-auto p-5 h-screen">
        <div className="h-full flex gap-2">
          <div className="w-1/12">
            <div className="h-full w-full bg-slate-900 dark:bg-white-200 rounded-3xl">
              <div className="py-3 px-4 h-full w-full flex flex-col gap-2 items-center">
                <div className=" h-10 w-10 rounded-full"></div>
                <div className=" my-auto flex rounded-full grow flex-col justify-center  items-center gap-8">
                  <div className=" h-8 w-8">
                    <svg
                      className="w-8 h-8 fill-none "
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                        className="stroke-slate-100"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="2"
                        className="stroke-slate-100"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className=" h-8 w-8">
                    <svg
                      className="fill-red-600 w-8 h-8"
                      viewBox="0 0 256.00098 256.00098"
                      id="Flat"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M232,96.00049a16.01833,16.01833,0,0,0-16-16H184v-32a16.01833,16.01833,0,0,0-16-16H40a16.01833,16.01833,0,0,0-16,16v128a7.99978,7.99978,0,0,0,13.0293,6.22119L72,153.95032l.001,30.05017a16.01833,16.01833,0,0,0,16,16h93.58789l37.38281,30.22119a7.99979,7.99979,0,0,0,13.0293-6.22119ZM189.44727,185.7793a7.99922,7.99922,0,0,0-5.0293-1.77881H88.001l-.001-32h80a16.01833,16.01833,0,0,0,16-16v-40h32l.001,111.24512Z" />
                    </svg>
                  </div>
                  <div className=" h-8 w-8">
                    <svg
                      className="fill-slate-100 w-8 h-8"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.7491 9.70957V9.00497C18.7491 5.13623 15.7274 2 12 2C8.27256 2 5.25087 5.13623 5.25087 9.00497V9.70957C5.25087 10.5552 5.00972 11.3818 4.5578 12.0854L3.45036 13.8095C2.43882 15.3843 3.21105 17.5249 4.97036 18.0229C9.57274 19.3257 14.4273 19.3257 19.0296 18.0229C20.789 17.5249 21.5612 15.3843 20.5496 13.8095L19.4422 12.0854C18.9903 11.3818 18.7491 10.5552 18.7491 9.70957Z"
                        stroke="#1C274C"
                        stroke-width="1.5"
                      />
                      <path
                        d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19"
                        stroke="#1C274C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  <div className=" h-8 w-8">
                    <svg
                      className="fill-transparent   w-8 h-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17"
                        className="stroke-slate-100"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className=" h-12 w-12">
                  <div className="w-fll h-full rounded-full bg-slate-800 p-3">
                  <svg className="w-fll h-full stroke-slate-100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1992 12C14.9606 12 17.1992 9.76142 17.1992 7C17.1992 4.23858 14.9606 2 12.1992 2C9.43779 2 7.19922 4.23858 7.19922 7C7.19922 9.76142 9.43779 12 12.1992 12Z" className="stroke-slate-100" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 22C3.57038 20.0332 4.74796 18.2971 6.3644 17.0399C7.98083 15.7827 9.95335 15.0687 12 15C16.12 15 19.63 17.91 21 22" className="stroke-slate-100" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-3/12 h-full">
            <div className="flex flex-col h-full gap-2">
              <div className="bg-white dark:bg-slate-800  h-24 rounded-3xl">
                <div className="py-3 px-4 h-full  w-full flex gap-2 items-center">
                  {/* <div className="div">
                    <h1 className="text-xl  font-bold  text-gray-700 dark:text-gray-200 sm:truncate ms-1 sm:tracking-tight">
                      Chat
                    </h1>
                  </div> */}
                  <div className="div grow">
                    <input
                      type="text"
                      placeholder="Search"
                      className="w-full bg-transparent  dark:text-white-100 border border-gray-300 dark:border-gray-600  outline-none px-4 py-2 rounded-3xl"
                    />
                  </div>
                  <div className="div">
                    <div className="h-10 bg-red-600 w-10 rounded-full  flex justify-center items-center">
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
                    </div>
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
                            <div className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-100">
                              Leslie Alexander
                            </div>
                            <div className="mt-1 truncate text-xs leading-5 text-gray-500">
                              leslie.alexander@example.com
                            </div>
                          </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                          <div className="mt-1 text-xs leading-5 text-gray-500">
                            <time dateTime="2023-01-23T13:23Z">10:27 AM</time>
                          </div>
                          <div className="mt-1 text-xs leading-5 text-gray-500">
                            {/* <div className="inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full  dark:border-gray-900">
                            1
                            </div> */}
                          </div>
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
                      <li className="hover:bg-slate-200 px-2 dark:hover:bg-slate-900 flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                          <img
                            className="h-12 w-12 flex-none rounded-full bg-gray-50"
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                          <div className="min-w-0 flex-auto">
                            <div className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-100">
                              Courtney Henry
                            </div>
                            <div className="mt-1 truncate text-xs leading-5 text-gray-500">
                              courtney.henry@example.com
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
                      <li className="hover:bg-slate-200 px-2 dark:hover:bg-slate-900 flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                          <img
                            className="h-12 w-12 flex-none rounded-full bg-gray-50"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                          <div className="min-w-0 flex-auto">
                            <div className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-100">
                              Tom Cook
                            </div>
                            <div className="mt-1 truncate text-xs leading-5 text-gray-500">
                              tom.cook@example.com
                            </div>
                          </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                          <div className="mt-1 text-xs leading-5 text-gray-500">
                            <time dateTime="2023-01-23T13:23Z">10:27 AM</time>
                          </div>
                          <div className="mt-1 text-xs leading-5 text-gray-500">
                            {/* <div className="inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full  dark:border-gray-900">
                            1
                            </div> */}
                          </div>
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
                            <div className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-100">
                              Leslie Alexander
                            </div>
                            <div className="mt-1 truncate text-xs leading-5 text-gray-500">
                              leslie.alexander@example.com
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
                      <li className="hover:bg-slate-200 px-2 dark:hover:bg-slate-900 flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                          <img
                            className="h-12 w-12 flex-none rounded-full bg-gray-50"
                            src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                          <div className="min-w-0 flex-auto">
                            <div className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-100">
                              Michael Foster
                            </div>
                            <div className="mt-1 truncate text-xs leading-5 text-gray-500">
                              michael.foster@example.com
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
                      <li className="hover:bg-slate-200 px-2 dark:hover:bg-slate-900 flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                          <img
                            className="h-12 w-12 flex-none rounded-full bg-gray-50"
                            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                          <div className="min-w-0 flex-auto">
                            <div className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-100">
                              Dries Vincent
                            </div>
                            <div className="mt-1 truncate text-xs leading-5 text-gray-500">
                              dries.vincent@example.com
                            </div>
                          </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                          <div className="mt-1 flex items-center gap-x-1.5">
                            <div className="flex-none rounded-full bg-emerald-500/20 p-1 animate-pulse">
                              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 "></div>
                            </div>
                            <div className="text-xs leading-5 text-gray-500">
                              Online
                            </div>
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
                            <div className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-100">
                              Michael Foster
                            </div>
                            <div className="mt-1 truncate text-xs leading-5 text-gray-500">
                              michael.foster@example.com
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
                      <li className="hover:bg-slate-200 px-2 dark:hover:bg-slate-900 flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                          <img
                            className="h-12 w-12 flex-none rounded-full bg-gray-50"
                            src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                          <div className="min-w-0 flex-auto">
                            <div className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-100">
                              Michael Foster
                            </div>
                            <div className="mt-1 truncate text-xs leading-5 text-gray-500">
                              michael.foster@example.com
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
                      <li className="hover:bg-slate-200 px-2 dark:hover:bg-slate-900 flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                          <img
                            className="h-12 w-12 flex-none rounded-full bg-gray-50"
                            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                          <div className="min-w-0 flex-auto">
                            <div className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-100">
                              Dries Vincent
                            </div>
                            <div className="mt-1 truncate text-xs leading-5 text-gray-500">
                              dries.vincent@example.com
                            </div>
                          </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                          <div className="mt-1 flex items-center gap-x-1.5">
                            <div className="flex-none rounded-full bg-emerald-500/20 p-1 animate-pulse">
                              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 "></div>
                            </div>
                            <div className="text-xs leading-5 text-gray-500">
                              Online
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-8 rounded-b-3xl   bg-gradient-to-b from-transparent to-white dark:to-slate-900"></div>
              </div>
            </div>
          </div>
          <div className="w-8/12 h-full">
            <div className="flex flex-col h-full gap-2">
              <div className="bg-white dark:bg-slate-800  h-24 rounded-3xl"></div>

              <div className="bg-white dark:bg-slate-800  h-full rounded-3xl"></div>
              <div className="flex gap-1 h-20">
                <div className="bg-white dark:bg-slate-800 h-full rounded-xl grow ">
                  <div className="flex gap-1  justify-center items-center h-full py-2 px-6">
                    <svg
                      fill="#000000"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="800px"
                      height="800px"
                      viewBox="0 0 950 950"
                      xmlSpace="preserve"
                      className="w-5 h-5"
                    >
                      <g>
                        <path
                          d="M857.7,141.3c-30.1-30.1-65.1-53.5-104.3-69.4c-37.8-15.3-77.7-23.2-118.7-23.2c-40.9,0-80.9,7.7-118.7,22.9
		c-39.1,15.8-74.2,38.9-104.3,68.8L73.1,478.3C49.3,501.9,30.9,529.4,18.3,560.2C6.2,589.9,0,621.3,0,653.6
		C0,685.7,6.1,717,18.1,746.7c12.4,30.7,30.7,58.2,54.3,81.899c23.6,23.7,51.2,42,81.9,54.5c29.7,12.101,61.1,18.2,93.3,18.2
		c32.2,0,63.6-6.1,93.3-18.1c30.8-12.5,58.399-30.8,82.1-54.4l269.101-268c17.3-17.2,30.6-37.3,39.699-59.7
		c8.801-21.6,13.2-44.5,13.2-67.899c0-48.2-18.8-93.2-52.899-127c-34-34.2-79.2-53.1-127.301-53.3c-48.199-0.1-93.5,18.6-127.6,52.7
		L269.6,473.3c-8.5,8.5-13.1,19.7-13.1,31.601c0,11.899,4.6,23.199,13.1,31.6l0.7,0.7c17.4,17.5,45.8,17.5,63.3,0.1l168-167.5
		c35.1-34.8,92.1-35,127.199-0.399c16.9,16.8,26.101,39.3,26.101,63.399c0,24.3-9.4,47.101-26.5,64.101l-269,268
		c-0.5,0.5-0.9,0.899-1.2,1.5c-29.7,28.899-68.9,44.699-110.5,44.5c-41.9-0.2-81.2-16.5-110.6-46c-14.7-15-26.1-32.5-34-52
		C95.5,694,91.7,674,91.7,653.6c0-41.8,16.1-80.899,45.4-110.3c0.4-0.3,0.7-0.6,1.1-0.899l337.9-337.8c0.3-0.3,0.6-0.7,0.899-1.1
		c21.4-21,46.3-37.4,74-48.5c27-10.8,55.4-16.2,84.601-16.2c29.199,0,57.699,5.6,84.6,16.4c27.9,11.3,52.9,27.8,74.3,49.1
		c21.4,21.4,37.9,46.4,49.2,74.3c10.9,26.9,16.4,55.4,16.4,84.6c0,29.3-5.5,57.9-16.5,85c-11.301,28-28,53.2-49.5,74.8l-233.5,232.8
		c-8.5,8.5-13.2,19.7-13.2,31.7s4.7,23.2,13.1,31.6l0.5,0.5c17.4,17.4,45.8,17.4,63.2,0L857.5,586.9
		C887.601,556.8,911,521.7,926.9,482.6C942.3,444.8,950,404.9,950,363.9c0-40.9-7.8-80.8-23.1-118.5
		C911.101,206.3,887.8,171.3,857.7,141.3z"
                        />
                      </g>
                    </svg>
                    <div className=" h-full grow">
                      <input
                        type="text"
                        placeholder="Type a message"
                        autoFocus
                        className="bg-transparent h-full w-full outline-none px-3"
                      />
                    </div>
                    <svg
                      className="h-6 w-6 "
                      fill="#000000"
                      width="800px"
                      height="800px"
                      viewBox="0 0 56 56"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 21.1796 25.8672 C 22.5624 25.8672 23.7109 24.6484 23.7109 22.9375 C 23.7109 21.2266 22.5624 20.0078 21.1796 20.0078 C 19.8202 20.0078 18.6952 21.2266 18.6952 22.9375 C 18.6952 24.6484 19.8202 25.8672 21.1796 25.8672 Z M 34.8905 25.8672 C 36.2733 25.8672 37.4218 24.6484 37.4218 22.9375 C 37.4218 21.2266 36.2733 20.0078 34.8905 20.0078 C 33.5077 20.0078 32.3827 21.2266 32.3827 22.9375 C 32.3827 24.6484 33.5077 25.8672 34.8905 25.8672 Z M 27.9999 39.2968 C 33.6483 39.2968 37.1874 35.2890 37.1874 33.7656 C 37.1874 33.4609 36.9530 33.3203 36.7187 33.5078 C 35.0077 34.9375 32.1249 36.3437 27.9999 36.3437 C 23.8514 36.3437 20.8983 34.8437 19.2577 33.5312 C 19.0234 33.3203 18.7890 33.4609 18.7890 33.7656 C 18.7890 35.2890 22.3280 39.2968 27.9999 39.2968 Z" />
                    </svg>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-800 h-full rounded-xl">
                  <div className="h-full flex justify-center items-center p-3">
                    <svg
                      fill="#000000"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="800px"
                      height="800px"
                      viewBox="0 0 47.964 47.965"
                      xmlSpace="preserve"
                      className="w-8 h-8"
                    >
                      <g>
                        <g>
                          <path
                            d="M23.982,35.268c5.531,0,10.033-4.635,10.033-10.332V10.333C34.015,4.635,29.513,0,23.982,0
			c-5.532,0-10.032,4.635-10.032,10.333v14.604C13.951,30.633,18.451,35.268,23.982,35.268z M29.22,24.938
			c0,2.974-2.35,5.395-5.238,5.395s-5.238-2.42-5.238-5.395V10.333c0-2.974,2.35-5.395,5.238-5.395s5.238,2.42,5.238,5.395V24.938z"
                          />
                          <path
                            d="M40.125,29.994c0-1.361-1.222-2.469-2.72-2.469c-1.5,0-2.721,1.107-2.721,2.469c0,4.042-3.621,7.329-8.074,7.329h-5.257
			c-4.453,0-8.074-3.287-8.074-7.329c0-1.361-1.221-2.469-2.721-2.469c-1.499,0-2.719,1.107-2.719,2.469
			c0,6.736,6.014,12.221,13.424,12.266v0.766h-5.944c-1.499,0-2.72,1.107-2.72,2.47s1.221,2.47,2.72,2.47h17.325
			c1.5,0,2.721-1.107,2.721-2.47s-1.221-2.47-2.721-2.47h-5.942V42.26C34.111,42.215,40.125,36.73,40.125,29.994z"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="bg-red-600 h-full rounded-xl  p-3">
                  <div className="h-full flex justify-center items-center">
                    <svg
                      width="800px"
                      height="800px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      id="send-alt"
                      className="icon glyph h-8 w-8"
                      fill=""
                      stroke=""
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0" />

                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />

                      <g id="SVGRepo_iconCarrier">
                        <path
                          fill="#ffffff"
                          d="M21.88,4.73,16.2,20.65A2,2,0,0,1,14.3,22h0a2,2,0,0,1-1.9-1.31l-2.12-5.52,1.54-1.54,2.49-2.49a1,1,0,1,0-1.42-1.42l-2.49,2.49L8.82,13.76,3.31,11.63a2,2,0,0,1,0-3.83L19.27,2.12a2,2,0,0,1,2.61,2.61Z"
                        />
                      </g>
                    </svg>
                  </div>
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
