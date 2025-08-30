"use client"

import React from "react"
import { motion } from "framer-motion"

interface SectionTitleProps {
  title: string
  subtitle?: string
}

function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-10 md:mb-16">
      <div className="flex justify-center mb-4">
        <span className="inline-flex items-center px-4 py-1 rounded-full border-2 border-black text-black text-sm font-medium">
          Testimonials
        </span>
      </div>
      <h2 className="text-2xl font-medium tracking-tight text-gray-900 sm:text-3xl md:text-6xl mb-4">
        See what people
        <br />
        are saying
      </h2>
    </div>
  )
}

const TestimonialsColumn = (props: {
  className?: string
  testimonials: any[]
  duration?: number
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-4 pb-4"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, country }, i) => (
                <div
                  className="p-4 rounded-2xl border-2 border-gray-200 bg-white shadow-sm max-w-sm w-full relative"
                  key={i}
                >
                  {/* Google-style header */}
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      width={32}
                      height={32}
                      src={image || "/placeholder.svg"}
                      alt={name}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-sm text-black leading-tight">{name}</div>
                      <div className="text-xs text-gray-600 leading-tight">{country}</div>
                    </div>
                    {/* Google logo */}
                    <div className="text-xs text-gray-600">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Star rating */}
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#FFC107">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  {/* Review text */}
                  <div className="text-sm text-gray-800 leading-relaxed">
                    <span className="font-bold">{text.split(".")[0]}.</span>
                    {text.split(".").slice(1).join(".") && text.split(".").slice(1).join(".")}
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  )
}

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "Tabbio saved me hours of work. I update my profile once and it syncs to every job board automatically. No more copying and pasting the same information everywhere.",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Sarah Johnson",
      country: "United States",
    },
    {
      text: "As a recruiter, Tabbio makes it so much easier to find qualified candidates. The real-time updates mean I always see the most current information.",
      image:
        "https://plus.unsplash.com/premium_photo-1663933534186-e50d9fcef389?q=80&w=877&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Michael Chen",
      country: "Canada",
    },
    {
      text: "The analytics dashboard shows me exactly which job boards are getting me the most interviews. This data has completely changed my job search strategy.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      name: "David Rodriguez",
      country: "Mexico",
    },
    {
      text: "Tabbio's AI matching is incredible. I get job recommendations that actually fit my skills and career goals, not just random postings.",
      image:
        "https://images.unsplash.com/photo-1585728748176-455ac5eed962?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Emily Watson",
      country: "United Kingdom",
    },
    {
      text: "I love how I can track all my applications in one place. No more wondering if I already applied to a company or what stage I'm at in the process.",
      image:
        "https://plus.unsplash.com/premium_photo-1675129779554-dc86569708c8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "James Thompson",
      country: "Australia",
    },
    {
      text: "The mobile app is perfect for job searching on the go. I can apply to positions and update my profile from anywhere, and it syncs instantly.",
      image:
        "https://images.unsplash.com/photo-1731745078172-e3603e118f65?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Lisa Park",
      country: "South Korea",
    },
  ]

  const firstColumn = testimonials.slice(0, 2)
  const secondColumn = testimonials.slice(2, 4)
  const thirdColumn = testimonials.slice(4, 6)

  return (
    <section id="testimonials" className="py-10 sm:py-16 md:py-24 relative overflow-hidden bg-white">
      {/* Add blur shadow overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08)_0%,transparent_70%)] w-full h-full" />
      </div>
      <div className="max-w-7xl mx-auto px-2 md:px-4 relative z-10">
        <SectionTitle title="See what people are saying" />

        <div className="flex justify-center gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[600px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  )
}
