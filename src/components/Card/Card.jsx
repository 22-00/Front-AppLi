import React from 'react'
import { ProductOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

export const Card = ({title, number, link}) => {
console.log(link);


  return (
       <Link to={link} className='bg-white rounded-xl p-4 flex-1 border border-gray-200 flex items-center'>
            <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sideBarColor'>
                <ProductOutlined className='text-white' />
            </div>
            <div className='pl-4'>
                <span className='text-sm text-gray-500 font-light'>{title}</span>
                <div className='flex items-center'>
                    <strong className='text-xl text-gray-700 font-semibold'>{number}</strong>
                </div>
            </div>
       </Link>
  )
}
