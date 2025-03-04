import { React, useEffect, useState } from 'react'
import { SignUp } from '@clerk/clerk-react'
import Header from '@/components/custom/Header'
import Footer from '@/components/custom/Footer'
import { ThemeContext } from '@/context/ThemeContext'
import { dark, light } from '@clerk/themes'

function SignUpPage() {
    const [signIn, setSignIn] = useState(false);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        setSignIn(true);
    }, []);

    return (
        <>
            <Header state={signIn} />
            <div className='block bg-gradient-to-r from-red-200 to-yellow-200'>
                <div className='h-screen bg-[url("../../textures/food.png")] flex justify-center items-center'>
                    <div className='my-20 shadow-lg shadow-primary transition-all rounded-lg'>
                        <SignUp
                            signInForceRedirectUrl='/'
                            fallbackRedirectUrl='/'
                            signInUrl='/auth/sign-in'
                            signInFallbackRedirectUrl='/'
                            appearance={
                                (theme === 'dark') ?
                                    {
                                        baseTheme: dark,
                                    }
                                    :
                                    {
                                        baseTheme: light,
                                    }}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SignUpPage