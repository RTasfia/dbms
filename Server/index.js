const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "",
        database: "farm"
    }
);

connection.connect ( error => {
    if(!!error){
        console.log("error");
    }
    else{
        console.log("connected");
    }
})

app.get("/cattle", (req,res) => {
    connection.query ("SELECT * FROM cow", (error, rows,fields)=> {
        if(!!error) {
            console.log("error in query");
        }
        else{
            console.log("successful query");
            console.log(rows);
            res.send(rows);
        }
    })
})
app.get("/goat", (req,res) => {
    connection.query ("SELECT * FROM goat", (error, rows,fields)=> {
        if(!!error) {
            console.log("error in query");
        }
        else{
            console.log("successful query");
            console.log(rows);
            res.send(rows);
        }
    })
})

app.get("/chicken", (req,res) => {
    connection.query ("SELECT * FROM chicken", (error, rows,fields)=> {
        if(!!error) {
            console.log("error in query");
        }
        else{
            console.log("successful query");
            console.log(rows);
            res.send(rows);
        }
    })
})

app.get("/duck", (req,res) => {
    connection.query ("SELECT * FROM duck", (error, rows,fields)=> {
        if(!!error) {
            console.log("error in query");
        }
        else{
            console.log("successful query");
            console.log(rows);
            res.send(rows);
        }
    })
})
app.get("/fish", (req,res) => {
    connection.query ("SELECT * FROM fishery", (error, rows,fields)=> {
        if(!!error) {
            console.log("error in query");
        }
        else{
            console.log("successful query");
            console.log(rows);
            res.send(rows);
        }
    })
})
app.listen(2800, () => console.log("listening to port 2800"));