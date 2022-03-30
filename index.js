const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const bodyParser = require("body-parser");

const corsOptions={
  origin: "*"
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const loginRouter = require("./loginroute");

const utilisateursRouter = require("./utilisateursroute");
const vetementsRouter = require("./vetementsroute");
const tempsRouter= require("./tempsroute");
const tenuesRouter= require("./tenueroute");
const styleRouter= require("./styleroute");
const { createutilisateur, updateutilisateur, removeutilisateur } = require("./utilisateursservices");
const {createvetement, updatevetement,removevetement}= require("./vetementsservices");
const {createtemps,updatetemps,removetemps}=require("./tempsservices");
const {createtenue,updatetenue,removetenue}=require("./tenueservices");
const {createstyle,updatestyle,removestyle}=require("./styleservices");
app.use(express.json());
app.use
app.use(
  express.urlencoded({
    extended: true,
  })
);


app.use("/utilisateurs", utilisateursRouter);
app.use("/vetements",vetementsRouter);
app.use("/temps",tempsRouter);
app.use("/tenue",tenuesRouter);
app.use("/style",styleRouter);
app.use("/login",loginRouter);



app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
