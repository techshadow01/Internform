import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

const Login = () => {

    const info = [
        {
            name: "Email Address",
            label: 'email',
            place: 'Enter email address'
        },
        {
            name: "Password",
            label: 'password',
            place: 'Enter password'
        }
    ];

    const navigate = useNavigate();
    const [isDisabled, setIsDisabled] = useState(true);

    // Function to check form validity and enable the button
    const handleInputChange = () => {
        const email = document.getElementById('email').value.includes('@');
        const password = document.getElementById('password').value;
        setIsDisabled(!(email && password));
    };


    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    navigate('/account');
                }}
                className='flex flex-col gap-4 p-4 w-[375px] h-[812px] max-sm:w-screen max-sm:h-screen border-2 border-slate-200 '>

                <div className='flex flex-col gap-4'>
                    <div className='text-2xl font-semibold'>
                        <div> Create your</div>
                        <div>  Popx Account</div>
                    </div>

                    <div className='text-[16px] text-gray-500'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>

                    {/* columns */}
                    {
                        info.map((item, index) => {
                            return <div
                                key={index}
                                class="relative">
                                <input
                                    id={item.label}
                                    type={item.label}
                                    class="block px-2.5 py-[9px] w-full text-[13px] text-gray-900 bg-transparent rounded-lg border-[1.5px] border-gray-300 appearance-none focus:outline-none "
                                    onChange={handleInputChange}
                                    placeholder={item.place}
                                    required
                                />

                                <label
                                    className='absolute bg-white text-[12px] -top-2 text-[#8E59FE] left-2 w-[95px] px-2 font-semibold'>
                                    <div>{item.name}</div>
                                </label>
                            </div>
                        })
                    }
                </div>

                {/* login button */}
                <button type='submit'
                    className={`rounded-[4px] w-full h-[46px] text-white text-[14px] font-bold cursor-pointer ${isDisabled ? 'bg-[#D1D1D1]' : 'bg-[#6C25FF]'}`}>
                    Login
                </button>
            </form >
        </>
    )
}

export default Login