// module.exports = (sequelize, DataTypes) => {
//     const User = sequelize.define('User', {
//         username: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             unique: true
//         },
//         password: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         role: {
//             type: DataTypes.STRING,
//             defaultValue: 'user'
//         },
//         firmId: {
//             type: DataTypes.INTEGER,
//             allowNull: true,
//             references: {
//                 model: 'Firms',
//                 key: 'id'
//             }
//         }
//     });

//     User.associate = function(models) {
//         User.belongsTo(models.Firm, { foreignKey: 'firmId' });
//     };

//     return User;
// };
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.STRING,
            defaultValue: 'user'
        },
        firmId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Firms',
                key: 'id'
            }
        }
    });

    User.associate = function(models) {
        User.belongsTo(models.Firm, { foreignKey: 'firmId' });
    };

    return User;
};
