import React, { useEffect } from 'react'
import { useParams } from 'react-router'

function EditResume() {
    const params = useParams();//useParams is a hook that allows you to access the URL parameters from a current route in react-router
    useEffect(
        () => {
            console.log(params.resumeId);

        }, []);//[] so that it will be looaded on every render

    return (
        <div>EditResume</div>
    )
}

export default EditResume