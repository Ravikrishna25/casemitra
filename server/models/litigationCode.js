
module.exports = (sequelize, DataTypes) => {
    const litigationCode = sequelize.define('LitigationCode', {
        litigationCode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
       
    }, {
        timestamps: false,
    });

    return litigationCode;
};
