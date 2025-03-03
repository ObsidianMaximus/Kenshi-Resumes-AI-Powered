import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

function Footer() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={(theme === 'light') ? 'bg-gradient-to-r from-red-200 to-yellow-200' : ''}>
            <div className={(theme === 'light') ? 'p-3 px-5 flex justify-center items-center bg-[url("../../textures/food.png")]' : 'p-3 px-5 flex justify-center items-center bg-[url("../../textures/cubes.png")]'}>
                <div className='my-5 flex flex-col justify-center items-center gap-2'>
                    <p>All Rights Reserved</p>
                    <p>© {new Date().getFullYear()} Kenshi Resumes, Inc</p>
                </div>
            </div >
        </div>
    )
}

export default Footer