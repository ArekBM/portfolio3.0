import localFont from 'next/font/local'

const generalSans = localFont({
    src: '../styles/fonts/GeneralSans-Bold.woff2'
})

const Cabinet = localFont({
    src: '../styles/fonts/CabinetGrotesk-Regular.woff2'
})

const About = () => {

    return (
        <section
            id='about'
            className={`select-none flex my-20 md:my-[12%] py-10 flex-col items-center justify-center overflow-hidden px-10 md:px-5 xl:px-20 2xl:px-28`}
        >   
            <div className='flex w-full items-center space-x-20'>
                <h1 className={Cabinet.className + ' text-6xl font-medium text-offwhitetxt leading-[1.25em] md:leading-[1.08em]'}>I am a developer based in San Francisco, CA. I love interactive and dynamic design. Flow and rythm are both something I focus on and enjoy.</h1>
            </div>
        </section>
    )
}

export default About