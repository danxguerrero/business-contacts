const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const { Contact } = require('./models/Contact')

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/contacts', async (req, res, next) => {
  try {
    const contacts = await Contact.findAll()
    res.send(contacts)
  } catch(error) {
    next(error)
  }
})

module.exports = app;
