const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
const bcrypt = require("bcryptjs");
const User = require("./models/User");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const uploadMiddleware = multer({ dest: "upload/" });
const fs = require("fs");
const post = require("./models/Post");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
app.use(cookieParser());
app.use("/upload", express.static(__dirname+"/upload"))

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
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  if (userDoc) {
    const isMatchPassword = bcrypt.compareSync(password, userDoc.password);
    if (isMatchPassword) {
      jwt.sign({ username, id: userDoc.id }, secret, (err, token) => {
        if (err) throw err;
        res.cookie("token", token).json({
          id: userDoc.id,
          username,
        });
      });
    } else {
      res.status(400).json("รหัสผ่านไม่ถูกต้อง");
    }
  } else {
    res.status(400).json("ไม่พบผู้ใช้งาน");
  }
});

// logout
app.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok");
});

// created Post
app.post("/post", uploadMiddleware.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded." });
    }
    const { originalname, path } = req.file;
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    const newPath = path + "." + ext;
    // ตรวจสอบการรับรองตัวตนผู้ใช้
    const { token } = req.cookies;
    jwt.verify(token, secret, async (err, info) => {
      if (err) {
        return res.status(401).json({ error: "Unauthorized." });
      }
      const { title, summary, content } = req.body;
      fs.renameSync(path, newPath);
      // ทำสิ่งที่คุณต้องการกับข้อมูลโพสต์ (post)
      const postDoc = await post.create({
        title,
        summary,
        content,
        cover: newPath,
        author: info.id,
      });
      return res.json(postDoc);
    });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error." });
  }
});

app.get("/posts", async (req, res) => {
  res.json(
      await post.find()
      .populate("author", ["username"])
      .sort({ createAt: -1 })
      .limit(20)
      );
})

app.get("/posts/:id", async (req, res) => {
  const { id } = req.params;
  const postDoc = await post.findById(id).populate("author", ["username"]);
  res.json(postDoc);
});


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("SERVER is running on http://localhost:" + PORT);
});
