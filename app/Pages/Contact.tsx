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
                        <div className='flex flex-row sm: flex-row items-center gap-6'>
                            <label htmlFor='name'></label>
                            <input className='bg-nav outline-none'type='text' placeholder='name' required></input>
                            <label htmlFor='youremail'></label>
                            <input className='bg-nav outline-none' type='text' placeholder='Your email' required></input>
                        </div>
                        <div>
                            <label htmlFor='message'></label>
                            <textarea className='bg-nav outline-none resize-none' placeholder='Your message'></textarea>
                        </div>
                        <button>Send Message</button>
                    </form>
                </div>
                <div className='w-1/3 flex flex-col gap-10'>
                    <div id='email' className='flex flex-col gap-2'>
                        <h3 className={generalSans.className}>Contact Details</h3>
                        <p className={Cabinet.className}>eric.bmiyake@gmail.com</p>
                    </div>
                    <div id='links' className='flex flex-col gap-2'>
                        <h3 className={generalSans.className}>Links</h3>
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