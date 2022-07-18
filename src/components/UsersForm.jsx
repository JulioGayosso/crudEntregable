import React, { useEffect, useState } from 'react';
import axios from 'axios'

const UsersForm = ({getUsers,userSelected, deselectUser}) => {


   /*  creamos un estado para cada input . y */
 /* luego lo pasamos por onchange en cada sutmit del formulario */

    const [firstName,setFirtsName] = useState("")
    const [lastName,setLastName] = useState ("")
    const [email,setEmail] = useState ("")
    const [password,setPassword]= useState("")
    const [birthday,setBirthday] = useState("")


useEffect(()=>{

   if(userSelected !== null) {
     console.log(userSelected);
     setFirtsName(userSelected.first_name);
     setLastName(userSelected.last_name);
     setEmail(userSelected.email);
     setPassword(userSelected.password);
     setBirthday(userSelected.birthday);
     
   } 
}, [userSelected]);

/*   funcion para que cuando le demos al boton submit se envien los datos y se la
  pasamos a form por medio del  onsubmit.  */

    const submit = e => {
        e.preventDefault();
        alert("hice submit");
        

       /*  funcion que crea un usuario */
        const userform = {

            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            birthday : birthday

        }
       
        if(userSelected !== null){
            //actualizando
            alert("actualizando")
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`,userform)
            .then(()=> {
             getUsers();
             reset();
             deselectUser();
             });


        } else {
           
            //creando
            axios.post("https://users-crud1.herokuapp.com/users/" ,userform)
            .then(()=> { 
                getUsers();
                reset();
            
            })

            .catch(error => console.log(error.response))

        }
        
}

const reset = ()  => {

    setFirtsName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setBirthday("");


   }

    const clear = () =>{
          
        reset();
        deselectUser();

     }

   return (

    /*  creo los inputs del formulario para luego guardar lo que el usuario ingrese */
        <form onSubmit={submit}>
           
           <h1>New User</h1>

           <div className='input-container'>
             <label htmlFor="first_name" >Name</label>
             <input 
             placeholder='First Name'
             type="text"
             id='first_name'
             value={firstName}
             onChange={e => setFirtsName(e.target.value)}

             />
           </div>

           <div className='input-container'>
             <label htmlFor="last_name">Apellido</label>
             <input 
             placeholder='Last Name'
             type="text"
             id='last_name'
             value={lastName}
             onChange={e => setLastName(e.target.value)}
             />
           </div>
            
           <div className='input-container'>
             <label htmlFor="email">Email</label>
             <input 
             placeholder='Email'
             type="text"
             id='email'
             value={email}
             onChange={e => setEmail(e.target.value)}
             />
           </div>

           <div className='input-container'>
             <label htmlFor="password">Contraseña</label>
             <input 
             placeholder='Password'
             type="password"
             id='password'
             value={password}
             onChange={e => setPassword(e.target.value)}
             />
           </div>

           <div className='input-container'>
             <label htmlFor="birthday">Fecha de Nacimiento</label>
             <input 
             
             type="date"
             id='birthday'
             value={birthday}
             onChange={e => setBirthday(e.target.value)}
             
             />
           </div>

        <button>Upload</button>
        <button type='button' onClick={clear}> clear </button>    
            
        </form>
    );
};

export default UsersForm;