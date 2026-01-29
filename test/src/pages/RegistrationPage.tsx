import { useState } from 'react'

export function RegistrationPage() {
    const [mode, setMode] = useState('login')

    return (
        <div className="registration-page-container 
           flex flex-col items-center justify-center
            h-screen">
            <div className='border-3 border-[#6c5ce7] rounded-md '>
                <div className="grid grid-cols-2 
                h-15 w-100 ">
                    <button className='bg-[#6c5ce7] text-white hover:bg-[#8274ed] 
                    transition duration-500 ease-in-out
                    hover:cursor-pointer' 
                    onClick={() => { setMode('login') }}>Вход
                    </button>
                    <button className='bg-[#6c5ce7]  text-white hover:bg-[#8274ed] transition  duration-300 ease-in-out
                    hover:cursor-pointer' 
                    onClick={() => { setMode('registration') }}>
                        Регистрация</button>

                </div>

                {mode === 'login' &&
                    <div className=''>
                        <form action="" className="flex flex-col w-100 h-80">
                            <input type="text" placeholder='Логин' name="" id="" className="border-2 border-[#6c5ce7] rounded-md 
                            p-1 m-3 h-10 
                            focus:outline-none focus:ring-1 focus:ring-[#6c5ce7]"/>
                            <input type="password" placeholder='Пароль' name="" id="" className="border-2 border-[#6c5ce7] rounded-md 
                            p-1 m-3 h-10
                            focus:outline-none focus:ring-1 focus:ring-[#6c5ce7]" />
                            <button type='submit'
                                className='h-13 mt-2 w-50 self-center 
                                border-2 border-[#6c5ce7] rounded-md bg-[#6c5ce7] hover:bg-[#8274ed] text-white transition  duration-500 ease-in-out hover:shadow-xl/40
                                hover:cursor-pointer'>Войти</button>
                        </form>
                    </div>
                }

                {mode === 'registration' &&
                    <div className=''>
                        <form action="" className="flex flex-col w-100 h-85">
                            <input type="text" placeholder='Логин' name="" id="" className="border-2 border-[#6c5ce7] rounded-md p-1 m-3 h-10
                            focus:outline-none focus:ring-1 focus:ring-[#6c5ce7]" />
                            <input type="email" placeholder='Почта' name="" id="" className="border-2 border-[#6c5ce7] rounded-md p-1 m-3 h-10
                            focus:outline-none focus:ring-1 focus:ring-[#6c5ce7]" />
                            <input type="password" placeholder='Пароль' name="" id="" className="border-2 border-[#6c5ce7] rounded-md p-1 m-3 h-10
                            focus:outline-none focus:ring-1 focus:ring-[#6c5ce7]" />
                            <input type="password" placeholder='Повторите пароль' name="" id="" className="border-2 border-[#6c5ce7] rounded-md p-1 m-3 h-10
                            focus:outline-none focus:ring-1 focus:ring-[#6c5ce7]" />
                            <button type='submit'
                                className='h-13 mt-2 w-50 self-center 
                                border-2 border-[#6c5ce7] rounded-md bg-[#6c5ce7] hover:bg-[#8274ed] text-white transition  duration-500 ease-in-out hover:shadow-xl/40
                                hover:cursor-pointer'>
                                    Зарегистрироваться
                            </button>
                        </form>
                    </div>
                }
            </div>
        </div>
    )
}