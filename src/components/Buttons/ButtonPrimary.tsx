import React from 'react'
import { MdMenu } from "react-icons/md";

const ButtonPrimary = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <button className='flex items-center border-2 border-[#5f5d5c] p-2 hover:border-cyan-700 hover:text-cyan-700 active:bg-cyan-700 active:text-white'>
      <div className="flex items-center space-x-2">
        {children}
      </div>
    </button>
  )
}

export default ButtonPrimary
