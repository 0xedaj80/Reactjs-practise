
import { Card, TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Typography} from "@mui/material";


function Addcourse(){
    
    return (
       <div>

        <div style={{display:"flex",justifyContent:"center" ,paddingTop:"150px"}}>
            <Typography>
                <h1>CREATE COURSE</h1>
            </Typography> 
        </div>


     <div style={{ display:"flex", justifyContent:"center"}}>
     <Card  style={{ width:400,padding:"20px"}}>
     <TextField
     fullWidth={true}
     id="outlined-basic"
     label="title"
     variant="outlined"
     type={"text"}/>       
      <br /> <br /> 
    <TextField
     fullWidth={true}
     id="outlined-basic"
     label="description"
     variant="outlined"
     type={"text"} />
     <br /><br />
       <TextField
     fullWidth={true}
     id="outlined-basic"
     label="image-url"
     variant="outlined"
     type={"text"} />
     <br /><br />
     <TextField
     fullWidth={true}
     id="outlined-basic"
     label="Price"
     variant="outlined"
     type={"text"} />
     <br /><br />
     
    <Button size={"large"} variant="contained">create course</Button>
    



 </Card>   
   
   </div>
     </div>
     
    )
}

export default Addcourse;
