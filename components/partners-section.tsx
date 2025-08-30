"use client"
import { Marquee } from "@/components/ui/marquee"
import Image from "next/image"

const partnerLogos = [
  {
    src: "https://bio.link/_nuxt/user5.CwX5k9hm.png",
    alt: "Partner 1",
    width: 150,
    height: 75,
  },
  {
    src: "https://bio.link/_nuxt/user4.Bo0FbbWl.png",
    alt: "Partner 2",
    width: 150,
    height: 75,
  },
  {
    src: "https://bio.link/_nuxt/user3.w1PRNQjx.png",
    alt: "Partner 3",
    width: 150,
    height: 75,
  },
  {
    src: "https://bio.link/_nuxt/user2.CiMA-Ti0.png",
    alt: "Partner 4",
    width: 150,
    height: 75,
  },
  {
    src: "https://bio.link/_nuxt/user2.CiMA-Ti0.png",
    alt: "Partner 5",
    width: 150,
    height: 75,
  },
  {
    src: "https://bio.link/_nuxt/user5.CwX5k9hm.png",
    alt: "Partner 1",
    width: 150,
    height: 75,
  },
  {
    src: "https://bio.link/_nuxt/user4.Bo0FbbWl.png",
    alt: "Partner 2",
    width: 150,
    height: 75,
  },
  {
    src: "https://bio.link/_nuxt/user3.w1PRNQjx.png",
    alt: "Partner 3",
    width: 150,
    height: 75,
  },
  {
    src: "https://bio.link/_nuxt/user2.CiMA-Ti0.png",
    alt: "Partner 4",
    width: 150,
    height: 75,
  },
  {
    src: "https://bio.link/_nuxt/user2.CiMA-Ti0.png",
    alt: "Partner 5",
    width: 150,
    height: 75,
  },
]

export default function PartnersSection() {
  return (
    <section className="pb-4 relative">
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-6xl font-semibold text-gray-900">Loved by top creators</h2>
      </div>

      <div className="w-full relative">
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <Marquee>
          {partnerLogos.map((logo, index) => (
            <div key={index} className="relative h-full w-fit mx-[0.5rem] flex items-center justify-start group">
              <div className="relative overflow-hidden rounded-xl transition-all duration-300">
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain transition-all duration-300"
                  style={{
                    maxWidth: "200px",
                    height: "auto",
                  }}
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
