const admin = require('firebase-admin');

require('dotenv').config({
    path: "./.env"
})

const config = require('./hervana-af5fd-firebase-adminsdk-a1ito-ed574cb4ce.json');

admin.initializeApp(config);

module.exports = admin;