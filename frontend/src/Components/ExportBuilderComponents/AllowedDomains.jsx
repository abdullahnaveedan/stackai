import React, { useState } from 'react'
import { GlobeAltIcon } from '@heroicons/react/24/outline'

export default function AllowedDomains() {
    const [allowedDomains, setAllowedDomains] = useState([])
    function handleFormChange(event) {

    }

    return (
        <div className="rounded-sm mt-5">
            <div className=" flex  p-2  border  shadow rounded-t-md ">
                <div className=" text-center py-2  "><GlobeAltIcon className=" m-2 h-7 w-7 text-pink-600" /></div>
                <div className="">
                    <p className=" text-pink-600 font-semibold ">Allowed Domains</p>
                    <p>Add the domains that can host your application</p>
                </div>
            </div>
            <div className=" border rounded-b-md shadow-lg p-2">

                <p className="p-3"> Include the domains that can host thechatbot (e.g,www.your.company.com). By default all domains are selected</p>
                <div className=" flex">
                    <input type="text" onChange={handleFormChange} className="border  focus:outline-none   rounded-lg m-2 px-2 p-1 w-full" value="New Domain" placeholder='New Domain ' />
                    <button className=" bg-pink-600 text-white hover:bg-pink-700 rounded-md p-1 px-3 my-3 m-1 ">
                        Add
                    </button>
                </div>
                <p className="p-3">Use this code for embedding into wix,  Squarespace, Framer, Webflow, Wordpress and platforms.</p>
                <button className=" bg-pink-600 text-white hover:bg-pink-700 rounded-md p-1 px-3 m-1 ">
                    All Domains
                </button>

            </div>


        </div>
    )
}
