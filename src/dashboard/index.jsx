import { useState, useEffect } from 'react';
import AddResume from './components/AddResume';
import GlobalApi from './../../service/GlobalApi';
import { useUser } from '@clerk/clerk-react';
import ResumeCardItem from './components/ResumeCardItem';

function Dashboard() {
    //fetching user emaail using clerk
    const { user } = useUser();
    const [resumeList, setResumeList] = useState([]); //state to store resume list

    useEffect(() => {
        user && GetResumesList(); //if user is present then get the resume list
    }, [user]);

    //function to get resume list
    const GetResumesList = () => {
        GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress).then(res => {
            console.log(res.data.data);
            setResumeList(res.data.data);
        })
    }

    return (
        <div className='bg-gradient-to-r from-red-200 to-yellow-200' >
            <div className='bg-[url("../../textures/diagonal-striped-brick.png")] h-screen overflow-y-scroll scroll-smooth p-10 md:px-20 lg:px-32'>
                <h2 className='font-bold text-3xl'>My Resume</h2>
                <p>
                    "Craft your perfect resume effortlessly with AI-powered precision!"
                </p>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-5'>
                    <AddResume />

                    {/*&& operator is used to check if resumeList is present or not otherwise it will throw an error*/}
                    {resumeList.length > 0 && resumeList.map((resume, index) => {
                        return <ResumeCardItem key={index} resume={resume} refreshData={GetResumesList} />
                    })}
                </div>
            </div >
        </div>
    )
}

export default Dashboard;