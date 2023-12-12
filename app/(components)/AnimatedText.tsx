import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

type animatedTextProps = {
    text: string | string[];
    el?: keyof JSX.IntrinsicElements
    className?: string
    transitiondelay?: number
}

const defaultAnimations = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0
    },
}

const AnimatedText = ({ text, className, el: Wrapper = 'h1', transitiondelay } : animatedTextProps ) => {


    const textArray = Array.isArray(text) ? text : [text]
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 0.5, once: true })

    return (
        <Wrapper className={className}
        >
            <span className='sr-only'>{text}</span>
            <motion.span ref={ref} initial='hidden' animate={isInView ? 'visible' : 'hidden '} transition={{ staggerChildren: 0.1 }} aria-hidden>
                {textArray.map((line) => (
                    <span className='block'>
                        {line.split(' ').map((word) => (
                            <span className='inline-block'>
                                {word.split('').map((char) => (
                                    <motion.span 
                                        className='inline-block' 
                                        variants={defaultAnimations} 
                                        transition={{ delay: transitiondelay, duration: 1 }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                                <span className='inline-block'>&nbsp;</span>
                            </span>
                        ))}
                    </span>
                ))}
            </motion.span>
        </Wrapper>
    )
}

export default AnimatedText