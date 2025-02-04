import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import FormSection from '../../component/FormSection'
import ResumePreview from '../../component/ResumePreview'
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import dummy from '@/data/dummy';
import GlobalApi from '../../../../../service/GlobalApi';

function EditResume() {
    const params = useParams();//useParams is a hook that allows you to access the URL parameters from a current route in react-router
    const [resumeInfo, setResumeInfo] = useState();
    const { resumeId } = useParams();

    useEffect(
        () => {
            console.log(params.resumeId);
            // setResumeInfo(dummy);//set the resumeInfo to the dummy data
            GetResumeInfo();
        }, []);//[] so that it will be looaded on every render

    const GetResumeInfo = () => {
        GlobalApi.GetUserResumeById(resumeId).then(res => {
            console.log(res.data.data);
            setResumeInfo(res.data.data);
        })
    }

    return (
        <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
            <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
                {/*Form section */}
                <FormSection />
                {/*Preview section */}
                <ResumePreview />
            </div>
        </ResumeInfoContext.Provider>
    )
}

export default EditResume