import localFont from 'next/font/local'

const generalSans = localFont({
    src: '../styles/fonts/GeneralSans-Bold.woff2'
})

const Cabinet = localFont({
    src: '../styles/fonts/CabinetGrotesk-Regular.woff2'
})

const Projects = ()  => {
    return (
        <section
            id='projects'
            className='px-10 md:px-5 xl:px-20 2xl:px-28'
        >
            <div className='mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12'>
                <div className='col-span-1 md:col-span-12'>
                    HERO IMG
                </div>
                <div className='col-span-1 pt-0 md:col-span-7 md:pt-16'>
                    <img className='w-screen duration-700 ease-in-out hover:scale-105 hover:rounded-3xl' src='./ticket-me.png' alt='left picture' width='800' height='600'></img>
                    <div className='mt-4'>
                        <div className='flex space-x-2 mb-3'>
                            <p className='rounded-full bg-transparent border border-secondary-600 flex justify-center items-center px-4 py-1 text-secondarytxt text-body-4 2xl:text-3xl'>2023</p>
                            <p className='rounded-full bg-transparent border border-secondary-600 flex justify-center items-center px-4 py-1 text-secondarytxt text-body-4 2xl:text-3xl'>Next.js • MongoDB • TailwindCSS • Typescript</p>
                        </div>
                        <div className='2xl:space-y-3'>
                            <h3 className=' 2xl:text-5xl font-medium uppercase text-secondarytxt'>ticket me app</h3>
                            <p className={Cabinet.className + ' 2xl:text-4xl text-secondarytxt'}>Full stack application utilizing MongoDB and RESTFUL API architecture</p>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 pt-0 md:col-span-5 md:pt-80'>
                    <img className='w-screen duration-700 ease-in-out hover:scale-105 hover:rounded-3xl' src='./folder.png' alt='right picture' width='800' height='600'></img>
                    <div className='mt-4'>
                        <div className='flex space-x-2 mb-3'>
                            <p className='rounded-full bg-transparent border border-secondary-600 flex justify-center items-center px-4 py-1 text-secondarytxt text-body-4 2xl:text-3xl'>2023</p>
                            <p className='rounded-full bg-transparent border border-secondary-600 flex justify-center items-center px-4 py-1 text-secondarytxt text-body-4 2xl:text-3xl'>Next.js • AWS • TailwindCSS • Typescript • Supabase</p>
                        </div>
                    </div>
                    <div className='2xl:space-y-3'>
                        <h3 className=' 2xl:text-5xl font-medium uppercase text-secondarytxt'>thumbnail AI</h3>
                        <p className={Cabinet.className + ' 2xl:text-4xl text-secondarytxt'}>Full stack application hosted on AWS with Stripe integration. Also utilizes tRPC and NextAuth.js </p>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Projects