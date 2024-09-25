const express = require("express");
const { authenticateJwt, generateJwt } = require("../middleware/auth");
const {User,Course} = require("../db/index")



const router = express.Router();




// User routes
router.post('/signup', async (req, res) => {

    const user = req.body;
    const exist_user = await User.findOne({username:user.username}); 
    if(exist_user){ 
      res.status(401); 
    }else{  
       const newuser = new User(user); 
       await newuser.save() 
       let token = generateJwt(user);
       res.json({msg:"user created successfully", token})          
    }
    
});

router.post('/login',async (req, res) => { 
    const {username, password } = req.headers;
    
    const user = await User.findOne({username,password})
    
    if(user){ 
         const token = generateJwt(user);
         res.json({msg:"user logged in successfully", token}) 
    }else{ 
         res.sendStatus(404).json({msg:"user authentication failed "});
    }
  
});

router.get('/courses', authenticateJwt, async (req, res) => {
        const course = await Course.find({published:true});
        res.json({course}) 
});

router.post('/courses/:courseId',authenticateJwt, async (req, res) => {

        const courseId = req.params.courseId;
        
        const course = await Course.findById(courseId)
        if(course){ 
           const user = await User.findOne({username:req.user.username})
          // console.log(course);
          // console.log(user);
           if(user){ 
               user.purchasedCourses.push(course);
               await user.save();
              // console.log(user)
              res.json({msg:"course purchased successfully"})
           }else{ 
            res.json({msg:"user not found "})
           } 
        }else{ 
          res.status(404).json({msg:"course not found or not available"});  
        } 
});

router.get('/purchasedCourses', authenticateJwt, async (req, res) => {
    const user = User.findOne({username:req.user.username})
    if(user){ 
     res.json({purchasedcourses:user.purchasedCourses || []})
    }else{ 
       res.status(404).json({msg:"user not found"});
    }   

});


module.exports = router