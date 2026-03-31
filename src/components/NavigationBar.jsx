import React from 'react'

const NavigationBar = () => {
  return (
    <nav className='flex justify-between px-12 h-16 items-center bg-green-200' >
     <h1 className='text-blue-600 text-2xl font-semibold'>Michel H</h1>
      <ul className='flex gap-4 text-gray-700 text-xl '>
        <li>About</li>
        <li>Experience</li>
        <li>Projects</li>
        <li>Contact</li>

      </ul>
      <button className='bg-blue-600 text-white px-8 py-2 rounded-xl '>Hire me</button>
    </nav>
  )
}

export default NavigationBar