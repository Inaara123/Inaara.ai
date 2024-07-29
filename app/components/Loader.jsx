import React from 'react';
import { animate, motion } from 'framer-motion';

const Loader = () => {

    const anim = (variants, custom) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            variants,
            custom
        }
    };

    const expand = {
        initial: {
            top: 0,
        },
        enter: (i) => ({
            top: "100%",
            transition: {
                duration: 0.4,
                delay: 0.05 * i
            },
            transitionEnd: {
                height: 0
            }
        }),
        exit: (i) => ({
            height: "100%",
            transition: {
                duration: 0.4,
                delay: 0.05 * i
            },
        })
    }

    const columns = 5;

    return (
        <div className='z-[999] relative'>
            <div className='h-screen w-screen fixed top-0 left-0 pointer-events-none flex'>
                {
                    [...Array(columns)].map((_, i) => {
                        return <motion.div key={i} {...anim(expand, columns - i)} className='h-full w-full bg-white relative' />
                    })
                }
            </div>
        </div>
    )
}

export default Loader;
