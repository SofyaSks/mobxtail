
export function RegistartionForm({ passwordVisibility, setPasswordVisibility }) {
    return (
        <div className=''>
            <form action="" className="flex flex-col w-100 h-100">
                <input type="text" placeholder='Логин' name="" id="" className="border-2 
                border-[#6c5ce7] rounded-xl p-1 m-3 h-12
                            focus:outline-none focus:ring-1 focus:ring-[#6c5ce7]" />
                <input type="email" placeholder='Почта' name="" id="" className="border-2 
                border-[#6c5ce7] rounded-xl p-1 m-3 h-12
                            focus:outline-none focus:ring-1 focus:ring-[#6c5ce7]" />
                <input type={passwordVisibility ? 'text' : 'password'} placeholder='Пароль' name="" id=""
                    className="border-2 border-[#6c5ce7] rounded-xl p-1 m-3 h-12
                            focus:outline-none focus:ring-1 focus:ring-[#6c5ce7]" />
                <input type={passwordVisibility ? 'text' : 'password'} placeholder='Повторите пароль' name="" id=""
                    className="border-2 border-[#6c5ce7] rounded-xl p-1 m-3 h-12
                            focus:outline-none focus:ring-1 focus:ring-[#6c5ce7]" />
                <label htmlFor="" className="self-end mr-5 flex"> Показать пароль
                    <input type="checkbox" className="ml-2 appearance-none border-2 
                    border-[#6c5ce7] rounded-md w-4 h-4 mt-1.5 
                    checked:bg-[#6c5ce7] checked:border-0
                    transition duration-200 ease-in-out" onChange={(e) => {
                        setPasswordVisibility(e.target.checked)
                    }} />
                </label>
                <button type='submit'
                    className='h-13 mt-2 w-50 self-center 
                                border-2 border-[#6c5ce7] rounded-md bg-[#6c5ce7] hover:bg-[#8274ed] text-white transition  duration-500 ease-in-out hover:shadow-xl/40
                                hover:cursor-pointer'>
                    Зарегистрироваться
                </button>
            </form>
        </div>
    )
}