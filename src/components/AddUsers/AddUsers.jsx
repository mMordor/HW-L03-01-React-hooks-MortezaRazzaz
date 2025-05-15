import React from 'react'
import { useState } from 'react'

function AddUsers({action}) {

    let [name,setName] =useState();
    let [email,setEmail] =useState();

    const nameHandel = (e) =>{
        setName(e.target.value)
    }
    const emailHandel = (e) =>{
        setEmail(e.target.value)
    }

  return (
    <div className='bg-gray-800 h-[70%] w-[70%] flex flex-col gap-5 justify-center items-center rounded-md'>
        <span>
            <label className='text-white'>Name: </label>
            <input type="text" id="name" className='bg-white rounded-md pl-2' onChange={(e)=>nameHandel(e)}/>
        </span>
        <span>
            <label className='text-white'>Email: </label>
            <input type="text" id="email" className='bg-white rounded-md pl-2' onChange={(e)=>emailHandel(e)}/>
        </span>
        <button className='bg-blue-500 w-[120px] h-[40px] text-white rounded-md cursor-pointer hover:bg-blue-700' onClick={()=>
            {
                
                const newuser = {
                    'id' : Date.now(),
                    'name' : name,
                    'email' : email
                };
            
                action(newuser)
            }
        }>Add</button>
    </div>
  )
}

export default AddUsers