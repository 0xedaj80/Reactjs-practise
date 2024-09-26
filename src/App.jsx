
import Signup from "./Signup.jsx"
import Appbar from "./Appbar.jsx"
import Signin from "./Signin.jsx"
import Addcourse from "./Addcourse.jsx"
import Courses from "./Courses.jsx"
import Course from "./Course.jsx"
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
          <Route path="/course/:courseId" element={<Course />}></Route>
          <Route path="/addcourse" element={<Addcourse />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
        </Routes> 
      </Router>
    </RecoilRoot>

    </div>
  )
}




export default App
