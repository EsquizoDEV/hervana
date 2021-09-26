const admin = require('firebase-admin');

require('dotenv').config({
    path: "./.env"
})

const config = {
    "type": "service_account",
    "project_id": "hervana-af5fd",
    "private_key_id": "8a03f2c4074ebb55764f998f9d82fcedcf179521",
    "private_key": process.env.PRIVATE_KEY,
    "client_email": "firebase-adminsdk-7rads@hervana-af5fd.iam.gserviceaccount.com",
    "client_id": "105408340353582934933",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-7rads%40hervana-af5fd.iam.gserviceaccount.com"
}

admin.initializeApp(config);

module.exports = admin;