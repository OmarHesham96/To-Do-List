const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

const port = process.env.PORT || 3000

var todoList = [ ]

app.get('/', (req,res) => {
    res.render('index.ejs', {todoList: todoList});
});

app.post('/newtodo', (req,res)=> {
    console.log("item submited!");
    var tasks = req.body.task;
    todoList.push(tasks);
    res.redirect('/');

});

app.post('/re', (req,res)=> {
    console.log("item removed!");
    todoList.pop();
    res.redirect('/');

});

app.get('*', (req,res) => {
    res.send('<h1>Error</h1>');
});

app.listen(port, () => {
    console.log(`Server started on` + port);
});