const express = require("express");

const app = express();

app.use(singleBook);   

app.get("/books", allBook("GameOfThrones"),allBook("HarryPotter"),function(req,res){
    return res.send({ route: "/books", name:req.name  });
});

function allBook(name){
   return function singleBook(req,res,next){

    if(name == "GameOfThrones") {

        req.name = name ;

        return next();
    }
    else if (name = "HarryPotter"){
       
    req.name = name;
          
    }
   }
}
function singleBook(req,res,next){

    if(req.path === "/books"){
      
         next();
    }
    else{
        return res.send("wrong Path");
    }
}
app.listen(9555, ()=>{
    console.log("listening to 9555");
})