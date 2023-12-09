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


const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }: {children: React.ReactNode}) {

  const section1ref = useRef(null)
  const section2ref = useRef(null);
  const [isInSection, setIsInSection] = useState(false);

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

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex flex-col h-screen max-h-screen'>
          <div className={`${bgColor} transition-all duration-500 ease-in-out`}>
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
