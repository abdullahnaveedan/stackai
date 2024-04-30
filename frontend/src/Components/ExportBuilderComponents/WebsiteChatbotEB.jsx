import React, { useState } from 'react';
import { PlayIcon, ChatBubbleBottomCenterIcon, ComputerDesktopIcon } from '@heroicons/react/24/solid';
import SherableForm from './SherableForm';
import UpperBarExportBuilder from './UpperBarExportBuilder';
import AllowedDomains from './AllowedDomains';
import GeneralEB from './GeneralEB';

const NavBarData = [
    {
        name: "Export Option",
        stateKey: "exportOption"
    },
    {
        name: "General",
        stateKey: "general"
    },
    {
        name: "Styling",
        stateKey: "styling"
    },
    {
        name: "Manager",
        stateKey: "manager"
    }
];



function WebsiteChatbotEB() {
    const [showStates, setShowStates] = useState({
        exportOption: true,
        general: false,
        styling: false,
        manager: false,
    });

    const handleSetActive = (activeState) => {
        const updatedStates = {
            exportOption: false,
            general: false,
            styling: false,
            manager: false,
            [activeState]: true,
        };
        setShowStates(updatedStates);
    };
    let builderName = "chatbot"

    return (
        <div className="w-full">

            {/* UpperBarExportBuilder  From  sComponents Start here its hold exportOption ,General ,Styling ,Manager */}
            <div>
                <UpperBarExportBuilder showStates={showStates} handleSetActive={handleSetActive} />
            </div>
            {/* UpperBarExportBuilder  From  sComponents end here */}



            <div className=' bg-white min-h-screen'>

                {showStates.exportOption && (
                    <div className="bg-white min-h-screen">
                        <div className="p-10 ">
                            {/* ShareableForm in sComponent */}
                            <SherableForm builderName={builderName} />
                            {/* Embedded in websites */}
                            <div className="mt-6">
                                <div className=" flex  p-2  border rounded-t-lg shadow ">
                                    <div className=" text-center py-2  ">< ComputerDesktopIcon className=" m-2 h-7 w-7 text-pink-600" /></div>
                                    <div className="">
                                        <p className=" text-pink-600 font-semibold ">Embedded in Website</p>
                                        <p>Add the chatbot code snippet into your website</p>
                                    </div>
                                </div>
                                <div className="  border rounded-b-lg shadow-lg p-2">
                                    <div className="flex justify-between">
                                        <div className=" p-2">
                                            <p
                                                className=" text-pink-600 font-semibold ">Embedded in Website
                                            </p>
                                            <p
                                                className="">
                                                Use this code snippet to deploy the chatbot in your Application</p>
                                        </div>
                                        <div className="flex m-2">
                                            <p className=" m-1"> HTML</p>

                                            <div class=" m-1 relative">
                                                <input type="checkbox" id="toggleSwitch" class="hidden" />
                                                <label for="toggleSwitch" class="flex items-center cursor-pointer">
                                                    <div class="w-12 h-7 bg-pink-500 rounded-full p-0.5">
                                                        <div id="toggleCircle" class="w-6 h-6 bg-white rounded-full shadow-md"></div>
                                                    </div>
                                                </label>
                                            </div>
                                            <p className=" m-1"> React</p>


                                        </div>
                                    </div>
                                    <div>
                                        <textarea name="" id="" cols="100" rows="5" className="w-full border shadow rounded-lg my-2 "></textarea>
                                    </div>



                                </div>

                                <div className="py-5"><p>Use this Code for embedding into wix,Squarespace ,Farmer,Webflow,Wordpress and platforms</p></div>


                            </div>
                            {/* Allowed Domains  */}
                            <AllowedDomains />


                        </div>
                    </div>
                )}

                {showStates.general && <GeneralEB />}

                {showStates.styling && (<div >hello style </div>)}

                {showStates.manager && (<div >hello manager </div>)}

            </div>


        </div>
    );
}

export default WebsiteChatbotEB;
