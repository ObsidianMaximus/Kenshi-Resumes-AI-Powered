import React from 'react'
import Header from '@/components/custom/Header'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router'
import { BookMarked, ListStart } from 'lucide-react'
import { useUser } from '@clerk/clerk-react'
import Footer from '@/components/custom/Footer'

function Home() {
    const { isSignedIn } = useUser();
    return (
        <div className='bg-gradient-to-r from-red-200 to-yellow-200'>
            <Header />
            <div className='bg-[url("./textures/batthern.png")]'>
                <div className='h-screen flex justify-center items-center'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-serif text-center mb-10'>Welcome to <span className='bg-gradient-to-r from-violet-400 to-indigo-600 p-2 border rounded-xl text-white text-2xl sm:text-5xl'>Kenshi Resumes</span> </h1>
                        <h3 className='text-center font-medium text-xs sm:text-base'>"Leverage the potential of AI to set yourself apart from the competition."</h3>
                        <Link to={isSignedIn ? '/dashboard' : '/auth/sign-in'} className='flex justify-center'>
                            <Button className="my-3 w-[40%] bg-gradient-to-r from-violet-400 to-indigo-600">
                                {isSignedIn ? 'Go to Dashboard' : 'Sign In / Sign Up'} {isSignedIn ? <BookMarked /> : <ListStart />}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home