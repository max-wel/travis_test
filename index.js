const dotenv = require('dotenv');
dotenv.config();

const secret = process.env.SECRET;

const envTest = function(){
  return secret;
}
module.exports = envTest;