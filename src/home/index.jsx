import React from 'react'
import Header from '@/components/custom/Header'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router'
import { BookMarked, ListStart } from 'lucide-react'
import { useUser } from '@clerk/clerk-react'
import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

function Home() {
    const { isSignedIn } = useUser();
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <div className={(theme === 'light') ? 'bg-gradient-to-r from-red-200 to-yellow-200' : 'bg-[url(home3.png)] bg-cover text-white'}>
            <Header />
            <div className={(theme === 'light') ? 'bg-[url("../textures/batthern.png")]' : ''}>
                <div className='h-screen flex justify-center items-center'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-serif text-center mb-10'>Welcome to <span className={(theme === 'light') ? 'bg-gradient-to-r from-violet-400 to-indigo-600 p-2 border rounded-xl text-white text-2xl sm:text-5xl whitespace-nowrap' : 'p-2 border-2 rounded-xl text-white text-2xl sm:text-5xl whitespace-nowrap'}>Kenshi Resumes</span> </h1>
                        <h3 className='text-center font-medium text-xs sm:text-base'>"Leverage the potential of AI to set yourself apart from the competition."</h3>
                        <Link to={isSignedIn ? '/dashboard' : '/auth/sign-in'} className='flex justify-center'>
                            <Button className={(theme === 'light') ? "my-3 w-[40%] bg-gradient-to-r from-violet-400 to-indigo-600" : 'my-3 w-[40%] bg-gradient-to-r from-slate-900 to-slate-700'}>
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