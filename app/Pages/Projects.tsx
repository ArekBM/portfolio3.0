import localFont from 'next/font/local'
import AnimatedText from '../(components)/AnimatedText'
import { useState, useEffect } from 'react'
import { motion, useAnimate } from 'framer-motion'
import Arrow from '@mui/icons-material/ArrowOutward';


const generalSans = localFont({
    src: '../styles/fonts/GeneralSans-Bold.woff2'
})

const Cabinet = localFont({
    src: '../styles/fonts/CabinetGrotesk-Regular.woff2'
})

const generalVar = localFont({
    src: '../styles/fonts/GeneralSans-Variable.woff2'
})

const Projects = ()  => {
    const [ mousePosition, setMousePosition ] = useState({ x: 0, y: 0})
    const [ scope, animate ] = useAnimate()
    const [ arrowScope, animateArrow ] = useAnimate()
        

    const updateMousePosition = (e : any) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
  
    useEffect(() => {
      window.addEventListener('mousemove', updateMousePosition)
      return () => {
        window.removeEventListener('mousemove', updateMousePosition)
      }
    })

    const { x, y } = mousePosition

    const handleHover = () => {
        animate(scope.current, { width: 112, height: 112 })
        animateArrow(arrowScope.current, { opacity : 1 })
    }

    const handleExit = () => {
        animate(scope.current, { width: 12, height: 12 })
        animateArrow(arrowScope.current, { opacity: 0 })
    }



    return (
        <section
            id='projects'
            className='my-[10%]'
        >
            <motion.div ref={scope} className='cursordotlinks group relative' style={{ left: x, top : y}} >
                <motion.div ref={arrowScope} style={{ opacity: 0}}>
                    <Arrow className='relative translate-y-10 translate-x-11 opacity: 0' />
                </motion.div>
            </motion.div>
            <div className='section-heading select-none'>
                <div className='heading flex items-center justify-center space-x-[3%]'>
                    <AnimatedText className={generalVar.className + ' w-fit font-medium uppercase text-darkgrey text-9xl'} text={'Projects'} transitiondelay={.5} />
                </div>

            </div>
            <div className='mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12'>
                <div className='col-span-1 md:col-span-12'>
                   {/* Hero Img */}
                </div>
                <div className='col-span-1 pt-0 md:col-span-7 md:pt-16'>
                    <a href='https://ticketme-arekbm.vercel.app/' target='_blank'>
                        <img className='w-screen duration-700 ease-in-out hover:scale-105 hover:rounded-3xl' src='./ticket-me.png' alt='left picture' width='800' height='600' onMouseEnter={handleHover} onMouseLeave={handleExit} ></img>
                    </a>
                    <div className='mt-4'>
                        <div className='flex space-x-2 mb-3'>
                            <p className='rounded-full bg-transparent border border-darkgrey flex justify-center items-center px-4 py-1 text-secondarytxt text-body-4 2xl:text-3xl'>2023</p>
                            <p className='rounded-full bg-transparent border border-darkgrey flex justify-center items-center px-4 py-1 text-secondarytxt text-body-4 2xl:text-3xl'>Next.js • MongoDB • TailwindCSS • Typescript</p>
                        </div>
                        <div className='2xl:space-y-3'>
                            <h3 className={generalVar.className + ' text-work-title 2xl:text-5xl font-medium uppercase text-offwhitetxt'}>ticket me app</h3>
                            <p className={Cabinet.className + ' text-body-2 2xl:text-4xl text-stone'}>Full stack application utilizing MongoDB and RESTFUL API architecture</p>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 pt-0 md:col-span-5 md:pt-80'>
                    <a href='https://main.d2nibnnfhe4wtq.amplifyapp.com/' target='_blank'>
                        <img className='w-screen duration-700 ease-in-out hover:scale-105 hover:rounded-3xl' src='./dalle.png' alt='right picture' width='800' height='600' onMouseEnter={handleHover} onMouseLeave={handleExit} ></img>
                    </a>
                    <div className='mt-4'>
                        <div className='flex space-x-2 mb-3'>
                            <p className='rounded-full bg-transparent border border-darkgrey flex justify-center items-center px-4 py-1 text-secondarytxt text-body-4 2xl:text-3xl'>2023</p>
                            <p className='rounded-full bg-transparent border border-darkgrey flex justify-center items-center px-4 py-1 text-secondarytxt text-body-4 2xl:text-3xl'>Next.js • AWS • TailwindCSS • Typescript</p>
                        </div>
                    </div>
                    <div className='2xl:space-y-3'>
                        <h3 className={generalVar + ' text-work-title 2xl:text-5xl font-medium uppercase text-offwhitetxt'}>thumbnail AI</h3>
                        <p className={Cabinet.className + ' text-body-2 2xl:text-4xl text-stone'}>Full stack application hosted on AWS with Stripe integration. Also utilizes tRPC and NextAuth.js </p>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Projects

function setMousePosition(arg0: { x: any; y: any }) {
    throw new Error('Function not implemented.')
}
