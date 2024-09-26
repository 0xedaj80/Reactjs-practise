const jwt = require("jsonwebtoken")



const secretkey = "abhaypatel"

const generateJwt = (user)=>{
     const payload = {username:user.username};
     return jwt.sign(payload, secretkey, {expiresIn:"1h"}) 
    
}

const authenticateJwt = (req,res,next)=>{
    const authtoken = req.headers.authorization;

    if(authtoken){
       const token = authtoken.split(' ')[1];
       
       jwt.verify(token, secretkey,(err, user) =>{
           if(err){ 
              return res.status(403).json({msg:"auth failed"})
           } 
           req.user = user;
           console.log(user)
           next(); 
       });
    }else{ 
         res.status(403).json({msg:"authentication failed"})
    }
     
}

module.exports = {
     generateJwt,
     authenticateJwt,
     secretkey
}