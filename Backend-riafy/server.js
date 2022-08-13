const express = require('express');
const app = express();
const colors = require('colors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');




const ConnectDB = require('./config/DbConnect');
const user = require("./routers/userRouter")


// cofigration ENV
dotenv.config()

// colors enable mode
colors.enable()

// db connection
ConnectDB()

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json())
app.use(bodyParser.json())
app.use(cors({
    origin: '*',
    credentials:true,
    optionsSuccessStatus: 200,
}))

app.use("/api", user)


//static folder path
app.use(express.static(path.resolve(__dirname, "public")));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../front-end-riafy/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'front-end-riafy', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}
const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log("******************************".red);
    console.log("Your server running on the port ".green + PORT + "=====".green);
    console.log("******************************".red);

})