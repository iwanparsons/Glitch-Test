const express = require("express")
const app = express()
const path = require("path")

app.listen(3000, ()=>{
    console.log("listening 3000")
})

app.use(express.static("public"))

app.use(express.urlencoded({extended: false}))

const sessions=require('express-session')
const cookieParser=require('cookie-parser')

const threeMinutes= 3*60*1000

app.use(sessions({
    secret: "sheep",
    saveUninitialized: true,
    cookie: {maxAge: threeMinutes},
    resave: false
}))


app.get("/vehicleSearch", (request, response)=>{

})