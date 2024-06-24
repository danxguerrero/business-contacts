const { db, DataTypes } = require("../db/connection");

const Contacts = db.define(
    'Contacts',
    {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        department: DataTypes.STRING,
        position: DataTypes.STRING,
    },
    {
        timestamps: true
    }
)

module.exports = {
    Contacts
}