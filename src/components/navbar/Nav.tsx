import React from 'react'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
import { Session } from "next-auth";

const Nav: React.FC<{ session: Session | null }> = ({session}) => {
  return (
    <>
        <Topbar session={session}/>
        <Sidebar />
    </>
  )
}

export default Nav
