
import React from 'react'

function UserCard({items,action}) {

  

  return (
    < >
        {items.map((p) => (
            <div key={p.id} className="bg-[#a09f95] w-[350px] my-2 rounded-[8px] flex justify-between items-center px-3 ">
              <div>
              <h1 key={p.name} className='text-[20px] font-bold'>{p.name}</h1>
              <p key={p.email}>{p.email}</p>
              </div>
              <button className='bg-blue-500 w-[90px] h-[40px] text-amber-50 rounded-md hover:bg-blue-700 cursor-pointer' onClick={() => action(p)}>delete</button>
            </div>
        ))}
    </>
  )
}

export default UserCard