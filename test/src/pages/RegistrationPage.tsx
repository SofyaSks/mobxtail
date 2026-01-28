import { useState } from 'react'

export function RegistrationPage() {
    const [mode, setMode] = useState('login')

    return (
        <div className="registration-page-container 
            flex flex-col items-center justify-center
            h-screen">
            <div className="grid grid-cols-2 ">
                <div>
                    <label htmlFor='login'> Вход </label>
                    <input name='log-reg-radio' type="radio" id='login' checked={mode === 'login'} onChange={() => { setMode('login') }}
                        className='appearance-none' />
                </div>

                <div>
                    <label htmlFor='registration'> Регистрация </label>
                    <input name='log-reg-radio' type="radio" id='registration' checked={mode === 'registration'} onChange={() => { setMode('registration') }}
                        className='appearance-none' />
                </div>

            </div>

            {mode === 'login' &&
                <div className=''>
                    <form action="" className="grid grid-cols-[auto_1fr] grid-rows-2  
                    border-2 border-black rounded-md ">
                        <label htmlFor="" className="m-5">Логин:</label>
                        <input type="text" name="" id="" className="border p-1 m-3" />
                        <label htmlFor="" className="m-5">Пароль:</label>
                        <input type="password" name="" id="" className="border p-1 m-3" />
                    </form>
                </div>
            }

            {mode === 'registration' &&
                <div className=''>
                    <form action="" className="grid grid-cols-[auto_1fr] grid-rows-4  
                    border-2 border-black rounded-md ">
                        <label htmlFor="" className="m-5">Логин:</label>
                        <input type="text" name="" id="" className="border p-1 m-3" />
                        <label htmlFor="" className="m-5">Email:</label>
                        <input type="email" name="" id="" className="border p-1 m-3" />
                        <label htmlFor="" className="m-5">Пароль:</label>
                        <input type="password" name="" id="" className="border p-1 m-3" />
                        <label htmlFor="" className="m-5">Пароль повторно:</label>
                        <input type="password" name="" id="" className="border p-1 m-3" />
                    </form>
                </div>
            }



        </div>
    )
}