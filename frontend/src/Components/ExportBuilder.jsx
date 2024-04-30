import React, { useState } from 'react';
import { ArrowLeftIcon, ChatBubbleBottomCenterIcon, DocumentIcon, ClipboardIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/solid';
import FormEB from '../Components/ExportBuilderComponents/FormEB';
import WebsiteChatbotEB from '../Components/ExportBuilderComponents/WebsiteChatbotEB';
import ChatInterfaceEB from '../Components/ExportBuilderComponents/ChatInterfaceEB';
import ApiendpointEB from '../Components/ExportBuilderComponents/ApiendpointEB';
import WhatsAppEB from '../Components/ExportBuilderComponents/WhatsAppEB';



function ExportBuilder() {
    const [exportsState, setExportsState] = useState({
        websiteChatbot: true,
        form: false,
        chatInterface: false,
        whatsappSMS: false,
        apiEndpoint: false,
    });

    const SideBarMenuData = [
        {
            name: 'Website Chatbot',
            icon: <ChatBubbleBottomCenterIcon className="w-6 h-6" />,
            key: 'websiteChatbot',
            component: <WebsiteChatbotEB />
        },
        {
            name: 'Form',
            icon: <ClipboardIcon className="w-6 h-6" />,
            key: 'form',
            component: <FormEB />
        },
        {
            name: 'Chat Interface',
            icon: <DocumentIcon className="w-6 h-6" />,
            key: 'chatInterface',
            component: <ChatInterfaceEB />
        },
        {
            name: 'WhatsApp/SMS',
            icon: <DevicePhoneMobileIcon className="w-6 h-6" />,
            key: 'whatsappSMS',
            component: <WhatsAppEB />
        },
        {
            name: 'Api Endpoint',
            icon: <ChatBubbleBottomCenterIcon className="w-6 h-6" />,
            key: 'apiEndpoint',
            component: <ApiendpointEB />
        }
    ];

    function handleExportClick(exportType) {
        const updatedExports = Object.keys(exportsState).reduce((acc, type) => {
            acc[type] = type === exportType;
            return acc;
        }, {});

        setExportsState(updatedExports);
    }

    return (
        <div className="flex bg-slate-100">
            <div className="w-1/5 text-pink-600 min-h-screen">
                {/* Page heading */}
                <div className="my-5">
                    <h1 className="text-2xl p-3 font-bold text-pink-600">Simple Interface</h1>
                </div>

                {/* Side Bar Menu */}
                <div className="text-[#31286a]">
                    {SideBarMenuData.map(item => (
                        <div
                            key={item.key}
                            className={`rounded-md flex border m-1 p-2 shadow-lg border-black-2 cursor-pointer hover:bg-slate-200
                            ${exportsState[item.key] ? 'bg-gradient-to-r from-[#922991] to-[#eb456c] text-white' : ''}`}
                            onClick={() => handleExportClick(item.key)}
                        >
                            {item.icon}
                            <span className="font-semibold">{item.name}</span>
                        </div>
                    ))}
                    <div className="bottom-0 justify-end hover:text-white focus:text-white rounded-md flex border m-1 p-2 shadow-lg border-black-2 hover:bg-gradient-to-r hover:from-[#922991] hover:to-[#eb456c] focus:bg-gradient-to-r focus:from-[#922991] focus:to-[#eb456c]">
                        <ArrowLeftIcon className="h-7 w-7 py-1" />
                        <span className="font-semibold">Back to Dashboard</span>
                    </div>
                </div>
            </div>

            <div className="w-full rounded-lg m-5">
                {SideBarMenuData.map(item => (
                    exportsState[item.key] && item.component
                ))}
            </div>
        </div>
    );
}

export default ExportBuilder;

