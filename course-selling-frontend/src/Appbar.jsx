import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Courses from "./Courses";


function Appbar() {
    const [userEmail, setuserEmail] = useState();


   useEffect(()=>{
     fetch("http://localhost:3000/admin/me", { 
        method:"GET",
        headers:{
           "Authorization":"Bearer " +localStorage.getItem("token")
        } 
     }).then((resp)=>{
       resp.json().then((data)=>{
        //  console.log(data)
         setuserEmail(data.username)   
       })
     }) 
  }, [])


  if(userEmail){
      return (
       <div>

        
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding:"10px",
      }}
    >
      <div>
        <Typography variant={"h5"}>COURSERA </Typography>
      </div>
      <div style={{
        display:"flex"
      }}>
        <div style={{
            marginRight:"10px"
        }}>
          <Button variant={"contained"} style={{borderRadius:"10px", backgroundColor:"black"}}>{userEmail}</Button> 
        </div>
        <div> 
          <Button variant={"contained"} style={{borderRadius:"10px"}} onClick={()=>{
            localStorage.removeItem("token") 
            window.location = "/"
          }}>logout</Button>
        </div>
      </div>
    </div>
      
      {/* <div>
        <Courses></Courses>
      </div> */}
    </div>
  );
  }


  return (
    <div>

    
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding:"10px",
      }}
    >
      <div>
        <Typography variant={"h5"}>COURSERA </Typography>
      </div>
      <div style={{
        display:"flex"
      }}>
        <div style={{
            marginRight:"10px"
        }}>
          <Button variant={"contained"} style={{borderRadius:"10px"}} onClick={()=>{
            window.location = "/signin" 
          }} >signin</Button>
        </div>
        <div>
          <Button variant={"contained"} style={{borderRadius:"10px"}} onClick={()=>{
            window.location = "/signup"
          }}>signup</Button>
        </div>
      </div>
    </div>


  </div> 
  );
}

export default Appbar;
