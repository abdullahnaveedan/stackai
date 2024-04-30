import { DocumentIcon } from "@heroicons/react/24/solid";


export default function StylingEB() {
    return (
        <div className='p-10'>
            <div className="rounded-sm mt-5">
                <div className=" flex  p-2  border rounded-t-md outline-black ">
                    <div className=" text-center py-2  "><DocumentIcon className=" m-2 h-7 w-7 text-pink-600" /></div>
                    <div className="">
                        <p className=" text-pink-600 font-semibold ">Styling</p>
                        <p>Select the style of your chat interface</p>
                    </div>
                </div>
                <div className=" border rounded-b-md shadow-lg p-2">
                    {/* icon url  */}
                    <div className=" ">
                        <p className=" text-pink-600 p-2 font-semibold ">Icon Url</p>
                        <div className=" flex">
                            <input type="text" className="border  focus:outline-none   rounded-lg m-2 px-2 p-1 w-full" value="" />

                        </div>

                    </div>
                    {/* welcome message  */}
                    <div className=" ">
                        <p className=" text-pink-600 p-2 font-semibold ">Welcome Message</p>
                        <div className=" flex">
                            <input type="text" className="border  focus:outline-none   rounded-lg m-2 px-2 p-1 w-full" value="" placeholder="Hello!I am here to assist you!" />

                        </div>

                    </div>
                    {/* error message  */}
                    <div className=" ">
                        <p className=" text-pink-600 p-2 font-semibold ">Error Message</p>
                        <div className=" flex">
                            <input type="text" className="border  focus:outline-none   rounded-lg m-2 px-2 p-1 w-full" value="" placeholder="Unfortunately the server just had an error. Try again later or send us an email to example@company.com" />

                        </div>

                    </div>

                    {/* choose color  */}
                    <div className=" ">
                        <p className=" text-pink-600 p-2 font-semibold ">Color</p>
                        <div className=" p-1 m-1 flex">

                            <select name="" id="" className="p-1 px-3 rounded  border focus:outline-none">
                                <option value="">Choose a color</option>
                                <option value="Blue">Blue</option>
                                <option value="Red">Red</option>


                            </select>
                        </div>
                    </div>


                    {/* toggle options  */}




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


        </div>
    )

}