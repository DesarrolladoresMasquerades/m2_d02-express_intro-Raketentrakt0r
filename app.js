const express = require("express"); 

require("dotenv").config(); //require("dotenv/confing") las  dos son corectas

const app = express();

app.use( express.static("public") )

app.all("/", (request, response) => {
    response.sendFile(__dirname + "/views/index.html")
})

// This response to all HTTP verbs
app.all("/home", (req,res) => {
    res.sendFile(__dirname + "/views/home.html")
})

app.listen(3000, () => {
    console.log("App is listening on port 300");
})
// Build the server here
