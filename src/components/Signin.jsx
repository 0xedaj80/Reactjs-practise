import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Card } from "@mui/material";
import { Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
function Signin() {
  const navigate = useNavigate()
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
      <div
        style={{
          paddingTop: "200px",
          marginBottom: "5px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography style={{border:"2px solid black",borderRadius:"10px", padding:"10px"}} variant={"h5"}>
        welcome back please signin
     </Typography> 
    </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          style={{
            width: "400px",
            padding: "20px",
            borderRadius:"20px"
          }}
        >
          <TextField
            fullWidth={true}
            id="outlined-basic"
            label="username"
            variant="outlined"
            type={"text"}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <br />
          <TextField
            fullWidth={true}
            id="outlined-basic"
            label="password"
            variant="outlined"
            type={"password"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br /> <br />
          <Button
            size={"large"}
            variant="contained"
            onClick={ async () => { 
               const response = await axios.post("http://localhost:3000/admin/login",{
                  username:email,
                  password:password 
               })
              
               const data = response.data;
               alert(data.msg)
                  localStorage.setItem("token",data.token)
                  window.location = "/"
            }}
          >
            signin
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default Signin;
