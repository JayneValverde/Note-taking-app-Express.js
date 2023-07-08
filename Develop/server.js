// TODO: Dependencies 
const express = require("express");
const fs = require("fs");
const path = require("path");
const util = require("util");

// Helper method for generating unique ids 
const uuid = require("uuid");
const notes = require("./db/db.json");

// TODO: Handle Asynchronous Processes 
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


// TODO: Setting Up Server
const app = express();
var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: Static Middleware
app.use(express.static("./Develop/public"));


// TODO: API Route | "GET" request | Populate the saved notes from the JSON file 
app.get('/api/notes', (req, res) => {
    readFileAsync("./db/db.json", "utf-8").then(function(data) {
        notes = [].concat(JSON.parse(data))
        res.json(notes);
    })
});

// TODO: API Route | "POST" request | Post new notes to the JSON file when entered and saved
app.post('/api/notes', (req, res) => {
    const note = req.body; 
    readFileAsync('./db/db.json', 'utf-8').then(function(data) {
        const notes = [].concat(JSON.parse(data));
        note.id = notes.length =1
        notes.push(note);
        return notes
    }).then(function(notes) {
        writeFileAsync('./db/db.json', JSON.stringify(notes)).then(function(){
            console.log("Note has been updated");
        })
        res.json(notes);
    })
});


// TODO: API Route | "DELETE" request 



// TODO: HTML Routes 
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

// If no matching route is found, default to home page
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
})

// TODO: Listening 
app.listen(PORT, () =>
    console.log("App listening on PORT " + PORT)
);