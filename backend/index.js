const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
const bcrypt = require("bcryptjs");
const User = require("./models/User");
const jwt = require("jsonwebtoken");
const app = express();

app.use(cors({credentials:true, origin:"http://localhost:5173"}));
app.use(express.json());

const MONGODB_URL = process.env.MONGODB_URL;
mongoose.connect(MONGODB_URL);

app.get("/", (req, res) => {
  res.send("<h1> ติดละ  Server run now!!!</h1>");
});
const salt = bcrypt.genSaltSync(10);

// Register
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

// login
const secret = process.env.SECRET;
app.post("/login", async (res, req) => {
  const {username,password} = req.body;
  const userDoc = await User.findOne({ username });
  const isMatchPassword = bcrypt.compareSync(password, userDoc, password);
  if (isMatchPassword) {
    jwt.sign({ username, id: userDoc }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie("token", token).json({
        id: userDoc.id,
        username,
      });
    });
  } else {
    res.status(400).json("รหัสผ่านไม่ถูกต้อง");
  }
});

// logout
app.post("/logout",(req,res)=>{
    res.cookie("token","").json("ok");
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("SERVER is running on http://localhost:" + PORT);
});
