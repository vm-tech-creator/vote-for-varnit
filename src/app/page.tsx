"use client"

import { useState } from 'react'
import Image from "next/image"
import Varnit from './img/image.png'
import JMI from './img/jmi.png'
import confetti from 'canvas-confetti'

export default function Component() {
  const [voted, setVoted] = useState(false)

  const handleVote = () => {
    setVoted(true)
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 p-4 sm:p-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
        <header className="bg-yellow-400 text-purple-800 text-center py-6 px-4 rounded-t-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2 animate-bounce">Vote for Varnit!</h1>
          <p className="text-xl sm:text-2xl">Your Awesome Voice for 3rd Grade Home Room</p>
        </header>
        
        <main className="p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
            <div className="text-center">
              <div className="relative w-64 h-64 mx-auto mb-4">
                <Image
                  src={Varnit.src+"?height=300&width=300"}
                  alt="Varnit's Photo"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full animate"
                />
              </div>
              <div className="flex justify-center space-x-4 mt-4">
                <Image
                  src={JMI.src}
                  alt="School Logo"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <Image
                  src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                  alt="American Flag"
                  width={90}
                  height={60}
                  className="rounded"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-4 text-purple-800">My Promises:</h2>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center">
                  <span className="text-4xl mr-2">🎉</span>
                  <span  className="text-md mr-2">I'll organize super fun class events</span>
                </li>
                <li className="flex items-center">
                  <span className="text-4xl mr-2">🗣️</span>
                  <span>I'll make sure everyone's voice is heard</span>
                </li>
                <li className="flex items-center">
                  <span className="text-4xl mr-2">💪</span>
                  <span>I'll work hard to make our classroom awesome</span>
                </li>
                <li className="flex items-center">
                  <span className="text-4xl mr-2">🤝</span>
                  <span>I'll make sure there's no bullying, ever!</span>
                </li>
                <li className="flex items-center">
                  <span className="text-4xl mr-2">🥗</span>
                  <span>I'll raise my voice for healthier lunches options</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <button 
              onClick={handleVote} 
              disabled={voted}
              className={`
                text-2xl font-bold py-4 px-8 rounded-full 
                ${voted 
                  ? 'bg-green-500 text-white cursor-not-allowed' 
                  : 'bg-blue-500 text-white hover:bg-pink-600 hover:scale-110 transform transition-all duration-300 animate-pulse'
                }
                focus:outline-none focus:ring-4 focus:ring-pink-300
              `}
            >
              {voted ? "Thanks for Voting, be sure to let Ms. Soto know as well!" : "Vote for Varnit!"}
            </button>
          </div>
        </main>
      </div>
      
      <footer className="mt-8 text-center text-white text-sm">
        <p>© 2024 3rd Grade Ms Soto's Class 3-3.</p>
      </footer>
    </div>
  )
}