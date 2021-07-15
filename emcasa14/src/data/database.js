require('dotenv').config();
const mongoose = require('mongoose');
const optionEnv = process.env.DATABASE_URL || process.env.DATABASE_URL_DEV

const connect = () => {
    mongoose.connect(optionEnv, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log(`Database connected at ${optionEnv}`))
    .catch(err => console.error);
}

module.exports = { connect }