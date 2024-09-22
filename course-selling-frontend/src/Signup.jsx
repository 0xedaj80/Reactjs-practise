import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Card } from '@mui/material';
import { Typography } from '@mui/material';
import { useState } from 'react';


function Signup(){
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();

    return ( 
  <div>

  
    <div style={{
        paddingTop:"200px",
        marginBottom:"5px",
        display:"flex",
        justifyContent:"center"
    }}>
     <Typography variant={"h6"}>
        welcome back please signup
     </Typography> 
    </div>
  
  
  <div style={{ display:"flex", justifyContent:"center"}}> 
  <Card  style={{
    width:"400px",
    padding:"20px"

  }}>

    <TextField 
     fullWidth={true}
     label="username"
     variant="outlined"
     type={"text"}  
     onChange={(e)=>{
      setEmail(e.target.value)
     }} 
     />
    <br /><br />
    <TextField 
    fullWidth={true} 
    label="password" 
    variant="outlined" 
    type={"password"}
     onChange={(e)=>{
      setPassword(e.target.value)
     }} 
    />
    <br /> <br /> 
    <Button size={"large"} variant="contained" onClick={()=>{
         fetch("http://localhost:3000/admin/signup",{
                 method:"POST",
                 body:JSON.stringify({
                  username:email,
                  password:password
                }),
                headers:{
                  "content-type":"application/json"
                }
         }).then((resp)=>{
           resp.json().then((data)=>{
            localStorage.setItem("token",data.token)
           })
         })   

    }}>signup</Button>
    </Card>
    </div>
    
   </div>
   ) 
} 


export default Signup;