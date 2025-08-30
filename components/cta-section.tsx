"use client"
import { useState } from "react"
import type React from "react"

export default function CtaSection() {
  const [username, setUsername] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Claiming link for:", username)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-6xl font-semibold text-gray-900 mb-12 leading-tight">
          Claim your bio link
          <br />
          before it's taken
        </h2>

        <div className="relative w-full max-w-lg mx-auto mt-10">
          <div className="text-2xl absolute left-6 top-4 text-gray-900 font-medium">bio.link/</div>
          <input
            type="text"
            name="slug"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-[#f4f4f4] text-gray-900 placeholder-gray-400 focus:border-gray-300 w-full rounded-full h-16 font-normal text-2xl pl-28 pr-40 focus:outline-none focus:ring-0"
            id="slug"
            placeholder="name"
          />
          <button
            onClick={handleSubmit}
            className="text-white bg-black font-semibold rounded-full px-5 py-3 absolute right-2.5 top-2 flex items-center hover:bg-gray-800 transition-colors"
          >
            <span className="relative z-10">Claim my link</span>
          </button>
        </div>
      </div>
    </section>
  )
}
