const express = require("express")

const app = express()

require("dotenv").config()

const secret = process.env.SECRET;
const port = 8080

app.listen(port, () =>{
    console.log(`Listening on port ${port} and secret is ${secret}`)
});
