"use client"
import { animate } from 'motion'
import { AnimatePresence, motion } from 'motion/react'
import React, { useEffect, useRef, useState } from 'react'


type ToastProps = {
    message: string,
    duration?: number
    animation?: "slide" | "fade"
}


function Toast({ animation = "slide", message = "default message", duration = 3 }: ToastProps) {
    const [show, setShow] = useState(true);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    }, [show]);

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setShow(false);
        }, duration * 1000)
        timeoutRef.current = timeoutID;

        return (() => clearTimeout(timeoutID))
    }, [duration])

    const slideTransition = {
        initial: { x: 500 },
        animate: { x: 0 },
        exit: { x: 500 },
        transition: { duration: 0.5 },
    }

    const fadeTransition = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.5 }
    }

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    {...animation === "slide" ? { ...slideTransition } : { ...fadeTransition }}
                    className='toast'>{message}
                    <button className='toast-decline button-sm' onClick={() => (setShow(false))}>X</button>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Toast