import React, { useState, useEffect } from 'react'


import { Cog6ToothIcon, LinkIcon } from '@heroicons/react/24/solid';

export default function GeneralEB() {
    const [name, setInput] = useState({
        inputname: "in-0",
        outputname: "out-0"
    })








    function handlenameChange(event) {
        setInput({
            ...name,
            inputname: event.target.value
        });
    }
    return (
        <div className='p-10'>
            <div className="rounded-sm mt-5">
                <div className=" flex  p-2  border rounded-t-md outline-black ">
                    <div className=" text-center py-2  "><Cog6ToothIcon className=" m-2 h-7 w-7 text-pink-600" /></div>
                    <div className="">
                        <p className=" text-pink-600 font-semibold ">Description</p>
                        <p>Basic information of your application</p>
                    </div>
                </div>
                <div className=" border rounded-b-md shadow-lg p-2">

                    <div className=" p-2">
                        <p className=" text-pink-600 font-semibold ">Interface Name</p>
                        <p>Give a name to your interface</p>
                    </div>
                    <div className=" flex">
                        <input type="text" className="border  focus:outline-none   rounded-lg m-2 px-2 p-1 w-full" value="Simple Chatbot" />

                    </div>

                    <div className="flex justify-between">
                        <div className=" p-2">
                            <p
                                className=" text-pink-600 font-semibold ">Description
                            </p>
                            <p
                                className="">
                                Describe briefly your AI application</p>
                        </div>

                    </div>
                    <div>
                        <textarea name="" id="" cols="100" rows="5" className="w-full border shadow rounded-lg my-2 "></textarea>
                    </div>
                    <div className="flex m-2">
                        <p className=" m-1"> Password for sharing (Optional)</p>

                        <div class=" m-1 relative">
                            <input type="checkbox" id="toggleSwitch" class="hidden" />
                            <label for="toggleSwitch" class="flex items-center cursor-pointer">
                                <div class="w-12 h-7 bg-pink-500 rounded-full p-0.5">
                                    <div id="toggleCircle" class="w-6 h-6 bg-white rounded-full shadow-md"></div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rounded-sm my-5">
                <div className=" flex  p-2  border  shadow rounded-t-md ">
                    <div className=" text-center py-2  "><LinkIcon className=" m-2 h-7 w-7 text-pink-600" /></div>
                    <div className="">
                        <p className=" text-pink-600 font-semibold ">Inputs and Outputs</p>
                        <p>Select the inputs and outputs of your application</p>
                    </div>
                </div>
                <div className=" grid grid-cols-2 border rounded-b-md shadow-lg p-2">
                    <div className=' flex justify-center border rounded-md m-1 text-pink-600 p-2'>
                        <table >
                            <thead className=' border-b-2 p-3'>
                                <tr>
                                    <th>Input node label</th>
                                    <th>New name (optional)</th>
                                    <th>Required field</th>
                                </tr>

                            </thead >
                            <tbody>
                                <tr className=' p-3 justify-center '>
                                    <td><div>
                                        <input className=' p-1 mx-2' type="checkbox" name="" id="" />
                                        <label htmlFor="">in-0</label>

                                    </div>
                                    </td>
                                    <td><input className=' border focus:outline-none p-1 ' type="text" /></td>
                                    <td className='flex justify-end p-1'><input className='m-1 p-1 ' type="checkbox" name="" id="" /></td>
                                </tr>

                            </tbody>



                        </table>
                    </div>
                    <div className=' flex justify-center border rounded-md m-1 text-pink-600 p-2'>
                        <table >
                            <thead className=' border-b-2 p-3'>
                                <tr>
                                    <th>Output node label</th>
                                    <th>New name (optional)</th>
                                    <th>Required field</th>
                                </tr>

                            </thead >
                            <tbody>
                                <tr className=' p-3 justify-center '>
                                    <td><div>
                                        <input className=' p-1 mx-2' type="checkbox" name="" id="" />
                                        <label htmlFor="">{name.inputname}</label>

                                    </div>
                                    </td>
                                    <td>
                                        <input onChange={handlenameChange} className=' border focus:outline-none p-1 ' type="text" /></td>
                                    <td className='flex justify-end p-1'><input className='m-1 p-1 ' type="checkbox" name="" id="" />
                                    </td>
                                </tr>

                            </tbody>



                        </table>
                    </div>

                </div>


            </div>
        </div>

    )
}
