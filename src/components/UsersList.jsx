import React from 'react';

/* recibimos la props de usuarios para  utilizarla en  el mapeo */
const UsersList = ({users,selectUsers,deleteUsers }) => {
  return (
     <ul>
       <h1>Users List</h1>
       {

        /* mapeamos el arreglo de usuarios para acceder a sus propiedades y listarlas*/
         users.map(user =>(
          <li key={user.id}>

           <h3><b>Nombre:</b> {user.first_name}</h3> 
           <div><b>Apellido</b>{user.last_name}</div>
           <div><b>Email</b>{user.email}</div>
           <div><b>Fecha de Nacimiento</b>{user.birthday}</div>
           <button onClick={() =>selectUsers(user)}>Edit</button>
           <button onClick={() =>deleteUsers(user.id)}>Delete</button>
          
          </li>
          ))
        }
   </ul>
      );
    };
      
    export default UsersList;




     


    
