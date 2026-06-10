const express = require("express");
const app = express();
const router = express.Router();

app.use(express.static("public"));

//Set to true to use query strings
app.use(express.urlencoded({extended:true}));

// API route for contact form submission
app.use("/api/contact", require("./routes/contact")); //disabled for testing - was causing crashes

router.post("/", (req, res) => {
      const {name, email, message} = req.body;
      console.log("Form submitted:");
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Message:", message);
      res.send("Message sent.");
});

module.exports = router;

app.listen(5500, function() {
      console.log("Listening! :D");
});