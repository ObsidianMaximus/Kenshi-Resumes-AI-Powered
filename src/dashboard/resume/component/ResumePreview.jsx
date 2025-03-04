import React from 'react'
import { useContext } from 'react'
import PersonalDetailPreview from './preview/PersonalDetailPreview';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import SummaryPreview from './preview/SummaryPreview';
import ExperiencePreview from './preview/ExperiencePreview';
import EducationalPreview from './preview/EducationalPreview';
import SkillsPreview from './preview/SkillsPreview';
import { ThemeContext } from '@/context/ThemeContext';

function ResumePreview() {
    const { theme } = useContext(ThemeContext);
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);//useContext hook to get the resumeInfo from the context
    return (
        <div className={(theme === 'light') ? 'bg-white shadow-lg h-full p-14 border-t-[20px] overflow-x-scroll sm:overflow-visible' : 'bg-gray-900 shadow-lg shadow-[rgba(0,191,255,0.8)] h-full p-14 border-t-[20px] overflow-x-scroll sm:overflow-visible'}
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