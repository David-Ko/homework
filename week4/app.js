const express = require("express");
const app = express();
const logger = require("morgan");
app.use(logger("dev"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true}))
const methodOverride = require("method-override")

const baseRouter = require("./routes/base.js")
app.use('/', baseRouter);

app.use(                                    
    methodOverride((req, res) => {
      if (req.body && req.body._method) {
        const method = req.body._method;
        return method;
      }
  }),
);

const cohortsRouter = require("./routes/cohorts.js");
app.use('/cohorts', cohortsRouter);

const PORT = 5002;
const HOST = "localhost";
app.listen(PORT, HOST, ()=>{
    console.log(`Server is listening at port ${PORT} in host ${HOST}`)
})