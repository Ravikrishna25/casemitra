require('dotenv').config();

module.exports = {
    development: {
        username: postgres,
        password: casemitra_v1,
        database: casemitra,
        host: casemitrards.czokwaoaczpc.ap-south-1.rds.amazonaws.com,
        dialect: 'postgres',
    },
    production: {
        username: postgres,
        password: casemitra_v1,
        database: casemitra,
        host: casemitrards.czokwaoaczpc.ap-south-1.rds.amazonaws.com,
        dialect: 'postgres',
    },
    // Add similar objects for test and production environments
};
