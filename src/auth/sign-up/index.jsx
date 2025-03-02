import { React, useEffect, useState } from 'react'
import { SignUp } from '@clerk/clerk-react'
import Header from '@/components/custom/Header'
import Footer from '@/components/custom/Footer'

function SignUpPage() {
    const [signIn, setSignIn] = useState(false);

    useEffect(() => {
        setSignIn(true);
    }, []);

    return (
        <>
            <Header state={signIn} />
            <div className='bg-gradient-to-r from-red-200 to-yellow-200'>
                <div className='bg-[url("../../textures/food.png")] flex justify-center items-center'>
                    <div className='my-20 shadow-lg shadow-primary transition-all rounded-lg'>
                        <SignUp
                            signInForceRedirectUrl='/'
                            fallbackRedirectUrl='/'
                            signInUrl='/auth/sign-in'
                            signInFallbackRedirectUrl='/'
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SignUpPage