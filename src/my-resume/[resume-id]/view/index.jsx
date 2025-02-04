import React, { useEffect, useState } from 'react'
import Header from '@/components/custom/Header'
import { Button } from '@/components/ui/button'
import ResumePreview from '@/dashboard/resume/component/ResumePreview'
import GlobalApi from '../../../../service/GlobalApi';
import { useParams } from 'react-router';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { RWebShare } from "react-web-share";

function ViewResume() {
    const [resumeInfo, setResumeInfo] = useState();
    const { resumeId } = useParams();

    useEffect(() => {
        GetResumeInfo();
    }, []);

    const GetResumeInfo = () => {
        GlobalApi.GetUserResumeById(resumeId).then(res => {
            console.log(res.data.data);
            setResumeInfo(res.data.data);
        })
    }

    const HandleDownload = () => {
        window.print();
    }

    return (
        <div className='bg-gradient-to-r from-red-200 to-yellow-200'>
            <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
                <div id="non-printable">
                    <Header />
                    <div className='my-10 mx-10 md:mx-20 lg:mx-36'>
                        <h2 className='text-center text-2xl font-medium'>🚀 Your career journey starts now! Here's your polished resume—go land that dream job! 🎯</h2>
                        <p className='text-center text-gray-600'>You cand download your resume and share it with your friends and family!</p>
                        <div className='flex justify-between px-44 my-10'>
                            <Button onClick={HandleDownload}>Download</Button>
                            <RWebShare
                                data={{
                                    text: "Hey guys!This is my resume,have a look please...",
                                    url: import.meta.env.VITE_BASE_URL + "my-resume/" + resumeId + "/view",
                                    title: resumeInfo?.firstName + " " + resumeInfo?.lastName + "'s resume",
                                }}
                                onClick={() => console.log("shared successfully!")}
                            >
                                <Button>Share 🔗</Button>
                            </RWebShare>
                        </div>
                    </div>
                </div>

                <div className='bg-white my-10 mx-10 md:mx-20 lg:mx-36'>
                    {/*updated index.css */}
                    <div id="print-area">
                        <ResumePreview />
                    </div>
                </div>
            </ResumeInfoContext.Provider>
        </div>
    )
}

export default ViewResume