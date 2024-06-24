const { Sequelize, DataTypes } = require('sequelize')

const db = new Sequelize ({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'business-contacts',
    password: 'business-contacts',
    database: 'business-contacts',
    logging: false,
})

module.exports = {
    db,
    DataTypes,
}