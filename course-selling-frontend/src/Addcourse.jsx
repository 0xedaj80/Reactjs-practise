import { Card, TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Typography} from "@mui/material";
import { useState } from "react";


function Addcourse(){
  const [title, setTitle] = useState();
  const [description, setDescription] = useState(); 
  const [imageurl, setimageurl] = useState();
  const [price, setPrice] = useState();


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
     onChange={(e)=>{
       setTitle(e.target.value)
     }}
     fullWidth={true}
     id="outlined-basic"
     label="title"
     variant="outlined"
     type={"text"}/>       
      <br /> <br /> 
    <TextField
     onChange={(e)=>{
       setDescription(e.target.value)
     }}
     fullWidth={true}
     id="outlined-basic"
     label="description"
     variant="outlined"
     type={"text"} />
     <br /><br />
      <TextField
       onChange={(e)=>{
       setimageurl(e.target.value)
     }}
     fullWidth={true}
     id="outlined-basic"
     label="image-url"
     variant="outlined"
     type={"text"} />
     <br /><br />
     <TextField
      onChange={(e)=>{
       setPrice(e.target.value)
     }}
     fullWidth={true}
     id="outlined-basic"
     label="Price"
     variant="outlined"
     type={"text"} />
     <br /><br />
     
    <Button size={"large"} variant="contained"
    onClick={()=>{
      fetch("http://localhost:3000/admin/courses",{
        method:"POST",
        body:JSON.stringify({
          title,
          description,
          imageLink:imageurl,
          published:true,
          price
        }),
        headers:{
          "content-type":"application/json",
          "Authorization":"Bearer " +localStorage.getItem("token")
        }
      }).then((resp)=>{
         resp.json().then((data)=>{
           alert(data.message)
         })
      })
    }} 
    
    >create course</Button>
    
   </Card>   
   
   </div>
     </div>
     
    )
}

export default Addcourse;
