import React from 'react'
import { useContext } from 'react'
import PersonalDetailPreview from './preview/PersonalDetailPreview';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import SummaryPreview from './preview/SummaryPreview';
import ExperiencePreview from './preview/ExperiencePreview';
import EducationalPreview from './preview/EducationalPreview';
import SkillsPreview from './preview/SkillsPreview';

function ResumePreview() {

    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);//useContext hook to get the resumeInfo from the context
    return (
        <div className='bg-white shadow-lg h-full p-14 border-t-[20px]'
            style={
                {
                    borderColor: resumeInfo?.themeColor || "#3357FF"
                }
            }
        >
            {/* Personal Detail */}
            <PersonalDetailPreview resumeInfo={resumeInfo} />
            {/*Summary */}
            <SummaryPreview resumeInfo={resumeInfo} />
            {/*Experience */}
            <ExperiencePreview resumeInfo={resumeInfo} />
            {/*Education */}
            <EducationalPreview resumeInfo={resumeInfo} />
            {/*Skills */}
            <SkillsPreview resumeInfo={resumeInfo} />
        </div>
    )
}

export default ResumePreview