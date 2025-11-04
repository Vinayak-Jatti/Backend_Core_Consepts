const cookieParser = require("cookie-parser");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cookieParser());

app.listen(3000, () => {
  console.log("server started on 3000 port");
});

// const saltRounds = 10;
// const Password = "password";

// const hash = "$2b$10$1XJXOtoj7nzJ/Fjd/9ks.wC/GIO6OVJJUxbYssiLnJRy/ODPlpYO";

// app.get("/", (req, res) => {
//   res.send("home page!");
// });

// app.get("/login", (req, res) => {
//   res.send("login page");
//   bcrypt.compare(Password, hash, function (err, result) {
//     console.log(result);
//   });
// });

app.get("/", (req, res) => {
  let token = jwt.sign({ email: "demo@email.com" }, "secreat");
  res.cookie("token", token);
  res.send("done!");
});

app.get("/home", (req, res) => {
  let data = jwt.verify(req.cookies.token, "secreat");
  console.log(data);
});
