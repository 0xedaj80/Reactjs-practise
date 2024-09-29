import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Courses from "./Courses";
import axios from "axios";
import {useNavigate} from "react-router-dom"

function Appbar() {
    const navigate = useNavigate()
    const [userEmail, setuserEmail] = useState();


   useEffect(  ()=>{
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/admin/me", {
          headers: {
            "Authorization": "Bearer " + localStorage.getItem("token"),
          },
        });
        setuserEmail(response.data.username); // Update state with user email
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    // Call the async function
    fetchUserData();


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
      <div style={{cursor:"pointer"}} onClick={()=>{
         navigate("/")
      }}>
        <Typography variant={"h5"}>COURSERA </Typography>
      </div>
      <div style={{
        display:"flex"
      }}>
        <div style={{
            marginRight:"10px"
        }}>
          <Button variant={"contained"} style={{borderRadius:"10px", backgroundColor:"#d56c56"}}>{userEmail}</Button> 
        </div>
        <div style={{
            marginRight:"10px"
        }}>
          <Button variant={"contained"} style={{borderRadius:"10px", backgroundColor:"black"}} onClick={()=>{
             navigate("/addcourse")
          }}>add course</Button> 
        </div>
        <div style={{
            marginRight:"10px"
        }}>
          <Button variant={"contained"} style={{borderRadius:"10px", backgroundColor:"black"}}  onClick={()=>{
               navigate("/courses")
          }} >courses</Button> 
        </div>
        <div> 
          <Button variant={"contained"} style={{borderRadius:"10px", backgroundColor:"red"}} onClick={()=>{
            localStorage.removeItem("token") 
            // window.location = "/"
            setuserEmail(null)
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
            navigate("/signin") 
          }} >signin</Button>
        </div>
        <div>
          <Button variant={"contained"} style={{borderRadius:"10px"}} onClick={()=>{
            navigate("/signup")
          }}>signup</Button>
        </div>
      </div>
    </div>


  </div> 
  );
}

export default Appbar;
