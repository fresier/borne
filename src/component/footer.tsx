'use client' 

import { useEffect, useState } from "react";

export default function Footer() {

    const [duration, setDuration] = useState(5);
    const [secondsLeft, setSecondsLeft] = useState(duration);

    useEffect(() => {
        const timer = setInterval(() => {
            setSecondsLeft(v => {
                if (v <= 0) {
                    return 0
                }
                return v - 1
            })
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    },[duration])

    //if detect click on screen, reset timer
    useEffect(() => {
        const resetTimer = () => {
            setSecondsLeft(duration)
        }
        window.addEventListener('click', resetTimer)
        return () => {
            window.removeEventListener('click', resetTimer)
        }
    },[duration])



    return (
    <>
        <footer 
            className='footer' 
            style={{
                'position':'absolute',
                'zIndex':'1',
                'bottom':'0',
                'width':'100%',
                'height':'20px',
                'lineHeight':'20px',
                'backgroundColor':'#1F2A2E'
            }}>
            <div className='container-fluid'>
                <span className='text-white text-center'>reset in {secondsLeft} sec</span>
            </div>
        </footer>
    </>
    )
}