import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { LoaderCircle } from 'lucide-react';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { useContext } from 'react';
import { useParams } from 'react-router';
import GlobalApi from './../../../../../service/GlobalApi';
import { toast } from "sonner";
import { useRef } from 'react';

function Education() {
    const startDateRef = useRef(null);
    const endDateRef = useRef(null);
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const [loading, setLoading] = useState(false);
    const params = useParams();
    const [educationalList, setEducationalList] = useState([{
        university: '',
        degree: '',
        major: '',
        startDate: '',
        endDate: '',
        description: ''
    }]);

    const handleChange = (index, event) => {
        const newEntries = educationalList.slice();
        const { name, value } = event.target;
        newEntries[index][name] = value;
        setEducationalList(newEntries);
    }

    const AddNewEducation = () => {
        setEducationalList([...educationalList, {
            university: '',
            degree: '',
            major: '',
            startDate: '',
            endDate: '',
            description: ''
        }]);
    }

    const RemoveEducation = () => {
        setEducationalList(educationalList => educationalList.slice(0, -1));
    }

    const onSave = (e) => {
        setLoading(true);
        const data = {
            data: {
                education: educationalList.map(({ id, ...rest }) => rest)
            }
        }
        GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(res => {
            console.log(res);
            setLoading(false);
            toast("Your details have been saved successfully");
        }, (err) => {
            console.log(err);
            toast("Something went wrong!Please try again...");
            setLoading(false);
        });
    }

    useEffect(() => {
        console.log(educationalList);
        setResumeInfo({
            ...resumeInfo,
            education: educationalList
        });
    }, [educationalList])

    return (
        <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
            <h2 className='font-bold text-lg'>Education</h2>
            <p>Please add your educational details</p>

            <div>
                {educationalList.map((education, index) => (
                    <div key={index}>
                        <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
                            <div className='col-span-2'>
                                <label>University Name</label>
                                <Input name="university" onChange={(event) => handleChange(index, event)} />
                            </div>
                            <div>
                                <label>Degree</label>
                                <Input name="degree" onChange={(event) => handleChange(index, event)} />
                            </div>
                            <div>
                                <label>Major</label>
                                <Input name="major" onChange={(event) => handleChange(index, event)} />
                            </div>
                            <div>
                                <label>Start Date</label>
                                <Input name="startDate" ref={startDateRef}
                                    onFocus={() => startDateRef.current?.showPicker()} type="date" onChange={(event) => handleChange(index, event)} />
                            </div>
                            <div>
                                <label>End Date</label>
                                <Input name="endDate" ref={endDateRef}
                                    onFocus={() => endDateRef.current?.showPicker()} type="date" onChange={(event) => handleChange(index, event)} />
                            </div>
                            <div className='col-span-2'>
                                <label>Description</label>
                                <Textarea name="description" onChange={(event) => handleChange(index, event)} />
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            <div className='flex justify-between'>
                <div className='flex gap-2'>
                    <Button variant="outline" onClick={AddNewEducation} className="text-primary">+ Add More Education</Button>
                    <Button variant="outline" onClick={RemoveEducation} className="text-primary">- Remove</Button>
                </div>

                <Button type="submit"
                    disabled={loading}
                    onClick={() => onSave()}
                > {loading ? <LoaderCircle className='animate-spin' /> : "Save"}</Button>

            </div>
        </div>
    )
}

export default Education