import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router'
import { UserButton } from '@clerk/clerk-react'
import { useUser } from '@clerk/clerk-react'

function Header() {
    const { user, isSignedIn, isLoaded } = useUser();
    return (
        <div className='p-3 px-5 flex justify-between shadow-md bg-gradient-to-r from-red-200 to-yellow-200 relative'>
            <img src="../../../logo.svg" alt="logo" width={100} height={100} />

            {
                isSignedIn ?
                    <div className='flex gap-2 items-center'>
                        <Link to={'/dashboard'}>
                            <Button variant="outline">Dashboard Button</Button>
                        </Link>
                        <UserButton />
                    </div> :
                    <Link to={'/auth/sign-in'}>    {/*from react router*/}
                        <Button className="bg-gradient-to-r from-violet-400 to-indigo-600">Get Started</Button>
                    </Link>
            }
        </div >
    )
}

export default Header