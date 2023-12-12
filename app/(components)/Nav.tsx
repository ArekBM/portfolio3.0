import { Link } from 'react-scroll'
import localFont from 'next/font/local'

const generalSans = localFont({
    src: '../styles/fonts/GeneralSans-Bold.woff2'
})

const Cabinet = localFont({
    src: '../styles/fonts/CabinetGrotesk-Regular.woff2'
})

const Nav = ({isInSection} : any) => {

    const bgColor = isInSection ? 'bg-offblack' : 'bg-nav'
    const txtColor = isInSection ? 'text-offwhitetxt' : 'text-black'
    const btnColor = isInSection ? 'bg-nav' : 'bg-contactbtn'
    const btnTxt = isInSection  ? 'text-black' : 'text-offwhitetxt'

    return (
        <header className={`fixed top-0 z-50 flex w-full -translate-y-1 items-center justify-between ${bgColor} px-5 py-3 transition-all duration-500 ease-in-out`}>
            <Link to='home' smooth>
                <h1 className={generalSans.className + `relative z-10 group text-[17.6px] ${txtColor}`}>EM</h1>
            </Link>
            <nav className='space-x-7 sm:block'>
                <div className='flex items-center space-x-7'>
                    <Link to='about' smooth>
                        <span className={Cabinet.className + ' relative inline-block'}>
                            <span className={`relative z-10 group text-[17.6px] ${txtColor}`}>
                                about
                                <span className='absolute inset-x-0 bottom-0 h-1 bg-darkgrey w-full transform origin-left scale-x-0 transition-transform duration-300 ease-in-out rounded-full group-hover:scale-x-100'></span>
                            </span>                        
                        </span>
                    </Link>
                    <Link to='skills' smooth>
                        <span className={Cabinet.className + ' relative inline-block'}>
                            <span className={`relative z-10 group text-[17.6px] ${txtColor}`}>
                                skills
                                <span className='absolute inset-x-0 bottom-0 h-1 bg-darkgrey w-full transform origin-left scale-x-0 transition-transform duration-300 ease-in-out rounded-full group-hover:scale-x-100'></span>
                            </span> 
                        </span>
                    </Link>
                    <Link to='projects' smooth>
                        <span className={Cabinet.className + ' relative inline-block'}>
                            <span className={`relative z-10 group text-[17.6px] ${txtColor}`}>
                                projects
                                <span className='absolute inset-x-0 bottom-0 h-1 bg-darkgrey w-full transform origin-left scale-x-0 transition-transform duration-300 ease-in-out rounded-full group-hover:scale-x-100'></span>
                            </span>                       
                        </span>
                    </Link>
                    <div className={`p-2.5 ${btnColor} rounded-full transition-all duration-500 ease-in-out`}>
                        <Link to='contact' smooth>
                            <span className={Cabinet.className + ` ${btnTxt} relative inline-block transition-all duration-500 ease-in-out`}>
                                <span className='relative z-10 group text-[17.6px]'>
                                    contact me
                                    <span className='absolute inset-x-0 top-1/2 h-1 bg-darkgrey w-full transform origin-left scale-x-0 transition-transform duration-300 ease-in-out rounded-full group-hover:scale-x-100'></span>
                                </span>
                            </span>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Nav