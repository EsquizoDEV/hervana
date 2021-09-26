const admin = require('./firebase')
const functions = require("firebase-functions");
const logger = require('morgan')('dev');
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

const firestore = admin.firestore();

app.post("/project", (req, res) => {
    firestore.collection("projects").add(req.body)
    .then(doc => {
        return res.status(201).send({
            "success": true,
            "message": "Proyecto registrado exitosamente"
        })

    })
    .catch(er => {
        console.error(er)
        return res.status(401).send(er)
    })
})

app.get("/all", (req, res) => {
    firestore.collection("projects").get()
    .then(query => {
        projects = {}
        query.forEach(doc => {
            projects[doc.id] = doc.data();
        })
        return res.status(200).send(projects);
    })
    .catch(er => {
        console.error(er)
        return res.status(400).send(er)
    })
})

exports.api = functions.region("us-central1").https.onRequest(app);