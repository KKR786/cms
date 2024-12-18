import React from "react";
import Link from "next/link";

function Sidebar() {
  
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full border-r sm:translate-x-0 bg-gray-800 border-gray-700"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-gray-800">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              href="/"
              className="flex items-center p-2 rounded-lg text-white hover:text-gray-900 hover:bg-gray-100 group"
            >
              <svg
                className="w-5 h-5 transition duration-75 text-gray-400 group-hover:text-gray-900"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
              </svg>
              <span className="ms-3">Dashboard</span>
            </Link>
          </li>

          <li>
            <Link
              href="/user-management"
              className="flex items-center p-2 rounded-lg text-white hover:text-gray-900 hover:bg-gray-100 group"
            >
              <svg
                className="w-5 h-5 transition duration-75 text-gray-400 group-hover:text-gray-900"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
            </Link>
          </li>
          <li>
            <Link
              href="/role-management"
              className="flex items-center p-2 rounded-lg text-white hover:text-gray-900 hover:bg-gray-100 group"
            >
              <svg
                className="w-5 h-5 transition duration-75 text-gray-400 group-hover:text-gray-900"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21,11h-5c-1.654,0-3,1.346-3,3v7c0,1.654,1.346,3,3,3h5c1.654,0,3-1.346,3-3v-7c0-1.654-1.346-3-3-3Zm-1,9h-3c-.553,0-1-.448-1-1s.447-1,1-1h3c.553,0,1,.448,1,1s-.447,1-1,1Zm0-4.003h-3c-.553,0-1-.448-1-1s.447-1,1-1h3c.553,0,1,.448,1,1s-.447,1-1,1ZM3,6C3,2.691,5.691,0,9,0s6,2.691,6,6-2.691,6-6,6S3,9.309,3,6ZM12.026,24H1c-.557,0-1.001-.46-1-1.017,.009-4.955,4.043-8.983,9-8.983h0c.688,0,1.356,.085,2,.232v6.768c0,1.13,.391,2.162,1.026,3Z" />
              </svg>
              <span className="ms-3">Role Management</span>
            </Link>
          </li>
          <li>
            <Link
              href="/site"
              className="flex items-center p-2 rounded-lg text-white hover:text-gray-900 hover:bg-gray-100 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 transition duration-75 text-gray-400 group-hover:text-gray-900"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path xmlns="http://www.w3.org/2000/svg" d="M0,18c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V10H0v8Zm14-5h4c.553,0,1,.448,1,1s-.447,1-1,1h-4c-.553,0-1-.447-1-1s.447-1,1-1Zm0,5h4c.553,0,1,.447,1,1s-.447,1-1,1h-4c-.553,0-1-.447-1-1s.447-1,1-1ZM5.027,12.995c.38-.402,1.013-.418,1.413-.039l1.015,.96,1.838-1.838c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414l-1.982,1.982c-.352,.352-.809,.528-1.266,.528-.441,0-.883-.164-1.23-.493l-1.163-1.103c-.401-.379-.418-1.012-.038-1.413Zm0,5c.38-.401,1.013-.418,1.413-.038l1.015,.96,1.838-1.838c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414l-1.982,1.982c-.352,.352-.809,.528-1.266,.528-.441,0-.883-.164-1.23-.493l-1.163-1.103c-.401-.379-.418-1.013-.038-1.413ZM19,1H5C2.243,1,0,3.243,0,6v2H24v-2c0-2.757-2.243-5-5-5ZM4.5,6c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5,.672,1.5,1.5-.672,1.5-1.5,1.5Zm4,0c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5,.672,1.5,1.5-.672,1.5-1.5,1.5Z"/>
              </svg>
              <span className="ms-3">Site</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center p-2 rounded-lg text-white hover:text-gray-900 hover:bg-gray-100 group"
            >
              <svg
                className="w-5 h-5 transition duration-75 text-gray-400 group-hover:text-gray-900"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
