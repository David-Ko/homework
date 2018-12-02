const express = require("express");
const app = express();
const logger = require("morgan");
app.use(logger("dev"));
app.set("views engine", "ejs");
app.use(express.urlencoded({ extended: true}))



app.get("/", (req, res)=>{
    res.send('HI')
});





const PORT = 5002;
const HOST = "localhost";
app.listen(PORT, HOST, (error)=>{
    console.log(`Server is listening at port ${PORT} in host ${HOST}`)
})