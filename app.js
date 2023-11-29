
const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");

const app = express();

const items = ["Buy Food ", "Cook Food", "Eat Food"];
const workItem = [];


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/", function(req, res){

    day = date.getDate();

  res.render("list", {
    listTitle:day,
    newListItem:items,

 });

});

app.post("/", function(req, res){

    let item = req.body.newItem;

    if(req.body.list === "Work list"){
        workItem.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }

});

app.get("/work", function(req, res){
    res.render("list", {
        listTitle:"Work list",
        newListItem:workItem
    });
});

app.get("/about", function(req, res){
    res.render("about");
});


    





app.listen(3000, function(){
    console.log("The server is running to port 3000!");
});