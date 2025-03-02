import React, { useState } from 'react'
import { SignIn } from '@clerk/clerk-react'
import Header from '@/components/custom/Header'
import Footer from '@/components/custom/Footer'
import { use } from 'react';
import { useEffect } from 'react';

function SignInPage() {
    const [signIn, setSignIn] = useState(false);

    useEffect(() => {
        setSignIn(true);
    }, []);

    return (
        <>
            <Header state={signIn} />
            <div className='bg-gradient-to-r from-red-200 to-yellow-200'>
                <div className='h-screen bg-[url("../../textures/food.png")] flex justify-center items-center'>
                    <div className=' my-20 shadow-lg shadow-primary transition-all rounded-lg'>
                        <SignIn
                            fallbackRedirectUrl='/'
                            forceRedirectUrl='/'
                            signUpForceRedirectUrl='/'
                            signUpFallbackRedirectUrl='/'
                            withSignUp={true}
                        />{/*provided by clerk*/}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SignInPage