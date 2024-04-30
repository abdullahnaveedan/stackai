import React, { useState } from 'react'
import UpperBarExportBuilder from './UpperBarExportBuilder'
import { PlayIcon } from '@heroicons/react/24/solid';

export default function ApiendpointEB() {
    const [showStates, setShowStates] = useState({
        exportOption: true,
        general: false,
        styling: false,
        manager: false,

    })

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


    return (
        <div className='w-full'>

            {/* UpperBarExportBuilder  From  sComponents Start here its hold exportOption ,General ,Styling ,Manager */}
            <div>
                <UpperBarExportBuilder showStates={showStates} handleSetActive={handleSetActive} />
            </div>
            {/* UpperBarExportBuilder  From  sComponents end here */}


            <div className='p-10 bg-white min-h-screen'>
                {/* <div>
                    <label htmlFor=''>Choose Your Language</label>

                    <select>
                        <option value="Python">Python</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="cURL">cURL</option>
                    </select>
                </div> */}
                <div>
                    <textarea rows='10' cols='30' className=' w-full focus:outline-none border rounded-md ' disabled></textarea>
                </div>
                <div className="px-3 my-2 text-white max-w-fit hover:bg-pink-600 bg-pink-600 p-1 rounded-lg  hover:text-white "><button className="flex" type="button"><PlayIcon className="h-7 w-7" />Test  API  </button></div>

            </div>
        </div>
    )
}
