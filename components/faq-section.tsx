"use client"

import { useRef, useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const faqRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (faqRef.current && !faqRef.current.contains(event.target as Node)) {
        setOpenIndex(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqItems = [
    {
      question: "What is Tabbio, really? How is it different from other job boards?",
      answer:
        "Tabbio is a career management platform that creates one profile that syncs everywhere. Unlike traditional job boards where you start over each time, Tabbio automatically updates your information across all major job platforms when you make changes once.",
    },
    {
      question: "How does the auto-sync feature work?",
      answer:
        "Once you set up your Tabbio profile with your experience, skills, and preferences, our platform automatically keeps your information current across connected job boards. Update your resume once, and it reflects everywhere instantly.",
    },
    {
      question: "Is Tabbio mobile-friendly?",
      answer:
        "Yes, Tabbio works perfectly on all devices. Whether you're job searching on your phone, tablet, or desktop, you can manage applications, update your profile, and track opportunities seamlessly.",
    },
    {
      question: "Can I customize my profile for different types of jobs?",
      answer:
        "Absolutely. You can create multiple profile versions tailored to different industries or roles while maintaining one central hub. Tabbio intelligently matches the right profile version to relevant opportunities.",
    },
    {
      question: "How do I track my job applications?",
      answer:
        "Tabbio provides a comprehensive dashboard where you can see all your applications, their status, interview schedules, and follow-up reminders in one place. Never lose track of an opportunity again.",
    },
    {
      question: "What analytics and insights do I get?",
      answer:
        "You can track profile views, application response rates, which job boards are most effective for you, and get insights on how to improve your job search strategy based on real data from your activities.",
    },
  ]

  return (
    <section id="faq" className="py-10 sm:py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 md:mb-12 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full border-2 border-black mb-4">
            <span className="text-sm font-medium text-black">FAQ</span>
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-black sm:text-3xl md:text-5xl mb-4">Got questions?</h3>
        </div>

        <div ref={faqRef} className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {faqItems.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFaq(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface FaqItemProps {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}

function FaqItem({ question, answer, isOpen, onClick }: FaqItemProps) {
  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-300 group"
      style={{ backgroundColor: "#f4f4f4" }}
    >
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between p-4 md:p-5 text-left focus:outline-none"
      >
        <h3 className="text-sm md:text-base font-medium text-black transition-colors duration-300">{question}</h3>
        <ChevronDown
          className={`h-5 w-5 text-black transition-transform duration-300 flex-shrink-0 ml-4 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
          transition: "max-height 0.3s ease-in-out, opacity 0.3s ease-in-out, padding 0.2s ease-in-out",
          opacity: isOpen ? 1 : 0,
          padding: isOpen ? "0 16px 20px 16px" : "0 16px",
          overflow: "hidden",
        }}
      >
        <p className="text-sm md:text-base text-black pb-2">{answer}</p>
      </div>
    </div>
  )
}
