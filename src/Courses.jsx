import { Card } from "@mui/material";
import { useEffect, useState } from "react";
import { Typography , Button} from "@mui/material";
import { red } from "@mui/material/colors";


function Courses() {
  const [courses, setcourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/admin/courses/" , {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((resp) => {
      resp.json().then((data) => {
        setcourses(data.course);
      });
    });
  }, []);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      
    >
      
      {/* {courses} */}
      {courses.map((value) => {
        return <Coursecard course={value}></Coursecard>;
      })}
    </div>
  );
}

function Coursecard(props) {
  return (
    <Card
      style={{
        margin: "10px",
        width: "300px",
        minHeight: "200px",
        padding:"10px",
        borderRadius:20
      }}
    >
      <Typography textAlign={"center"} variant="h5">
        {props.course.title}
      </Typography>
      <Typography textAlign={"center"} variant="subtitle1">
        {props.course.description}
      </Typography>
      <Typography  variant="subtitle1" style={{marginLeft:100 , color:"red"}}>
         Author: {props.course.author} </Typography>
      
      <br />
      <Typography textAlign={"center"} variant="h4">
        RS:{props.course.price}
      </Typography>

      <div style={{display:"flex", justifyContent:"center" , marginTop:"10px"}}> 
        <Button size={"large"} variant="contained" onClick={() => {
               window.location = "/course/"+ props.course._id 
        }}>
          edit
        </Button>
      </div>
    </Card>
  );
}

export default Courses;
