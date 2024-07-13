const dotenv = require('dotenv');
const envPath = (process.env.NODE_ENV != 'production') ? process.cwd()+"/.env.dev" : process.cwd()+"/.env";
//const envPath = (process.env.NODE_ENV != 'production') ? process.env.PWD+"/.env.dev" : process.env.PWD+"/.env";
dotenv.config({ path: envPath });
global._ = require('lodash');
global. moment = require('moment');
global. momenTz = require('moment-timezone');
global. delay = require('delay');
global. i18n = require('i18n');

module.exports = { _, moment, momenTz, delay, i18n };
