import express from 'express'
import cors from 'cors'
import mongoose from "mongoose";
import HelloController
  from "./controllers/hello-controller.js"
import UserController
  from "./controllers/users/users-controller.js"
import TuitsController
  from "./controllers/tuits/tuits-controller.js";


// Connect to Windows MongoDB from WSL2 https://github.com/microsoft/WSL/issues/5486

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://172.31.0.1:27017/tuiter'
mongoose.connect(CONNECTION_STRING);
const app = express()
app.use(cors())
app.use(express.json());
TuitsController(app);
HelloController(app)
UserController(app)
app.listen(process.env.PORT || 4000);