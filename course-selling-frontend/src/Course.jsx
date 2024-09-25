import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { Typography }  from "@mui/material";
import {TextField, Card, Button} from "@mui/material";
import {atom, useRecoilState, useRecoilValue, useSetRecoilState} from "recoil"

function Course(){
    const {courseId} = useParams();
   //  const [courses, setcourses] = useState([]); 
    const setcourses = useSetRecoilState(coursesState); 
   //  const courses = useRecoilValue(coursesState)    
    console.log("course")


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
    
      // const course = courses.find((value)=>{
      //    if(value.id == courseId){ 
      //       return value
      //    }
      // }) 

      // if(!course){ 
      //   return (
      //       <div>
      //           wrongid..
      //       </div>
      //   )
      // }
    
   return (
    <div style={{ marginTop:"100px", display:"flex", justifyContent:"center"}}> 
     <Coursetable courseId={courseId}></Coursetable>
     <Updatecard courseId={courseId}></Updatecard>
    </div>
   ) 
} 
 function Coursetable(props) { 

   const courses = useRecoilValue(coursesState); 

      //  const course = courses.find((value)=>{
      //    if(value.id == props.courseId){ 
      //       return value
      //    }
      // }) 

      let course = null;
      for(let i = 0; i<courses.length; ++i){ 
            if(courses[i].id == props.courseId){
                course = courses[i];
            }
      }
 
   //  if(!course){
   //     return (
   //       <div>
   //          wrongid
   //       </div>
   //     )
   //  }

      if (!course) {
         return (
            <Card style={{ margin: "10px", width: "300px", minHeight: "200px" }}>
               <Typography textAlign={"center"} variant="h5">Course not found</Typography>
               <Typography textAlign={"center"} variant="h5">maybe wrong course Id</Typography>
            </Card>
         );
      }

    
   console.log("course-table")

     return(
        <Card style={{
            margin:"10px",
            width:"300px",
            minHeight:"200px"
        }}>
            <Typography textAlign={"center"} variant="h5">{course.title}</Typography>
            <Typography textAlign={"center"} variant="subtitle1">{course.description}</Typography>
 <br />
            <Typography textAlign={"center"} variant="h4">{course.price}</Typography>
        </Card>
     ) 
}

function Updatecard(props){
   
   console.log("update-card")
     const [title, setTitle] = useState();
     const [description, setDescription] = useState();
     const [price,setPrice] = useState();
    
     const [courses, setcourses] = useRecoilState(coursesState);
    
     return (
        <div>
      
     <div style={{ display:"flex", justifyContent:"center" ,minHeight:"200px"}}>
     <Card  style={{ width:"800px",padding:"20px"}}>
    <Typography textAlign={"center"} variant="h5">UPDATE COURSE</Typography> 
     <TextField
     onChange={(e)=>{
      const val = e.target.value
       setTitle(val)
     }}
     fullWidth={true}
     id="outlined-basic"
     label="title"
     variant="outlined"
     type={"text"}/>       
      <br /> <br /> 
    <TextField
     onChange={(e)=>{
      const val = e.target.value
       setDescription(val)
     }}
     fullWidth={true}
     id="outlined-basic"
     label="description"
     variant="outlined"
     type={"text"} />
     <br /><br />
      
     <TextField
      onChange={(e)=>{
         const val = e.target.value
       setPrice(val)
     }}
     fullWidth={true}
     id="outlined-basic"
     label="Price"
     variant="outlined"
     type={"text"} />
     <br /><br />

    <Button size={"large"} variant="contained"
    onClick={()=>{
    
      fetch("http://localhost:3000/admin/courses/" + props.courseId ,{
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
            for(let i=0; i<courses.length; ++i){
                  if(courses[i].id == props.courseId){
                       Updatedcourse.push({
                         title:title,
                         description:description,
                         imageLink:"nothing",
                         published:true,
                         price:price,
                         id:props.courseId
                       })  
                  }else{
                     Updatedcourse.push(courses[i])  
                  }
            }
            setcourses(Updatedcourse)
            // alert("course updated") 
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

const coursesState = atom({
   key: 'coursesState', 
   default: ' ', 
 });