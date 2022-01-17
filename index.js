const express = require("express");
const app = express();

//Route Handler
app.get("/", (req,res)=>{
  res.send ({bye: 'Johnny Boy'});
});

//app = Express App to register this route handler with
//get = watch for incoming requests with this method
// '/' = watch for request trying to access '/'
//req = object representing the incoming requests
//res = object representing the outgoing response

//get = Get info
//post = send info
// put = update all the properties of something
//delete = Deleting something
//patch = Update one or two properties of something

const PORT = process.env.PORT || 5000;

app.listen(PORT, function(){
  console.log("Server started at port 5000");
});
