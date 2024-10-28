const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PDhxwYJI#U_ipWBGBd15jHaAyl_6lcVyzVbbUiZ8RLQDG_35B20k",
MONGODB: process.env.MONGODB || "mongosh "mongodb+srv://cluster0.dhr58.mongodb.net/" --apiVersion 1 --username theycallmeprofessormirza",
};
