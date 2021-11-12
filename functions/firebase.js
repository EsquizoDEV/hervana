const admin = require('firebase-admin');

const config = require('./hervana-af5fd-firebase-adminsdk-a1ito-ed574cb4ce.json');

admin.initializeApp({
    credential: admin.credential.cert(config)
});

module.exports = admin;