import React from 'react';

export default function UpperBarExportBuilder({ showStates, handleSetActive }) {
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

    return (
        <div className="grid grid-cols-2 py-2 w-full bg-gradient-to-r from-[#eb456c] to-[#922991] rounded-t-3xl">
            <div className="text-white py-4">
                <ul className="flex font-semibold p-2 px-6 justify-between rounded-xl m-3">
                    {NavBarData.map(({ name, stateKey }) => (
                        <li
                            key={stateKey}
                            className={`px-3 p-1 rounded-lg hover:bg-white ${showStates[stateKey] ? 'bg-white text-pink-500' : 'hover:text-pink-500'}`}
                        >
                            <button
                                className="flex"
                                type="button"
                                onClick={() => handleSetActive(stateKey)}
                            >
                                {name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
