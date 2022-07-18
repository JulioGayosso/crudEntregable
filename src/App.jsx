import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import UsersList from './components/UsersList'
import UsersForm from './components/UsersForm'

function App() {

 const[users,setUser]= useState([])
 const[userSelected,setUserSelected]=useState(null)

 useEffect(()=>{
   axios.get("https://users-crud1.herokuapp.com/users/")
    .then(res =>setUser(res.data))

 },[])

/*  funcion para mandar los datos del usuario */

   const getUsers = () => {
  
    axios.get("https://users-crud1.herokuapp.com/users/")
    .then(res =>setUser(res.data))

   }

   const deleteUsers = (id) => {
    alert(id)
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
     .then(()=> getUsers());
   }

   const selectUsers = user =>{
    
    setUserSelected(user);

   }


   const deselectUser = () => setUserSelected(null)


  console.log(users);



  return (
    <div className="App">
     

     {/* paso la props para ver los usuarios en userlist */}
    
    <UsersForm  getUsers={getUsers} userSelected ={userSelected}  deselectUser={deselectUser}/>
    <UsersList  users={users} selectUsers={selectUsers} deleteUsers = {deleteUsers }/>


    </div>
  )
}

export default App
