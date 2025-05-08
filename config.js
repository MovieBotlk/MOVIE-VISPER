const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? 'ZRI0BQzb#AqNA8DIIx65xv1U2hFwIym1GLaoX4Wy4q6IM3_aJWNoZRI0BQzb#AqNA8DIIx65xv1U2hFwIym1GLaoX4Wy4q6IM3_aJWNoZRI0BQzb#AqNA8DIIx65xv1U2hFwIym1GLaoX4Wy4q6IM3_aJWNo' : process.env.SESSION_ID, 
PORT: process.env.PORT === undefined ? '8000' : process.env.PORT, 
SESSION_NAME: process.env.SESSION_NAME === undefined ? 'movievisper' : process.env.SESSION_NAME,  

};
