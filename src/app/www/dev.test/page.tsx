
import Sticky from '@/app/_ui/footers/Sticky'
import Default from '@/app/_ui/headers/Default'
import Tracker from '@/components/Tracker'
import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <div>
        <Default companyName='Dreamer'>
        <li>
                        <Link href="#" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</Link>
                    </li>
                    <li>
                        <Link href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Marketplace</Link>
                    </li>
                    <li>
                        <Link href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</Link>
                    </li>
                    <li>
                        <Link href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About Us</Link>
                    </li>
        </Default>
      <h1>This is dev test</h1>
      <Tracker />
      <Sticky companyName='Dreamer'>
        <li>
            <Link href="#" className="hover:underline me-4 md:me-6">About</Link>
        </li>
        <li>
            <Link href="#" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
        </li>
      </Sticky>
    </div>
  )
}

export default Home
