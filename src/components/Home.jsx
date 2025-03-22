import React from 'react'
import { Link } from 'react-router'

const Home = () => {
    return (
        <div>
            <div className='flex items-end justify-center w-[375px] h-[812px] max-sm:w-screen max-sm:h-screen  border-2 border-[#CBCBCB] bg-[#F7F8F9]'>

                <div className='relative flex flex-col gap-3 w-[90%] bottom-5'>

                    <div className='text-2xl font-bold'>
                        Welcome to Popx
                    </div>

                    <div className='text-[16px] text-gray-500'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>

                    {/* sign up button */}
                    <Link to="/sign" >
                        <button className='bg-[#6C25FF] rounded-[4px] w-full h-[46px] text-white text-[14px] font-bold cursor-pointer'>
                            Create Account
                        </button>
                    </Link>

                    {/* login button */}
                    <Link to="/login">
                        <button className='bg-[#CEBAFB] rounded-[4px] w-full h-[46px] text-black text-[14px] font-bold cursor-pointer'>
                            Already Registered? Login
                        </button>
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default Home