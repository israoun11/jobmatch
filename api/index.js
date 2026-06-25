const express=require("express");
require('dotenv').config();
const  cors=require("cors");
const connectDB=require('./config/db_Connect');
const app = express();

require("node:dns/promises").setServers(["1.1.1.1","8.8.8.8"]);

// connect to DB
connectDB();



// routes
app.get("/", (req, res) => res.send("Express on Vercel"));
app.use(express.json());
app.use(cors());
app.use("/user",require("./routes/user"))
app.use('/offre', require('./routes/offre'));
app.use('/demande', require('./routes/demande'));
app.use('/annonce', require('./routes/annonce'));

//server
const PORT=process.env.PORT;
app.listen(PORT,(err)=> err ?
console.log(err) : console.log("server is running"));