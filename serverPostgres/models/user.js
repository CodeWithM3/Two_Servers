module.exports =(sequelize, DataTypes)=>{
    const user = sequelize.define('user',{
        firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    });
    return user;
};