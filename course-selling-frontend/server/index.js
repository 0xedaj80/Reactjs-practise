const express = require('express');
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user")
const cors = require("cors")

const app = express();

app.use(express.json());
app.use(cors());



app.use("/admin", adminRouter)
app.use("/users", userRouter)



mongoose.connect('mongodb+srv://ajeetgupta:ajeetgupta@cluster0.vz77r.mongodb.net/course-selling', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "course-selling" });
             
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
