// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

var todosList = [
    {id:1,name:'đi chợ'},
    {id:2,name:'nấu cơm'},
    {id:3,name:'rửa bát'},
    {id:4,name:'học code tại CodersX'}
]

// https://expressjs.com/en/starter/basic-routing.html
app.get('/', (req, res) => {
  res.render('index1',{
        todos:todosList
    });
});


app.get('/todos',function(req,res){
    var q = req.query.q;
    var matchTodo = todosList.filter(function(todo){
       return todo.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    })
    res.render('index1',{
      todos:matchTodo
    })
})

// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
