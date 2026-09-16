import React from 'react'
import { BsRobot } from 'react-icons/bs'

function Footer() {
  return (
    <div className='bg-transparent flex justify-center px-4 pb-10 py-4 pt-10'>
      <div className='w-full max-w-6xl bg-white/90 rounded-[24px] shadow-sm border border-blue-100 py-8 px-3 text-center backdrop-blur'>
        <div className='flex justify-center items-center gap-3 mb-3'>
            <div className='bg-blue-600 text-white p-2 rounded-lg'><BsRobot size={16}/></div>
            <h2 className='font-semibold text-blue-950'>InterviewForge</h2>
        </div>
        <p className='text-gray-500 text-sm max-w-xl mx-auto'>
  AI-powered interview preparation platform designed to improve
          communication skills, technical depth and professional confidence.
        </p>


      </div>
    </div>
  )
}

export default Footer
