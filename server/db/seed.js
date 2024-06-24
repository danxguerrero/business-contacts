const { contacts } = require('./seedData')
const { db } = require('./connection')
const { Contact } = require('../models')

const seed = async () => {
    try {
        await db.sync({force: true})

        const createdContacts = await Promise.all(
            contacts.map((contact) => Contact.create(contact))
        )
    } catch (error) {
        console.error(error)
    }
}

seed()
