import Sticky from '@/app/_ui/footers/Sticky'
import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <div>
      <h1>This is dev test</h1>
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
