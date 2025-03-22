import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

const Sign = () => {

    const info = [
        {
            name: "Fullname",
            label: "name",
            place: "Name"
        },
        {
            name: "Phone number",
            label: "number",
            place: "phone number"
        },
        {
            name: "Email Address",
            label: "email",
            place: "email address"
        },
        {
            name: "Password",
            label: "password",
            place: "password"
        },
        {
            name: "Company Name",
            label: "company",
            place: "Company Name"
        }
    ]

    const navigate = useNavigate();
    const [isDisabled, setIsDisabled] = useState(true);

    // Function to check form validity and enable the button
    const handleInputChange = () => {
        const name = document.getElementById('name').value;
        const number = document.getElementById('number').value;
        const email = document.getElementById('email').value.includes('@');
        const password = document.getElementById('password').value;
        setIsDisabled(!(email && password && name && number));
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        navigate('/account');
    }


    return (
        <>
            <form
                onSubmit={handlesubmit}
                className='flex flex-col justify-between p-4 pt-[40px] w-[375px] h-[812px] max-sm:w-screen max-sm:h-screen border-2 border-[#CBCBCB] bg-[#F7F8F9]'>

                <div className='flex flex-col gap-[29px]'>
                    <div className='text-2xl font-bold'>
                        <div> Create your</div>
                        <div>  Popx Account</div>
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
                                    {...(item.name !== 'Company Name' ? { required: true } : {})}
                                />
                                <label className='absolute flex bg-[#F7F8F9] text-[13px] -top-2 text-[#8E59FE] left-2 w-[100px] pl-1 font-semibold'>
                                    <div>{item.name}</div>
                                    {item.name != "Company Name" && <div className='text-red-500'>*</div>}
                                </label>
                            </div>
                        })
                    }

                    {/* radio buttons */}
                    <div className='flex flex-col'>
                        <div className='flex gap-1'>
                            <div className='text-[13px]'>Are you an Agency</div>
                            <div className='text-red-500'>*</div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <div class="flex items-center mb-4">

                                <input id="default-radio-1" type="radio" value="yes" name="default-radio"
                                    class="w-4 h-4 accent-[#6C25FF] cursor-pointer" checked />
                                <label
                                    for="default-radio-1"
                                    class="ms-2 text-sm font-medium text-black">
                                    Yes
                                </label>

                            </div>

                            <div class="flex items-center mb-4">
                                <input
                                    id="default-radio-2"
                                    type="radio"
                                    value="no"
                                    name="default-radio"
                                    class="w-4 h-4 accent-[#6C25FF] cursor-pointer"
                                    checked
                                />

                                <label
                                    for="default-radio-2"
                                    class="ms-2 text-sm font-medium text-black">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>


                </div>

                {/* create account button */}
                <button type='submit' className={`rounded-[4px] w-full h-[46px] text-white text-[14px] font-bold cursor-pointer ${isDisabled ? 'bg-[#D1D1D1]' : 'bg-[#6C25FF]'}`}>
                    Create Account
                </button>
            </form >
        </>
    )
}

export default Sign