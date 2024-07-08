// models/State.js
module.exports = (sequelize, DataTypes) => {
    const State = sequelize.define('State', {
        stateName: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        timestamps: false,
    });

    State.associate = (models) => {
        State.hasMany(models.Court, {
            foreignKey: 'stateId',
            as: 'courts'
        });
    };

    return State;
};
