import React, { useEffect } from 'react'
import AddResume from './components/AddResume';
import GlobalApi from './../../service/GlobalApi';
import { useUser } from '@clerk/clerk-react';

function Dashboard() {
    //fetching user emaail using clerk
    const { user } = useUser();

    useEffect(() => {
        user && GetResumesList(); //if user is present then get the resume list
    }, [user]);

    const GetResumesList = () => {
        GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress).then(res => {
            console.log(res.data);
        })
    }

    return (
        <div className='p-10 md:px-20 lg:px-32'>
            <h2 className='font-bold text-3xl'>My Resume</h2>
            <p>
                "Craft your perfect resume effortlessly with AI-powered precision!"
            </p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10'>
                <AddResume />
            </div>
        </div>
    )
}

export default Dashboard;