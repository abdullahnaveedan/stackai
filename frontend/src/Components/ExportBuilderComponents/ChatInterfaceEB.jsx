import React, { useState } from 'react'
import SherableForm from './SherableForm'
import AllowedDomains from './AllowedDomains'
import UpperBarExportBuilder from './UpperBarExportBuilder';
import GeneralEB from './GeneralEB';





export default function ChatInterfaceEB() {
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
    let builderName = "form"
    return (
        <div className="w-full">
            {/* UpperBarExportBuilder  From  sComponents Start here its hold exportOption ,General ,Styling ,Manager */}
            <div>
                <UpperBarExportBuilder showStates={showStates} handleSetActive={handleSetActive} />
            </div>
            {/* UpperBarExportBuilder  From  sComponents end here */}




            <div className=' bg-white min-h-screen'>

                {showStates.exportOption && (
                    <div >
                        <div className="p-10 ">
                            {/* ShareableForm in sComponent */}
                            <SherableForm builderName={builderName} />



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
    )
}
