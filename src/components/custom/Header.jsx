import React, { useEffect } from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router'
import { UserButton } from '@clerk/clerk-react'
import { useUser } from '@clerk/clerk-react'
import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'

function Header({ state }) {
    const { user, isSignedIn, isLoaded } = useUser();
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
        console.log('Theme:', theme)
    }, [theme]);

    const handleThemeChange = () => {
        if (theme === 'dark')
            setTheme('light');
        else
            setTheme('dark');
    }

    return (
        <div className={(theme === 'light') ? 'bg-gradient-to-r from-red-200 to-yellow-200 relative' : 'bg-[#000]'}>
            <div className={(theme === 'light') ? 'bg-[url("../../textures/subtle-zebra-3d.png")] p-3 px-5 flex justify-between shadow-md' : 'p-3 px-5 flex justify-between shadow-lg shadow-[rgba(0,191,255,0.8)]'}>
                <img src="../../../logo2.svg" alt="logo" width={100} height={100} />

                {
                    isSignedIn ?
                        <div className='flex gap-2 items-center'>
                            <Button className={(theme === 'dark') ? "text-black" : ""} variant="outline" onClick={handleThemeChange}>Click to change theme</Button>
                            <Link to={'/dashboard'}>
                                <Button variant="outline">Dashboard Button</Button>
                            </Link>
                            <UserButton />
                        </div> :
                        <Link to={state ? '/' : '/auth/sign-in'}>    {/*from react router*/}
                            <Button className="bg-gradient-to-r from-violet-400 to-indigo-600">{state ? 'Go back to Home' : 'Get Started'}</Button>
                        </Link>
                }
            </div >
        </div>
    )
}

export default Header