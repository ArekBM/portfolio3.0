import { Link } from 'react-scroll'
import localFont from 'next/font/local'

const generalSans = localFont({
    src: '../styles/fonts/GeneralSans-Bold.woff2'
})

const Cabinet = localFont({
    src: '../styles/fonts/CabinetGrotesk-Regular.woff2'
})

const Nav = () => {
    return (
        <nav className='flex justify-between bg-nav p-4 align-items'>
            <Link to='home' smooth>
                <h1 className={generalSans.className}>Arek</h1>
            </Link>
            <div className='flex items-center space-x-4'>
                <Link to='about' smooth>
                    <h2 className={Cabinet.className}>about</h2>
                </Link>
                <Link to='skills' smooth>
                    <h2 className={Cabinet.className}>skills</h2>
                </Link>
                <Link to='projects' smooth>
                    <h2 className={Cabinet.className}>projects</h2>
                </Link>
                <div className='p-2.5 bg-contactbtn rounded-full'>
                    <Link to='contact' smooth>
                        <h2 className={Cabinet.className + ' text-offwhitetxt'}>contact</h2>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav