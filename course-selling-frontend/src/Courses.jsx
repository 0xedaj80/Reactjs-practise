import { Card } from "@mui/material";
import { useEffect, useState } from "react";
import  {Typography} from "@mui/material";

function Courses() {
   const [courses, setcourses] = useState([])
   
   useEffect(()=>{
     fetch("http://localhost:3000/admin/courses/",{
         method:"GET",
         headers:{
            "Authorization":"Bearer " +localStorage.getItem("token")
         }
     }).then((resp)=>{
         resp.json().then((data)=>{
             setcourses(data.courses)
         })
     })
   },[])
    
   return (
    <div style={{display:"flex", flexWrap:"wrap",justifyContent:"center"}}>
        {/* {courses} */}
      {courses.map((value)=>{
        return(
        <Coursecard course={value} ></Coursecard>
        )
      })}
    </div>
   )
}

 function Coursecard(props) {
     return(
        <Card style={{
            margin:"10px",
            width:"300px",
            minHeight:"200px"
        }}>
            <Typography textAlign={"center"} variant="h5">{props.course.title}</Typography>
            <Typography textAlign={"center"} variant="subtitle1">{props.course.description}</Typography>
 <br />     
            <Typography textAlign={"center"} variant="h4">RS:{props.course.price}</Typography>
        </Card>
     ) 
}

export default Courses;