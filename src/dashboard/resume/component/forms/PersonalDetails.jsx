import React from 'react'
import { useContext } from 'react'
import { ResumeInfoContext } from '@/context/ResumeInfoContext';

function PersonalDetails() {
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    return (
        <div className='p-5 shadow-lg rounded-lg border border-t-primary border-t-4 mt-10'>
            <h2 className='font-bold text-lg'>Personal Detail</h2>
            <p>Get started with basic information</p>
        </div>
    )
}

export default PersonalDetails