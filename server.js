// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);

app.set("view engine", "pug");
app.set("views", "./views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set some defaults
db.defaults({ todos: [] }).write();

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => {
  res.render("index1");
});

// app.get('/todos',function(req,res){
//     var q = req.query.q;
//     var matchTodo = todosList.filter(function(todo){
//        return todo.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
//     })
//     res.render('index1',{
//       todos:matchTodo
//     })
// })
app.get('/todos', function(req,res){
    res.render('todos/index1',{
        todos:db.get('todos').value()
    });
});

app.get("/todos/create", function(req, res) {
  res.render("create");
});
app.post("/todos/create", function(req, res) {
  db.get("todos").push(req.body);
  res.redirect("/todos");
});
// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
