var express        =   require("express");
var bodyParser     =   require("body-parser");
var app            =   express();
var obj = [{fname:"kaustubh",lname:"p"},{fname:"manish",lname:"sb"}]
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',function(req,res){
  res.send(JSON.stringify(obj));
});
app.post('/login',function(req,res){
  var user_name=req.body.user;
  var password=req.body.password;
  console.log("User name = "+user_name+", password is "+password);
  res.end("yes");
});
app.listen(80,function(){
  console.log("Started on PORT 80");
})
