'use client'

import { useState } from "react";
import { Session } from "next-auth";
import Link from "next/link";
import Logout from "@/components/Logout";
import Image from "next/image";


const Topbar: React.FC<{ session: Session | null }> = ({ session }) => {
  const [openMenu, setOpenMenu] = useState(false);


  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-gray-800 border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-sm rounded-lg sm:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <Link href="/" className="flex ms-2 md:me-24">
              {/* img */}
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white">
                RBAC
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="flex items-center ms-3">
              <div>
                <button
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-user"
                  onClick={() => setOpenMenu(!openMenu)}
                >
                  <span className="sr-only">Open user menu</span>
                  <Image 
                  src={session?.user?.image || 'https://flowbite.com/docs/images/people/profile-picture-5.jpg'} 
                  alt={session?.user?.name || ''} 
                  className="w-9 h-9 rounded-full"
                  width={100} 
                  height={100} />
                </button>
              </div>

              {openMenu && 
              <div
                className="z-50 origin-top-right top-[48px] absolute right-0 mt-2 w-56 
                rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5
                focus:outline-none"
                id="dropdown-user"
              >
                <div className="px-4 py-3 border-b border-solid border-gray-800" role="none">
                  <p
                    className="text-sm text-gray-900 dark:text-white"
                    role="none"
                  >
                    {session?.user?.name}
                  </p>
                  <p
                    className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                    role="none"
                  >
                    {session?.user?.email}
                  </p>
                </div>

                <ul className="py-1" role="none">
                  <li>
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-700 hover:text-white"
                      role="menuitem"
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-700 hover:text-white"
                      role="menuitem"
                    >
                      Settings
                    </Link>
                  </li>
        
                </ul>
                <div className="border-t border-solid border-gray-500">
                    <Logout>
                      <button
                          className="block w-full px-4 py-2 text-sm text-gray-800 font-semibold hover:bg-gray-700 hover:text-white"
                          role="menuitem"
                          >
                          Sign out
                      </button>
                    </Logout>
                </div>
              </div>}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Topbar;
