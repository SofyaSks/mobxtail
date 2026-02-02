import { useState } from 'react'
import { LoginPage } from './LoginPage'
import { RegistartionPage } from './RegistrationPage'

export function AuthPage() {
    const [mode, setMode] = useState<string>('login')
    return (
        <div className="registration-page-container 
           flex flex-col items-center justify-center
            h-screen bg-[url(/clouds.jpg)] opa">
            <div className='border-3 border-[#6c5ce7] rounded-md '> {/*rounded-2xl*/}
                <div className="grid grid-cols-2 
                h-15 w-100 ">
                    <button className='bg-[#6c5ce7] text-white hover:bg-[#8274ed] 
                    transition duration-500 ease-in-out
                    hover:cursor-pointer'
                    onClick={() => { setMode('login') }}>Вход
                    </button>  {/*focus*/}
                    <button className='bg-[#6c5ce7]  text-white hover:bg-[#8274ed] 
                    transition  duration-300 ease-in-out
                    hover:cursor-pointer' 
                    onClick={() => { setMode('registration') }}>
                        Регистрация</button>
                </div>

                {mode === 'login' && <LoginPage/>}

                {mode === 'registration' && <RegistartionPage/>}
                               
            </div>
        </div>
    )
}