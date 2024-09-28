
import Signup from "./Signup.jsx"
import Appbar from "./Appbar.jsx"
import Signin from "./Signin.jsx"
import Addcourse from "./Addcourse.jsx"
import Courses from "./Courses.jsx"
import Course from "./Course.jsx"
import Home from "./Home.jsx"
import { Typography} from "@mui/material";
import {BrowserRouter as Router , Route, Routes}from "react-router-dom"
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';


function App() {

  return (
    <div style={{ height:"100vh",width:"100vw",
      backgroundColor:"#eeeeee" 
    }}>
      <RecoilRoot>
      <Appbar />
      <Router>
        <Routes> 
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/course/:courseId" element={<Course />}></Route>
          <Route path="/addcourse" element={<Addcourse />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="*" element={<Graytopper />}></Route>
         
        </Routes> 
      </Router>
    </RecoilRoot>

    </div>
  )
}

function Graytopper(){ 
  return (
    <div style={{height:"250px",background:"#212121", width:"100vw",top:0, zIndex:"0", marginBottom:"-250px"}}>
       <div style={{display:"flex", justifyContent:"center", height:"250px", flexDirection:"column"}}>
          <div>
             <Typography style={{color:"white", fontWeight:"600"}} variant="h3" textAlign={"center"}>
              {"page not found !"} 
             </Typography>
          </div>
       </div>
    </div>
  ) 
}




export default App
