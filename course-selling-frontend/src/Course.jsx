import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { Typography }  from "@mui/material";
import {TextField, Card, Button} from "@mui/material";

function Course(){
    const {courseId} = useParams();
    const [courses, setcourses] = useState([]); 


    useEffect(()=>{
         fetch("http://localhost:3000/admin/courses/",{
            method:"GET",
            headers:{
            "Authorization":"Bearer " +localStorage.getItem("token")
         },
         }).then((resp)=>{
            resp.json().then((data)=>{
                 setcourses(data.courses);
            })
         })
    },[])
    
      const course = courses.find((value)=>{
         if(value.id == courseId){ 
            return value
         }
      }) 

      if(!course){ 
        return (
            <div>
                wrongid..
            </div>
        )
      }
    
   return (
    <div style={{ marginTop:"100px", display:"flex", justifyContent:"center"}}> 
     <Coursetable course={course}></Coursetable>
     <Updatecard courses={courses} course={course} setcourses={setcourses}></Updatecard>
    </div>
   ) 
} 
 function Coursetable(props) {
     return(
        <Card style={{
            margin:"10px",
            width:"300px",
            minHeight:"200px"
        }}>
            <Typography textAlign={"center"} variant="h5">{props.course.title}</Typography>
            <Typography textAlign={"center"} variant="subtitle1">{props.course.description}</Typography>
 <br />
            <Typography textAlign={"center"} variant="h4">{props.course.price}</Typography>
        </Card>
     ) 
}

function Updatecard(props){
    
     const [title, setTitle] = useState();
     const [description, setDescription] = useState();
     const [price,setPrice] = useState();
    
    
     return (
        <div>
      
     <div style={{ display:"flex", justifyContent:"center" ,minHeight:"200px"}}>
     <Card  style={{ width:"800px",padding:"20px"}}>
    <Typography textAlign={"center"} variant="h5">UPDATE COURSE</Typography> 
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
    
      fetch("http://localhost:3000/admin/courses/" + props.course.id ,{
        method:"PUT",
        body:JSON.stringify({
          title:title,
          description:description,
          imageLink:"nothing",
          published:true,
          price:price
        }),
        headers:{
          "content-type":"application/json",
          "Authorization":"Bearer " +localStorage.getItem("token")
        }
      }).then((resp)=>{
         resp.json().then((data)=>{
            let Updatedcourse =[];
            for(let i=0; i<props.courses.length; ++i){
                  if(props.courses[i].id == props.course.id){
                       Updatedcourse.push({
                         title:title,
                         description:description,
                         imageLink:"nothing",
                         published:true,
                         price:price,
                         id:props.course.id
                       })  
                  }else{
                     Updatedcourse.push(props.courses[i])  
                  }
            }
            props.setcourses(Updatedcourse)
            alert("course updated") 
         })
      })
    }} 
    
    >update course</Button>
    
   </Card>   
   
   </div> 



        </div>
     ) 
}


export default Course;