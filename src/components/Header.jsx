import React from 'react'

export const Header = () => {
  return (
    <div className='felx justify-between items-center'>
      <div>
        <h1 className='text-2xl font-bold'>Manage your content</h1>
        <p className='text-sm text-gray-600'>Access your documents</p>
      </div>
      <button className='bg-green-300 text-white px-4 py-2 items-center rounded'>Upgrade plan</button>
    </div>
  )
}
