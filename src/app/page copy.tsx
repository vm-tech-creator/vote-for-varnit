'use client'

import React from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import Varnit from './img/image.png'

export default function Component() {
  const handleVoteClick = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-lg shadow-2xl p-8 max-w-2xl w-full text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-white to-blue-500"></div>
        
        <motion.h1
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-5xl font-bold mb-4 text-blue-800"
        >
          Vote for Varnit
        </motion.h1>
        <h2 className="text-3xl font-semibold mb-8 text-gray-700">3rd Grade Home Room Representative</h2>
        
        <div className="flex justify-center items-center mb-8 space-x-4">
          <div className="relative">
            <div 
              className="w-32 h-24 bg-cover bg-center rounded-md shadow-md" 
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1235 650'%3E%3Crect width='1235' height='650' fill='%23bf0a30'/%3E%3Cpath d='M0,75H1235 M0,150H1235 M0,225H1235 M0,300H1235 M0,375H1235 M0,450H1235 M0,525H1235 M0,600H1235' stroke='%23ffffff' stroke-width='50'/%3E%3Crect width='494' height='350' fill='%23002868'/%3E%3Cg fill='%23ffffff'%3E%3Cg id='s'%3E%3Cg id='f'%3E%3Cg id='t'%3E%3Cpolygon points='24.5,12.8 31.1,32.6 13.5,20.3 35.5,20.3 17.9,32.6'/%3E%3Cuse transform='translate(49)'/%3E%3C/g%3E%3Cuse transform='translate(98)'/%3E%3Cuse transform='translate(196)'/%3E%3Cuse transform='translate(294)'/%3E%3C/g%3E%3Cuse transform='translate(0,58)'/%3E%3C/g%3E%3Cuse transform='translate(0,116)'/%3E%3Cuse transform='translate(0,174)'/%3E%3Cuse transform='translate(0,232)'/%3E%3C/g%3E%3C/svg%3E")`
              }}
              role="img"
              aria-label="American Flag"
            ></div>
          </div>
          
          <div className="relative w-32 h-32">
            <img
              src="https://cmsv2-assets.apptegy.net/uploads/20526/logo/23340/James_Madisson_Intermediate_schoollogo_template_300.png?height=128&width=128"
              alt="Armored Knight"
              className="w-32 h-32 object-cover rounded-md shadow-md"
            />
          </div>
          
          <div className="relative w-32 h-32">
            <svg className="w-full h-full text-blue-500" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 0L61.8034 38.1966H100L69.0983 61.8034L80.9017 100L50 76.3932L19.0983 100L30.9017 61.8034L0 38.1966H38.1966L50 0Z" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={Varnit.src}
                className="w-20 h-20 object-cover"
                style={{
                  clipPath: 'polygon(50% 0%, 61.8% 38.2%, 100% 38.2%, 68.2% 61.8%, 79.1% 100%, 50% 76.4%, 20.9% 100%, 31.8% 61.8%, 0% 38.2%, 38.2% 38.2%)'
                }}
              />
            </div>
          </div>
        </div>
        
        <div className="mb-8 bg-white bg-opacity-75 p-4 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-blue-800">Why Vote for Me:</h3>
          <ul className="text-xl text-left list-disc list-inside space-y-2 text-gray-700">
            <li>I'll organize engaging class events</li>
            <li>I'll ensure every student's voice is heard</li>
            <li>I'll work diligently to improve our classroom</li>
          </ul>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-blue-600 text-white text-2xl font-bold py-4 px-8 rounded-lg shadow-lg w-full transition-colors duration-200 hover:bg-blue-700"
          onClick={handleVoteClick}
        >
          <h3 className="text-xl font-bold mb-2">Vote Now</h3>
          <ul className="text-lg text-left list-disc list-inside">
          <li>Make sure that there is no bullying</li>
            <li>Advocate for healthier lunch options</li>
            <li>click here for confetti</li>
          </ul>
        </motion.button>
        
      </motion.div>
    </div>
  )
}