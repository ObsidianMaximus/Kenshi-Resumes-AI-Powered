import React, { useEffect, useState } from 'react'
import Header from '@/components/custom/Header'
import { Button } from '@/components/ui/button'
import ResumePreview from '@/dashboard/resume/component/ResumePreview'
import GlobalApi from '../../../../service/GlobalApi';
import { useParams } from 'react-router';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { RWebShare } from "react-web-share";
import html2pdf from 'html2pdf.js';
import Footer from '@/components/custom/Footer';

function ViewResume() {
    const [resumeInfo, setResumeInfo] = useState();
    const [downloading, setDownloading] = useState(false);
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

    // const HandleDownload = () => {
    //     window.print();
    // }

    const HandleDownload = () => {
        if (!resumeInfo || downloading) return; // Ensure resumeInfo is available and no download in progress
        setDownloading(true);
        let element = document.getElementById('print-area');
        let opt = {
            margin: 0,
            filename: resumeInfo?.firstName + " " + resumeInfo?.lastName + "'s resume.pdf",
            image: { type: 'jpeg', quality: 1 },
            html2canvas: { scale: 3 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };

        // New Promise-based usage:
        html2pdf().from(element).set(opt).save().finally(() => {
            setDownloading(false); // Reset flag when download is finished or canceled
        });;

        // Old monolithic-style usage:
        // html2pdf(element, opt);
    }

    return (
        <div className='bg-gradient-to-r from-red-200 to-yellow-200'>
            <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
                <div id="non-printable">
                    <Header />
                    <div className='my-10 mx-10 md:mx-20 lg:mx-36'>
                        <h2 className='text-center text-2xl font-medium'>🚀 Your career journey starts now! Here's your polished resume—go land that dream job! 🎯</h2>
                        <p className='text-center text-gray-600'>You can download your resume and share it with your connections!</p>
                        <div className='flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0 px-44 my-10'>
                            <Button onClick={HandleDownload}>Download</Button>
                            <RWebShare
                                data={{
                                    text: "Hey guys!This is my resume,have a look please...",
                                    // url: import.meta.env.VITE_BASE_URL + "/my-resume/" + resumeId + "/view",
                                    url: window.location.href,
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
                <Footer />
            </ResumeInfoContext.Provider>
        </div>
    )
}

export default ViewResume