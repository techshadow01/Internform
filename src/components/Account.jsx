import React from 'react'
import Avatar from '../assets/photo1.png'
import Camera from '../assets/camera.svg'

const Account = () => {
    return (
        <div className='relative w-[375px] h-[812px] max-sm:w-screen max-sm:h-screen border-2 border-[#CBCBCB] bg-[#F7F8F9]'>
            <div className='flex items-center p-3 bg-white h-[60px] font-semibold'>Account Settings</div>
            <div className='flex gap-3  p-4'>

               {/*avatar image */}
                <div class="relative">
                    <img
                        class="w-16 h-16 rounded-full"
                        src={Avatar}
                        alt=""
                    />

                    <span
                        class="flex items-center justify-center bottom-0 left-10 absolute  w-5 h-5 rounded-full overflow-hidden bg-purple-700">

                        <img className='w-3 h-3 ' src={Camera} alt="" />
                    </span>
                </div>

             {/*name */}
                <div className='text-sm'>
                    <div className='font-semibold'>Marry Doe</div>
                    <div>Marry@gmail.com</div>
                </div>

            </div>

         {/*info */}
            <div
                className='text-[13px] p-4'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam corrupti quaerat similique modi veniam ut, dicta labore eaque suscipit officiis?
            </div>

            <div className='border border-slate-200 border-dashed'></div>

            <div className='absolute z-10 bottom-10 border w-full border-slate-200 border-dashed'></div>
        </div>
    )
}

export default Account
