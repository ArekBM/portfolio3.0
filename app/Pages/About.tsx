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
                <h1 className={generalSans.className + ' text-6xl font-medium text-offwhitetxt leading-[1.25em] md:leading-[1.08em]'}>I create elevating digital experiences that inspire and connect with people through development and design.</h1>
            </div>
        </section>
    )
}

export default About