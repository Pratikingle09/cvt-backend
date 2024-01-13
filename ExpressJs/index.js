const express = require("express");
const app = express();

// for use of middleware in node js
/* you can customly made the middleware which can be certanly use for 
the adding the extra layer of protection  for implimenting the
perticular restriction 
"you can add the middle ware for the spesific method by writing it insidet the get parameter and if the middle ware are increasing you can chane them" */
//app.use(express.static('name of folder'))
/* if you want to apply middleware for all of your function the you have to use "app.use(name of the middleware)" */
app.use(express.static('public'));

// tell your app that you are setting up a view engin for the templete
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.send("<h1>Home</h1>");
});

app.get("/profile", (req, res) => {
  console.log(req.params);
  res.sendFile(__dirname+'/index.html')
});

app.get("/profile/:username", (req, res) => {
  res.render("profile", { username: `${req.params.username}` });
});

app.listen(8000);
