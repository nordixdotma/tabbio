"use client"

import { Button } from "@/components/ui/button"
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hovered, setHovered] = useState<number | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  const { scrollY } = useScroll()
  const [visible, setVisible] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  })

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  const navItems = [
    { name: "Features", href: "/#features" },
    { name: "FAQ", href: "/#faq" },
  ]

  return (
    <motion.header ref={headerRef} className="fixed top-0 left-0 right-0 z-40 w-full">
      <motion.div
        animate={{
          backdropFilter: visible ? "blur(10px)" : "none",
          boxShadow: visible ? "0 0 24px rgba(34, 111, 211, 0.1), 0 1px 1px rgba(0, 0, 0, 0.05)" : "none",
          width: visible ? "85%" : "100%",
          y: visible ? 20 : 0,
          backgroundColor: visible ? "white" : "transparent",
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 50,
        }}
        style={{
          minWidth: "800px",
          borderRadius: visible ? "9999px" : "9999px",
        }}
        className={`relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start px-4 py-2 lg:flex ${
          visible ? "bg-white" : "bg-transparent"
        }`}
      >
        <Link href="/" className="relative z-20 mr-4 flex items-center px-2 py-1">
          <div className="h-10 w-auto">
            <Image
              src="/logo.png"
              alt="Tabbio"
              width={120}
              height={48}
              className="h-full w-auto object-contain"
              priority
            />
          </div>
        </Link>

        <motion.div
          onMouseLeave={() => setHovered(null)}
          className="hidden flex-row items-center space-x-1 text-base font-medium lg:flex ml-4"
        >
          {navItems.map((item, idx) => (
            <div key={`nav-item-${idx}`} className="relative">
              <Link
                onMouseEnter={() => setHovered(idx)}
                className={`relative px-4 py-2 text-black ${
                  pathname && pathname === item.href ? "font-semibold" : ""
                } hover:text-black transition-colors`}
                href={item.href}
              >
                {hovered === idx && (
                  <motion.div layoutId="hovered" className="absolute inset-0 h-full w-full rounded-full" />
                )}
                <span className="relative z-20 after:absolute after:bottom-[-4px] after:left-1/2 after:h-[2px] after:w-0 after:bg-black after:transition-all after:-translate-x-1/2 hover:after:w-full">
                  {item.name}
                </span>
              </Link>
            </div>
          ))}
        </motion.div>

        <div className="hidden md:flex items-center justify-end space-x-4 relative z-30 flex-1">
          <Link href="/login" className="text-black hover:text-gray-700 transition-colors">
            Log in
          </Link>
          <Button
            onClick={() => {
              document.getElementById("services")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }}
            className="bg-black text-white hover:bg-gray-800 transition-all duration-300 rounded-full"
          >
            Sign up
          </Button>
        </div>
      </motion.div>

      <motion.div
        animate={{
          backdropFilter: visible ? "blur(10px)" : "none",
          boxShadow: visible ? "0 0 24px rgba(34, 111, 211, 0.1), 0 1px 1px rgba(0, 0, 0, 0.05)" : "none",
          width: visible ? "90%" : "100%",
          paddingRight: visible ? "12px" : "16px",
          paddingLeft: visible ? "12px" : "16px",
          y: visible ? 20 : 0,
          backgroundColor: visible ? "white" : "transparent",
        }}
        style={{
          borderRadius: visible ? "9999px" : "2rem",
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 50,
        }}
        className={`relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-0 py-2 lg:hidden ${
          visible ? "bg-white" : "bg-transparent"
        }`}
      >
        <div className="flex w-full flex-row items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="h-10 w-auto">
              <Image
                src="/logo.png"
                alt="Tabbio"
                width={100}
                height={40}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
          </Link>

          <button className="p-2 rounded-full text-black" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-background/50 backdrop-blur-sm z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={(e) => {
                  if (e.target === e.currentTarget) {
                    setMobileMenuOpen(false)
                  }
                }}
              />

              <motion.div
                ref={menuRef}
                className="absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-card/90 backdrop-blur-md px-4 py-8 shadow-lg border border-border"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="w-full space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                      className="w-full"
                    >
                      <Link
                        href={item.href}
                        className={`flex items-center py-3 px-4 rounded-lg font-medium text-base transition-all ${
                          pathname && pathname === item.href
                            ? "bg-primary/20 text-primary"
                            : "text-foreground hover:bg-primary/10"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="w-full mt-4 space-y-2">
                  <Link
                    href="/login"
                    className="block w-full text-center py-2 text-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Log in
                  </Link>
                  <Button
                    className="w-full bg-black text-white hover:bg-gray-800 rounded-full"
                    onClick={() => {
                      setMobileMenuOpen(false)
                      document.getElementById("services")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      })
                    }}
                  >
                    Sign up
                  </Button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  )
}
