
import Signup from "./Signup.jsx"
import Appbar from "./Appbar.jsx"
import Signin from "./Signin.jsx"
import Addcourse from "./Addcourse.jsx"
import {BrowserRouter as Router , Route, Routes}from "react-router-dom"

function App() {

  return (
    <div style={{ height:"100vh",width:"100vw",
      backgroundColor:"#eeeeee" 
    }}>
      <Appbar />
      <Router>
        <Routes> 
          <Route path="/addcourse" element={<Addcourse />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
        </Routes> 
      </Router>
    

    </div>
  )
}




export default App
