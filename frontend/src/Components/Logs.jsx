const Logs=()=>{

    const tableData =  [
        {
            create: "just Now",
            status: "Success",
            input : "How is AI tranforming the ecommerce industry?",
            output : "AI is tranforming the ecommerce industry in sever..." ,
            letency : "9.66s" ,
            token : "390"
        },
        {
            create: "just Now",
            status: "Success",
            input : "How is AI tranforming the ecommerce industry?",
            output : "AI is tranforming the ecommerce industry in sever..." ,
            letency : "9.66s" ,
            token : "390"
        },
        {
            create: "just Now",
            status: "Success",
            input : "How is AI tranforming the ecommerce industry?",
            output : "AI is tranforming the ecommerce industry in sever..." ,
            letency : "9.66s" ,
            token : "390"
        },
        {
            create: "just Now",
            status: "Success",
            input : "How is AI tranforming the ecommerce industry?",
            output : "AI is tranforming the ecommerce industry in sever..." ,
            letency : "9.66s" ,
            token : "390"
        },
        {
            create: "just Now",
            status: "Success",
            input : "How is AI tranforming the ecommerce industry?",
            output : "AI is tranforming the ecommerce industry in sever..." ,
            letency : "9.66s" ,
            token : "390"
        },
        {
            create: "just Now",
            status: "Success",
            input : "How is AI tranforming the ecommerce industry?",
            output : "AI is tranforming the ecommerce industry in sever..." ,
            letency : "9.66s" ,
            token : "390"
        },
        {
            create: "just Now",
            status: "Success",
            input : "How is AI tranforming the ecommerce industry?",
            output : "AI is tranforming the ecommerce industry in sever..." ,
            letency : "9.66s" ,
            token : "390"
        },
        {
            create: "just Now",
            status: "Success",
            input : "How is AI tranforming the ecommerce industry?",
            output : "AI is tranforming the ecommerce industry in sever..." ,
            letency : "9.66s" ,
            token : "390"
        },
        {
            create: "just Now",
            status: "Success",
            input : "How is AI tranforming the ecommerce industry?",
            output : "AI is tranforming the ecommerce industry in sever..." ,
            letency : "9.66s" ,
            token : "390"
        },
    ]
  return (
    <div className='min-h-[600px] w-[100%]'>
        <div className='mx-8'>
            <h2 className='text-xl text-[#BF5670] font-[600] mt-5'>Logs</h2>
            <p className='text-[#57636C] text-sm font-[400] mt-1'>Each row corresponds to a single flow run.</p>
            <div className='w-[100%] h-[350px] shadow-custom rounded-lg mt-4 p-2 overflow-auto '>
                <table className='w-full text-[#57636C] font-[400] text-sm'>
                    <tr>
                        <td>Created</td>
                        <td>Status</td>
                        <td>Input(s)</td>
                        <td>Output(s)</td>
                        <td>Latency</td>
                        <td>Tokens Used</td>
                    </tr>
                        {
                            tableData.map((data)=>(
                                <>
                                <tr>
                                <td className='py-4'>{data.create}</td>
                                <td ><span className='bg-[#BF5670] rounded-[5px] text-white font-[600] p-2'>{data.status}</span></td>
                                <td>{data.input}</td>
                                <td>{data.output}</td>
                                <td>{data.letency}</td>
                                <td>{data.token}</td>
                                </tr>
                                </>
                            ))
                        }
                </table>
            </div>
        </div>
    </div>
  )
}
export default Logs;