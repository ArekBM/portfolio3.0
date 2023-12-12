'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from '@/app/(components)/Nav'
import Contact from '@/app/Pages/Contact'
import About from '@/app/Pages/About'
import './globals.css'
import Projects from './Pages/Projects'
import { useRef, useState, useEffect } from 'react'
import Skills from './Pages/Skills'
import Hero from './Pages/Hero'
import { motion } from 'framer-motion'



export default function RootLayout({ children }: {children: React.ReactNode}) {

  const section1ref = useRef(null)
  const section2ref = useRef(null);
  const [isInSection, setIsInSection] = useState(false);

  const [ mousePosition, setMousePosition ] = useState({ x: 0, y: 0})

  const updateMousePosition = (e : any) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition)
    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  })

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const callback = (entries: any[]) => {
      entries.forEach((entry) => {
        setIsInSection(entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (section1ref.current) {
      observer.observe(section1ref.current)
    }

    if (section2ref.current) {
      observer.observe(section2ref.current)
    }

    return () => {
      observer.disconnect();
    };

  }, []);

  const bgColor = isInSection ? 'bg-offblack' : 'bg-nav';

  const { x, y } = mousePosition

  return (
    <html lang="en">
      <body>
        <div className='cursordot' style={{ left: x, top : y }}>
        </div>
        <div className='flex flex-col h-screen max-h-screen'>
          <div className={`${bgColor} transition-all duration-500 ease-in-out`}>
            <Hero />
            <Nav isInSection={isInSection} />
            <div ref={section1ref}>
              <About />
            </div>
            <Skills />
            <div ref={section2ref}>
              <Projects />
            </div>
            <Contact />
          </div>
        </div>
      </body>
    </html>
  )
}
