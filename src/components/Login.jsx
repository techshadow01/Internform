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
                className='flex flex-col gap-4 p-4 pt-[40px] w-[375px] h-[812px] max-sm:w-screen max-sm:h-screen border-2 border-[#CBCBCB] bg-[#F7F8F9]'>

                <div className='flex flex-col gap-[22px]'>
                    <div className='text-2xl font-bold'>
                        <div> Signin to your</div>
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
                                    class="block px-2.5 py-[9px]  w-full  text-gray-900 bg-transparent rounded-lg border-[1.5px] border-[#CBCBCB] appearance-none focus:outline-none "
                                    onChange={handleInputChange}
                                    placeholder={item.place}
                                    required
                                />

                                <label className='absolute flex bg-[#F7F8F9] text-[13px] -top-2 text-[#8E59FE] left-2 w-[100px] pl-1 font-semibold'>
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