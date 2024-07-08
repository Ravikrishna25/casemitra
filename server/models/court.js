// // models/Court.js
// module.exports = (sequelize, DataTypes) => {
//     const court = sequelize.define('Court', {
//         courtName: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         courtType: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         courtAddress: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         city: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         state: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         pincode: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         phone: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         webLink: {
//             type: DataTypes.STRING,
//             allowNull: true,
//         },
//         email: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//     }, {
//         timestamps: false,
//     });

//     return court;
// };
// models/Court.js
module.exports = (sequelize, DataTypes) => {
    const Court = sequelize.define('Court', {
        courtName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        courtType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        courtAddress: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        stateId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'States', // name of Target model
                key: 'id', // key in Target model that we're referencing
            },
            allowNull: false,
        },
        pincode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        webLink: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamps: false,
    });

    Court.associate = (models) => {
        Court.belongsTo(models.State, {
            foreignKey: 'stateId',
            as: 'state'
        });
    };

    return Court;
};
