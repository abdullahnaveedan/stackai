import React from 'react'
import { ChatBubbleBottomCenterIcon } from '@heroicons/react/24/solid';

export default function DescriptionStylingEB() {
    return (

        <div className="rounded-sm">
            <div className=" flex  p-2  border  shadow rounded-t-md ">
                <div className=" text-center py-2  "><ChatBubbleBottomCenterIcon className=" m-2 h-7 w-7 text-pink-600" /></div>
                <div className="">
                    <p className=" text-pink-600 font-semibold ">Shareable {builderName}</p>
                    <p>Share your {builderName} through dedicated URL</p>
                </div>
            </div>
            <div className=" border rounded-b-md shadow-lg p-2">
                <p className="p-3"> Use this URL to share your {builderName} with others.Remember to setup a password if needed in the general tab</p>
                <button className=" bg-pink-600 text-white hover:bg-pink-700 rounded-md p-1 px-3 m-1 ">
                    Open {builderName}
                </button>

            </div>


        </div>
    )
}
