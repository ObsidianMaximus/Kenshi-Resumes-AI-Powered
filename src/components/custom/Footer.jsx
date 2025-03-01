import React from 'react'

function Footer() {
    return (
        <div className='bg-gradient-to-r from-red-200 to-yellow-200'>
            <div className='p-3 px-5 flex justify-center items-center bg-[url("../../textures/food.png")]'>
                <div className='mb-5 flex flex-col justify-center items-center gap-2'>
                    <p>All Rights Reserved</p>
                    <p>© {new Date().getFullYear()} Kenshi Resumes, Inc</p>
                </div>
            </div >
        </div>
    )
}

export default Footer