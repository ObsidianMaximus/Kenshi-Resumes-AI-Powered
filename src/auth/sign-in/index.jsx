import React from 'react'
import { SignIn } from '@clerk/clerk-react'

function SignInPage() {
    return (
        <div className='flex justify-center my-20 items-center'>
            <SignIn />{/*provided by clerk*/}
        </div>
    )
}

export default SignInPage