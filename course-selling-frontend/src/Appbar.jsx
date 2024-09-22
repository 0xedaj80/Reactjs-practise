import { Button } from "@mui/material";
import { Typography } from "@mui/material";

function Appbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding:"10px",
      }}
    >
      <div>
        <Typography variant={"h5"}>COURSERA </Typography>
      </div>
      <div style={{
        display:"flex"
      }}>
        <div style={{
            marginRight:"10px"
        }}>
          <Button variant={"contained"} style={{borderRadius:"10px"}} onClick={()=>{
            window.location = "/signin" 
          }} >signin</Button>
        </div>
        <div>
          <Button variant={"contained"} style={{borderRadius:"10px"}} onClick={()=>{
            window.location = "/signup"
          }}>signup</Button>
        </div>
      </div>
    </div>
  );
}

export default Appbar;
