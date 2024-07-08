// models/Court.js
module.exports = (sequelize, DataTypes) => {
    const firms = sequelize.define('Firms', {
        firmName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        firmType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        contact: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
       
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
    }, {
        timestamps: false,
    });

    return firms;
};
