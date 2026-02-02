import { useState } from 'react'
import { LoginForm } from '../components/LoginForm'
import { RegistartionForm } from '../components/RegistrationForm'

export function AuthPage() {
    const [mode, setMode] = useState<string>('login')
    return (
<div className="registration-page-container 
    flex flex-col items-center justify-center
    h-screen bg-[url(/clouds.jpg)] bg-cover bg-center">
    
    <div className='outline-3 outline-[#6c5ce7] rounded-3xl'> {/* Заменили border на outline */}
        <div className="grid grid-cols-2 h-15 w-full rounded-t-2xl overflow-hidden"> {/* Скругление только сверху */}
            <button className='bg-[#6c5ce7] text-white hover:bg-[#8274ed] 
                transition duration-500 ease-in-out
                hover:cursor-pointer h-full' 
                onClick={() => { setMode('login') }}>
                Вход
            </button>
            <button className='bg-[#6c5ce7] text-white hover:bg-[#8274ed] 
                transition duration-300 ease-in-out
                hover:cursor-pointer h-full' 
                onClick={() => { setMode('registration') }}>
                Регистрация
            </button>
        </div>

        {mode === 'login' && <LoginForm/>}
        {mode === 'registration' && <RegistartionForm/>}
                               
    </div>
</div>
    )
}