
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.Firm = require('./firm')(sequelize, Sequelize);
db.Court = require('./court')(sequelize, Sequelize);
db.LitigationCode = require('./litigationCode')(sequelize, Sequelize);
db.State = require('./state')(sequelize, Sequelize);

module.exports = db;
