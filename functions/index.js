const admin = require('./firebase')
const functions = require("firebase-functions");

const express = require("express");

const app = express();

app.use(express.json());

const cors = require("cors");

app.use(cors());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", [
        "http://localhost:3000",
    ][0]);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post("/project", (req, res) => {
    console.log(req.body.data)
    
})

exports.api = functions.region("us-central1").https.onRequest(app);