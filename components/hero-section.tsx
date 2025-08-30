"use client"
import Image from "next/image"
import { useState } from "react"

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)

  const heroImages = [
    "https://bio.link/_nuxt/hero1.DbxcVcFn.png",
    "https://bio.link/_nuxt/hero2.Dj6JJlAa.png",
    "https://bio.link/_nuxt/hero3.BGcjPcm6.png",
  ]

  const handleImageClick = () => {
    setIsFlipping(true)
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
      setIsFlipping(false)
    }, 150)
  }

  return (
    <section className="relative pt-16 md:pt-20 md:min-h-screen mt-12 md:mt-0 flex flex-col bg-white">
      <div className="mx-auto max-w-6xl px-4 flex-1 flex flex-col">
        <div className="flex flex-col justify-center flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Left Column: Content */}
            <div className="flex flex-col justify-center text-center md:text-left">
              <h1 className="mb-3 md:mb-4 text-4xl md:text-4xl lg:text-5xl xl:text-7xl font-extrabold tracking-tight text-gray-900">
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

            {/* Right Column: Clickable flipping images */}
            <div className="flex justify-center md:justify-end relative">
              <div
                className="relative w-full max-w-[350px] lg:max-w-[450px] rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={handleImageClick}
                style={{
                  transform: isFlipping ? "rotateY(180deg)" : "rotateY(0deg)",
                  backfaceVisibility: "hidden",
                }}
              >
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
    </section>
  )
}
