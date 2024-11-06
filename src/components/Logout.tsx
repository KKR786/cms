import { logout } from '@/app/actions'
import React from 'react'

function Logout({ children } : {children: React.ReactNode} ) {
  return (
    <form action={logout}>
        {children}
    </form>
  )
}

export default Logout
