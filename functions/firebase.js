const admin = require('firebase-admin');

const config = require('./config.json');

admin.initializeApp(config);
