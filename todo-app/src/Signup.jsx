import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Card } from '@mui/material';
import { Typography } from '@mui/material';


function Signup(){
    return (
  <div>

  <center>
    <div style={{
        paddingTop:"200px",
        marginBottom:"5px"
    }}>
     <Typography variant={"h6"}>
        welcome back please signup
     </Typography> 
    </div>
  </center>
  
  <center>   
  <Card  style={{
    width:"400px",
    padding:"20px"

  }}>

    <TextField
     fullWidth={true}
     id="outlined-basic"
     label="username"
     variant="outlined"
     type={"text"} />
    <br /><br />
    <TextField 
    fullWidth={true} 
    id="outlined-basic"
    label="password" 
    variant="outlined" 
    type={"password"}/>
    <br /> <br /> 
    <Button size={"large"} variant="contained">signup</Button>
    </Card>
    </center> 
    
   </div>
   ) 
} 


export default Signup;