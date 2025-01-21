import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Register = ({user2}) => {
   const[form,setForm]=useState({

    myname:user2.myname,
    email:user2.email,
    password:user2.password,
    confirm:user2.confirm,
    phone:user2.phone,
    address:user2.address

   })
   const capValue=()=>{
    console.log(form);
   }
  return (
    <div class='main'>     
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m:3, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
         <h3>STUDENT REGISTRATION FORM</h3>

       
      <div>
        <TextField
          required
          id="outlined-required"
          label="Name"
          value={form.myname}
          onChange={(e)=>{
            setForm({...form,myname:e.target.value})
          }}
        />
        <TextField
          id="outlined-email-input"
          label="email"
          type="email"
          value={form.email}
          onChange={(e)=>{
            setForm({...form,email:e.target.value})
          }}
          
        />
     </div>
     <div>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          value={form.password}
          onChange={(e)=>{
            setForm({...form,password:e.target.value})
          }}
          
        />
        <TextField
          id="outlined-password-input"
          label="Confirm Password"
          type="password"
          
          value={form.confirm}
          onChange={(e)=>{
            setForm({...form,confirm:e.target.value})
          }}
          
        />
       </div>
       <div> 
        <TextField
          id="outlined-number"
          placeholder='phone number'
        
          type="number"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          value={form.phone}
          onChange={(e)=>{
            setForm({...form,phone:e.target.value})
          }}
          
        />

            <TextField
          id="outlined-Address-input"
          label="Address"
          type="Address"
          value={form.address}
          onChange={(e)=>{
            setForm({...form,address:e.target.value})
          }}
          
        />
      
      </div>
      <Button variant="contained" onClick={capValue}>submit</Button>
    </Box>
    </div>
  )
}

export default Register