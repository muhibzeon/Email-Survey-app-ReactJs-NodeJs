const express = require("express");
require("./models/user");
const cookieSession = require("cookie-session");
const passport = require("passport");
const passportConfig = require("./services/passport");
const mongoose = require("mongoose");
const keys = require("./config/keys");

const app = express();



app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })

);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

mongoose.connect(keys.mongoURI);


//Route Handler

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

app.listen(PORT, function() {
  console.log("Server started at port 5000");
});

//production database connection credential
//mongodb+srv://admin-muhib:express321@cluster-emaily.wudnf.mongodb.net/emailyprodDB
