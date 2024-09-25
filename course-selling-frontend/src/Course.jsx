import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { Grid2, Typography }  from "@mui/material";
import {TextField, Card, Button} from "@mui/material";
import {atom, useRecoilState, useRecoilValue, useSetRecoilState} from "recoil"

function Course(){
    const {courseId} = useParams();
    const [course, setcourses] = useRecoilState(coursesState)
  
    console.log("course")


    useEffect(()=>{
         fetch("http://localhost:3000/admin/course/" + courseId,{
            method:"GET",
            headers:{
            "Authorization":"Bearer " +localStorage.getItem("token")
         },
         }).then((resp)=>{
            resp.json().then((data)=>{
                 setcourses(data.course);
               //   console.log(data.course)
            })
         })
    },[])
    
 
    
   return (
    <div>

    <div>
   <Graytopper title={course.title}></Graytopper>
    </div>
    
    <div style={{ marginTop:"100px", display:"flex", flexWrap:"wrap", justifyContent:"center"}}>         
     <Grid2 container>
         <Grid2 item lg={8} md={12} sm={12}>
           <Updatecard courseId={courseId} ></Updatecard>
         </Grid2>
         <Grid2 item lg={4} md={12} sm={12}>            
           <Coursetable courseId={courseId}></Coursetable>
         </Grid2>

     </Grid2>
    </div>
   
    </div> 
) 
} 

function Graytopper({title}){ 
   return (
     <div style={{height:"250px",background:"#212121", width:"100vw",top:1, zIndex:"0", marginBottom:"-250px"}}>
        <div style={{display:"flex", justifyContent:"center", height:"250px", flexDirection:"column"}}>
           <div>
              <Typography style={{color:"white", fontWeight:"600"}} variant="h3" textAlign={"center"}>
                 {title}
              </Typography>
           </div>
        </div>
     </div>
   ) 
}


 function Coursetable(props) { 

   const courses = useRecoilValue(coursesState); 


    
   console.log("course-table")

     return(
      <div>
        <Card style={{
            margin:"10px",
            width:"350px",
            minHeight:"250px",
            borderRadius:20,
            marginTop:10,
            marginBottom:100,
            padding:20
         
         
        }}>
            <Typography textAlign={"center"} variant="h5">{courses.title}</Typography>
            <Typography textAlign={"center"} variant="subtitle1">{courses.description}</Typography>
 <br />
            <Typography textAlign={"center"} variant="h4">{courses.price}</Typography>
        </Card>
        </div>
     ) 
}

function Updatecard(props){
   
   console.log("update-card")
   
     const [courses, setcourses] = useRecoilState(coursesState)
     const [title, setTitle] = useState(courses.title);
     const [description, setDescription] = useState(courses.description);
     const [price,setPrice] = useState(courses.price);
    
   console.log(title);

     return (
        <div>
      
     <div style={{ display:"flex", justifyContent:"center" ,minHeight:"200px", marginTop:100, marginRight:700}}>
     <Card  style={{ width:"600px",padding:"20px", borderRadius:20}}>
    <Typography variant="h5" style={{paddingBottom:3}}>UPDATE COURSE</Typography> 
     <TextField 
     value={title}
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
    value={description}
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
     value={price}
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
            let Updatedcourse ={
                _id:courses._id,
                title:title,
                description:description,
                imageLink:"nothing",
                price
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