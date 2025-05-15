import React ,{useState} from 'react';
import UserCard from '../UsersCard/UsersCard'
import AddUsers from '../AddUsers/AddUsers'
import Axios from "axios"
import { useEffect } from 'react';

 function Container() {

    let [users,setUsers] = useState([]);
    let [isAddSelected,setIsAddSelected] = useState(false);
    const url = "https://jsonplaceholder.typicode.com/users";
    const unselectedTab = 'text-white mx-[15px] mb-[20px] text-[20px] hover:text-black cursor-pointer';
    const selectedTab = 'text-black mx-[15px] mb-[20px] text-[20px] border-b-4 ';

    try{
        if(localStorage.getItem("cart")){
            setUsers(JSON.parse(localStorage.getItem("users")))
        }
        else{
            useEffect(()=>{
                fetch(url)
                .then(res=>res.json())
                .then((data)=>{
                    setUsers(data)
                    localStorage.setItem("users",data)
                }) 
            },[])     
        }
    }catch(err){
        console.log(err)
    } 


    const removeUsersFromList = (deleted) =>{
        const changed = users.filter((item)=> item !== deleted)
        setUsers(changed);
      }
    

    const AddUserToList = (newuser) => {
        setUsers(old_list => [...old_list,newuser])
    }


  return (
    <>
        <div>
            <button className={isAddSelected ? unselectedTab : selectedTab} onClick={()=>setIsAddSelected(false)}>Users Lits</button>
            <button className={isAddSelected ? selectedTab : unselectedTab} onClick={()=>setIsAddSelected(true)}>Add User</button>
        </div>
        <div className='bg-amber-50 min-w-[600px] max-w-[800px] h-[600px] rounded-2xl   overflow-scroll flex flex-col justify-center-safe items-center'>
            {isAddSelected ? <AddUsers action={AddUserToList}/> : <UserCard items={users} action={removeUsersFromList}/>}       
        </div>
    </>
    
  )
}

export default Container