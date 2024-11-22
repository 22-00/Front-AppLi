import React from 'react'
import { FireFilled } from '@ant-design/icons'

export const Logo = () => {
  return (
    <div className='flex items-center justify-center text-white p-[10px]'>
        <div className='w-10 h-10 flex items-center justify-center text-2xl rounded-[50%] bg-sideBarColor'>
            <FireFilled />
        </div>
    </div>
  )
}
