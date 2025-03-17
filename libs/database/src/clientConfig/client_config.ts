import * as path from 'path';

import * as dotenv from 'dotenv';

dotenv.config(); // Load environment variables
const ClientFile = process.env.SERVER_ENV_FILE || "configuration-file-not-available.json";
console.log("Client File:", ClientFile);
const ClientInfo=require('../clientDetails/' + ClientFile)
console.log("ClientInfo ",ClientInfo); 
// const filePath = path.resolve(__dirname, '../clientDetails', ClientFile);
// console.log('Resolved Client Config File Path:', filePath);
// const ClientInfo = require(filePath);
export const ClientConfig = {
    Base:ClientInfo.Base,
    Master:ClientInfo.Master
};



