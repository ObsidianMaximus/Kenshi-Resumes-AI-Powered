import { Notebook } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

function ResumeCardItem({ resume }) {
    return (
        <Link to={'/dashboard/resume/' + resume.documentId + '/edit'}>
            <div>
                <div className='p-14 bg-secondary flex justify-center items-center h-[280px] border border-primary rounded-lg border-dashed hover:scale-105 shadow-md  hover:shadow-md shadow-primary transition-all cursor-pointer'>
                    <Notebook />
                </div>
                <h2 className='text-center my-1'>{resume.title}</h2>
            </div>
        </Link>
    )
}

export default ResumeCardItem