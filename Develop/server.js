// TODO: Dependencies 
const express = require("express");
const fs = require("fs");
const path = require("path");

const notes = require("./db/db.json");
const uuid = require("uuid");

// TODO: Handle Asynchronous Processes 



// TODO: Setting Up Server
const app = express();
var PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: Static Middleware
app.use(express.static("./Develop/public"));


// TODO: API Route | "GET" request 



// TODO: API Route | "POST" request 



// TODO: API Route | "DELETE" request 



// TODO: HTML Routes 



// TODO: Listening 