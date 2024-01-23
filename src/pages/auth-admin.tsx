import { Seo } from "@/ui/components/seo/seo";
import { Button } from "@/ui/design-system/button/Button";
import { Typography } from "@/ui/design-system/typography/typography";
import {
  faAngellist,
  faBuysellads,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const AuthAdmin = () => {
  return (
    <div className="h-screen">
      <Seo title="Auth" description="page de gestion d'auth" />
      <div className="bg-slate-900 px-2 container mx-auto   lg:px-24">
        <div className="w-full min-h-16 bg-slate-900 ">
          <div className="flex gap-5 py-5 text-gray-400 font-bold">
            <div className="w-3/12 ">
              <div className="flex justify-between">
                <button className="mr-2  w-8 h-8 c">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                      fill="currentColor"
                      d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                    />
                  </svg>
                </button>
                <div className="">
                  <Typography
                    variant="h3"
                    weight="bold"
                    theme="primary"
                    className="italic"
                  >
                    FORUSE
                  </Typography>
                </div>
              </div>
            </div>
            <div className="w-9/12  h-full">
              <div className="flex justify-between">
                <input
                  type="text"
                  placeholder="search.."
                  className="bg-transparent before:m font-normal border border-slate-500 rounded-full  px-4 focus:outline-none focus:border-blue-500 w-6/12"
                />
                <div className="w-6/12 flex justify-end">
                  <FontAwesomeIcon
                    icon={faBuysellads}
                    className="h-10 w-10 cursor-pointer hover:bg-red-800"
                  />

                  <div className="avatar avatar-xl bg-white h-10 w-10  rounded-full">
                    {/* <Image className="absolute rounded-full" width={"48"} height={"48"} src="/assets/img/avatar.jpg" alt=""  />
                     */}
                    <img
                      src="/assets/img/avatar.jpg"
                      alt=""
                      className="h-full w-full rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:gap-4">
          <div className="w-3/12 hidden lg:block pb-28  rounded-md h-screen">
            <div className="bg-slate-700 rounded-md py-3 px-2 h-full overflow-y-auto overflow-x-hidden shadow-2xl">
              
            </div>
          </div>
          <div className="w-full lg:w-9/12 max-h-screen pb-28 overflow-y-auto   overflow-x-hidden pr-1">
            <div className=" mx-auto mt-3 rounded-md shadow-md bg-slate-800 text-white-100">
              <div className="header items-center flex flex-row px-2 py-4 gap-2">
              <input
                  type="text"
                  placeholder="search.."
                  className="bg-transparent before:m font-normal h-14 border border-slate-500 rounded-lg  px-4 focus:outline-none focus:border-blue-500 w-10/12"
                />
                <div className="flex flex-row items-center gap-2">
                <div className=" flex justify-center">
              <Button size="md">Add</Button>

                </div>
                <div className="flex justify-center h-8 w-8 fas fa-rotate-right">
                </div>
                <div className=" flex justify-end">
                <span className="fas fa-ellipsis-v h-8 w-8 " ></span>

                </div>
                </div>

              </div>
              <div className="w-full">
                <table className="min-w-full p-6">
                  <thead>
                    <tr className=" border-b">
                      <th className="py-2 text-start">Identifier</th>
                      <th className="py-2 text-start ">Providers</th>
                      <th className="py-2 text-start ">Created</th>
                      <th className="py-2 text-start ">Signed In</th>
                      <th className="py-2 text-start ">User</th> 
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 border-b">John Doe</td>
                      <td className="py-2 border-b">25</td>
                      <td className="py-2 border-b">Paris</td>
                      <td className="py-2 border-b">25</td>
                      <td className="py-2 border-b">Paris</td>
                    </tr>
                    <tr>
                      <td className="py-2 border-b">Jane Doe</td>
                      <td className="py-2 border-b">30</td>
                      <td className="py-2 border-b">Lyon</td>
                      <td className="py-2 border-b">25</td>
                      <td className="py-2 border-b">Paris</td>
                    </tr>
                    {/* Ajoutez autant de lignes que nécessaire */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthAdmin;
