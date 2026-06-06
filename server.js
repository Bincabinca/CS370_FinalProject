const express = require("express");
const app = express();

app.use(express.static("public"));

//change this if you wanna use query strings
app.use(express.urlencoded({extended:false}));

app.listen(5500, function() {
      console.log("Listening! :D");
});