const express = require("express");
const app = express();
const logger = require("morgan");
app.use(logger("dev"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true}))
const methodOverride = require("method-override") //KEEP FORGETTING THIS!!!!


const baseRouter = require("./routes/base.js")
app.use('/', baseRouter);

// app.get("/", (req, res)=>{
//     res.render('homePage')
// });

app.use(                                    //KEEP FORGETTING THIS!!!!
    methodOverride((req, res) => {          //KEEP FORGETTING TO npm i method-override!!!
      if (req.body && req.body._method) {
        const method = req.body._method;
        return method;
      }
    }),
  );

const cohortsRouter = require("./routes/cohorts.js");
app.use('/cohorts', cohortsRouter);
//now, go to routes folder, go to cohorts.js.  All the paths are now
//pre-pended with /cohorts





const PORT = 5002;
const HOST = "localhost";
app.listen(PORT, HOST, ()=>{
    console.log(`Server is listening at port ${PORT} in host ${HOST}`)
})