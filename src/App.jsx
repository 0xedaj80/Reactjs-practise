import Signup from "./components/Signup.jsx";
import Appbar from "./components/Appbar.jsx";
import Signin from "./components/Signin.jsx";
import Addcourse from "./components/Addcourse.jsx";
import Courses from "./components/Courses.jsx";
import Course from "./components/Course.jsx";
import Landing from "./components/Landing.jsx"
import { Typography } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

function App() {
  return (
    <div
      style={{ height: "100vh", width: "100wh", backgroundColor: "#eeeeee" }}
    >
      <RecoilRoot>
        <Router>
          <Appbar />
          <Routes> 
            <Route path="/" element={<Landing />}></Route>
            <Route path="/courses" element={<Courses />}></Route>
            <Route path="/course/:courseId" element={<Course />}></Route>
            <Route path="/addcourse" element={<Addcourse />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="*" element={<Graytopper />}></Route>
          </Routes>
        </Router>
      </RecoilRoot>
    </div>
  );
}

function Graytopper() {
  return (
    <div
      style={{
        height: "250px",
        background: "#212121",
        width:"100vw",
        top: 0,
        zIndex: "0",
        marginBottom: "-250px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "250px",
          flexDirection: "column",
        }}
      >
        <div>
          <Typography
            style={{ color: "white", fontWeight: "600" }}
            variant="h3"
            textAlign={"center"}
          >
            {"page not found !"}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default App;
