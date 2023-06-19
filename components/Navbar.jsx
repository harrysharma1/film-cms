import Link from 'next/link'
import React from 'react'
import {VscThreeBars} from 'react-icons/vsc'
function Navbar() {
  return (
   
<nav class="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 text-white">
   <div className="flex flex-row p-5">
    <div className="flex flex-1">
        <Link href="/">
              <img src="https://pbs.twimg.com/media/FP62wnJacAE9R51?format=jpg&name=4096x4096" className="w-10 h-10 rounded-full" />
        </Link>
    </div>
    <div className="flex flex-1 justify-end space-x-5">
        <Link href="/">Log In</Link>
        <Link href="/">Sign Up</Link>
    
    </div>
   </div>
</nav>

  )
}

export default Navbar
