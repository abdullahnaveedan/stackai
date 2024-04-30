import React, { useState } from 'react'
import SherableForm from './SherableForm'
import AllowedDomains from './AllowedDomains'
import UpperBarExportBuilder from './UpperBarExportBuilder';
import General from './GeneralEB';
import StylingEB from './StylingEB';

function FormEB() {
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




            <div className=' bg-white min-h-screen '>

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

                {showStates.general && <General />}

                {showStates.styling && <StylingEB />}

                {showStates.manager && (<div >hello manager </div>)}

            </div>


        </div>


    )
}

export default FormEB