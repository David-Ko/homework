const express = require("express");
const app = express();
const logger = require("morgan");
app.use(logger("dev"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true}))


const baseRouter = require('./routes/base.js');
app.use('/', baseRouter);
//The above two lines REPLACED the three lines below, because of router
// app.get("/", (req, res)=>{
//     res.render('homePage')
// });





const PORT = 5002;
const HOST = "localhost";
app.listen(PORT, HOST, (error)=>{
    console.log(`Server is listening at port ${PORT} in host ${HOST}`)
})