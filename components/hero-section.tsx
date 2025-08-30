"use client"
import Image from "next/image"
import type React from "react"

import { useState, useRef } from "react"

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)
  const [rotateY, setRotateY] = useState(0)
  const [rotateX, setRotateX] = useState(0)
  const [rotateZ, setRotateZ] = useState(0)
  const rightColumnRef = useRef<HTMLDivElement>(null)
  const heroSectionRef = useRef<HTMLDivElement>(null)

  const heroImages = [
    "https://bio.link/_nuxt/hero1.DbxcVcFn.png",
    "https://bio.link/_nuxt/hero2.Dj6JJlAa.png",
    "https://bio.link/_nuxt/hero3.BGcjPcm6.png",
  ]

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!rightColumnRef.current || !heroSectionRef.current || isFlipping) return

    const rect = rightColumnRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const mouseX = e.clientX
    const mouseY = e.clientY

    const rotationStrength = 15
    const rotateYValue = ((mouseX - centerX) / (rect.width / 2)) * rotationStrength
    const rotateXValue = -((mouseY - centerY) / (rect.height / 2)) * rotationStrength
    const rotateZValue = ((mouseX - centerX) / (rect.width / 2)) * 5

    setRotateY(rotateYValue)
    setRotateX(rotateXValue)
    setRotateZ(rotateZValue)
  }

  const handleImageClick = () => {
    setIsFlipping(true)
    setRotateY((prev) => prev + 180)

    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
      setIsFlipping(false)
    }, 400)
  }

  return (
    <section
      ref={heroSectionRef}
      className="relative pt-16 md:pt-20 md:min-h-screen mt-12 md:mt-0 flex flex-col bg-white"
      onMouseMove={handleMouseMove}
    >
      <style jsx>{`
        .flip-container {
          perspective: 1000px;
        }
        
        .flip-card {
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.1s ease-out;
        }
        
        .flip-card.flipping {
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-face {
          backface-visibility: hidden;
          transition: opacity 0.3s ease-in-out;
        }
      `}</style>

      <div className="mx-auto max-w-6xl px-4 flex-1 flex flex-col">
        <div className="flex flex-col justify-center flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="flex flex-col justify-center text-center md:text-left">
              <h1 className="mb-3 md:mb-4 text-4xl md:text-4xl lg:text-5xl xl:text-7xl font-extrabold tracking-tighter text-gray-900">
                Your link-in-bio,
                <br />
                now with a brain
              </h1>
              <p className="mb-6 md:mb-4 text-lg md:text-xl text-gray-600">
                Join 3M+ creators and brands using Bio Link. Add your links, share posts, send emails, and let AI greet
                and guide your visitors.
              </p>
              <div className="w-[470px] mt-4 max-lg:w-[400px] max-sm:mt-6 max-sm:w-[98%] flex justify-center md:justify-start">
                <div className="relative w-full max-sm:w-[95%] max-sm:mx-auto bg-[#542eff] rounded-xl p-0.5">
                  <div className="font-medium text-2xl absolute left-6 top-4 max-sm:text-base max-sm:top-[16px] max-sm:left-4 text-gray-900 top-[16.5px] max-sm:!top-[15px] z-10">
                    bio.link/
                  </div>
                  <input
                    type="text"
                    name="slug"
                    className="bg-white !rounded-[10px] !h-[60px] pr-[188px] !pl-[111px] max-sm:!pl-[75px] max-sm:pr-[174px] max-sm:!h-12 w-full font-normal text-2xl focus:outline-none focus:ring-0 max-sm:text-base"
                    id="slug"
                    placeholder="name"
                  />
                  <a
                    href="https://app.bio.link/signup"
                    className="bg-[#542eff] text-white px-[22px] !top-[2px] !right-0.5 !py-[14px] rounded-l-none rounded-r-[10px] h-[94%] max-sm:!py-2 font-semibold absolute flex items-center"
                  >
                    <span className="relative z-10">Start 7-Days Free</span>
                  </a>
                </div>
              </div>
            </div>

            <div ref={rightColumnRef} className="flex justify-center md:justify-end relative">
              <div className="flip-container">
                <div
                  className={`flip-card relative w-full max-w-[350px] lg:max-w-[450px] rounded-lg overflow-hidden cursor-pointer ${isFlipping ? "flipping" : ""}`}
                  onClick={handleImageClick}
                  style={{
                    transform: `
                      rotateY(${rotateY}deg) 
                      rotateX(${rotateX}deg) 
                      rotateZ(${rotateZ}deg)
                      ${isFlipping ? "scale(1.05)" : "scale(1)"}
                    `,
                  }}
                >
                  <div className="card-face">
                    <Image
                      src={heroImages[currentImageIndex] || "/placeholder.svg"}
                      alt={`Hero image ${currentImageIndex + 1}`}
                      width={500}
                      height={400}
                      className="w-full h-auto object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
