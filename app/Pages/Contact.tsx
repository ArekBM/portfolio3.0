import React, { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import localFont from 'next/font/local'

const generalSans = localFont({
    src: '../styles/fonts/GeneralSans-Bold.woff2'
})

const Cabinet = localFont({
    src: '../styles/fonts/CabinetGrotesk-Regular.woff2'
})

const Contact = () => {
    const [ emailModalOpen, setEmailOpen ] = useState(false)
    const [ currentTime, setCurrentTIme ] = useState(new Date())

    const form = useRef<HTMLFormElement>(null)

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault()

        if(form.current){
            emailjs.sendForm('service_bxyc5tm', 'template_6uv8k5k', form.current, 'CCjxA3suyagjrswyg')
              .then((result) => {
                console.log(result.text)
              }, (error) => {
                console.log(error.text)
            })
              .then(
                () => {
                  setEmailOpen(true)
                },
                () => {
                  alert('Failed to send :(')
                }
              )
        }
    }

    useEffect(() => {
        const intervalId = setInterval(() =>{
            setCurrentTIme(new Date())
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])    

    const formattedTime = currentTime.toLocaleTimeString()

    return (
        <div
            id='contact'
            className='min-h-screen w-full'
        >
            <div className='flex items-center justify-center relative'>
                <div className='w-2/3 flex flex-col p-10'>
                    <h1 className={generalSans.className}>Lorem Ipsum dolor sit amet.</h1>
                    <p className={Cabinet.className}>Lorem ipsum dolor sit amet. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2'>
                            <div className='relative z-0'>
                                <input className='peer block w-full appearance-none border-0 border-b border-darkgrey bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0'type='text' placeholder='' required></input>
                                <label htmlFor='name' className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-secondarytxt duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75'>your name</label>
                            </div>
                            <div className='relative z-0'>
                                <input className='peer block w-full appearance-none border-0 border-b border-darkgrey bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0' type='text' placeholder='' required></input>
                                <label htmlFor='youremail' className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-secondarytxt duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75'>your email</label>
                            </div>
                            <div className='relative z-0 sm:col-span-2'>
                                <textarea className='peer block w-full appearance-none border-0 border-b border-darkgrey bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0 resize-none' rows={5} placeholder=''></textarea>
                                <label htmlFor='message' className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-secondarytxt duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75'>your message</label>
                            </div>
                        </div>
                        <br/>
                        <button type='submit'>
                            <span className='p-2.5 bg-contactbtn rounded-full'>
                                <span className={Cabinet.className + ' text-offwhitetxt relative inline-block'}>
                                    <span className='relative z-10 group text-[17.6px]'>
                                        send message
                                        <span className='absolute inset-x-0 top-1/2 h-1 bg-darkgrey w-full transform origin-left scale-x-0 transition-transform duration-300 ease-in-out rounded-full group-hover:scale-x-100'></span>
                                    </span>
                                </span>
                            </span>
                        </button>
                    </form>
                </div>
                <div className='w-1/3 flex flex-col gap-20'>
                    <div id='email' className='flex flex-col gap-2'>
                        <h4 className={generalSans.className}>Contact Details</h4>
                        <p className={Cabinet.className}>eric.bmiyake@gmail.com</p>
                    </div>
                    <div id='links' className='flex flex-col gap-2'>
                        <h4 className={generalSans.className}>My Digital Spaces</h4>
                        <p className={Cabinet.className}>Github</p>
                        <p className={Cabinet.className}>LinkedIn</p>
                    </div>
                    <div id='location' className='flex flex-col gap-2'>
                        <h3 className={generalSans.className}>Location</h3>
                        <p className={Cabinet.className}>San Francisco, CA USA</p>
                        <p className={Cabinet.className}>{formattedTime}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact