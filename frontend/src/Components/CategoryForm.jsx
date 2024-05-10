import React from 'react'

function CategoryForm() {
    const categort = localStorage.getItem("Category")
    const subcategort = localStorage.getItem("subCategory")
    const question = localStorage.getItem("question")
    const botName = localStorage.getItem("botName")
  return (
    <div className='h-[100vh] w-[100%]  m-11'>
        <div className='h-auto w-[50%] bg-slate-100 rounded-lg p-5 flex'>
            <div className=' font-[600] text-[#BF5670]  w-28 text-md border-r-[1px]  border-gray-500 '>
                
            <h1 className='my-2'>Category</h1>
                <h1 className='my-2'>SubCategory</h1>
                {/* <h1 className='my-2'>Question</h1> */}
                <h1 className='my-2'>Bot Name</h1>
            </div>
            <div className='font-[400] text-[#57636C]   text-md ml-8'>
                <p className='my-2'>{categort }</p>
                <p className='my-2'>{subcategort }</p>
                <p className='my-2'>{question }</p>
                <p className='my-2'>{botName}</p>
            </div>
            
        </div>
    </div>
  )
}

export default CategoryForm