
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(casemitra, postgres, casemitra_v1, {
    host: casemitrards.czokwaoaczpc.ap-south-1.rds.amazonaws.com,
    port: 5432,
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
