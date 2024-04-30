import React, { useState } from 'react'
import { MagnifyingGlassIcon, PlayIcon, ArrowUpOnSquareIcon, RocketLaunchIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const NavBarData = [
    {
        name: " Save",
        icon: <PlayIcon className="h-7 w-7" />,

    },
    {
        name: " Run",
        icon: <PlayIcon className="h-7 w-7" />,

    }
]


function SimpleChatbot() {
    const [dropdown, setDropdown] = useState(false);
    const handleDropdown = () => {
        setDropdown((dropdown) => !dropdown)
    }



    return (

        <div className="flex">
            <div className="w-1/6 bg-slate-100 text-pink-500 min-h-screen">
                <div className="my-2">
                    <h1 className="text-2xl p-3 font-bold text-pink-600">Simple ChatBot</h1>
                </div>
                <div className="flex border mx-1 px-2 shadow-lg border-black-2 rounded-full ">
                    <input className="  focus:border-transparent focus:outline-none  p-1 bg-slate-100" type="search" placeholder=" Search nodes" name="" id="" />
                    <MagnifyingGlassIcon className="h-7 w-7" />
                </div>


                {/* scrollbar  */}
                <div className="overflow-y-scroll mt-3 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
                    {/* Your content here */}
                    <div onClick={handleDropdown} className="flex justify-between m-2 hover:border-b-2 p-1 ">
                        <h1>Input </h1>
                        <ChevronRightIcon className="w-5 h-5" />
                    </div>
                    {
                        dropdown && (<div>

                        </div>)
                    }


                </div>
            </div>


            <div className="w-full">
                <div className=" grid grid-cols-2 py-2 w-full  bg-gradient-to-r from-pink-500 to-pink-700 rounded-t-3xl">
                    <div></div>
                    <div className="text-white py-4 ">
                        <ul className="flex p-2 px-6 justify-between border rounded-xl m-3">
                            <li className="px-3 p-1 rounded-lg hover:bg-white hover:text-pink-500 "><button className="flex" type="button"> Save</button></li>
                            <li className="px-3 p-1 rounded-lg hover:bg-white hover:text-pink-500 "><button className="flex" type="button"><PlayIcon className="h-7 w-7" />Run  </button></li>
                            <li className="px-3 p-1 rounded-lg hover:bg-white hover:text-pink-500 ">
                                <button className="flex" type="button"> <ArrowUpOnSquareIcon className="h-7 w-7" />Share
                                </button>
                            </li>
                            <li className="px-3 p-1 rounded-lg hover:bg-white hover:text-pink-500 " s>
                                <button className="flex" type="button">
                                    <RocketLaunchIcon className="h-7 w-7" /> Publish</button>
                            </li>
                        </ul>

                    </div>

                </div>
                <div>
                    react flow
                </div>

            </div>
        </div>
    )
}

export default SimpleChatbot