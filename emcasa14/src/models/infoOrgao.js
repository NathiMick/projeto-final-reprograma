const mongoose = require('mongoose');

const infoOrgaoSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    orgao: {    
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'orgao'
    },
    name: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        match: /^\s*[(]?(\d{2})[-). ]?[ ]?(\d{5})[-. ]?(\d{4})[-. ]?\s*$/,
        lowercase: true,
        required: null
    },
    email: {
        type: String,
        match: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        required: null
    },
    address: {
        type: String,
        required: true
    },
    site: {
        type: String,
        required: true
    },
    createdIn: {
        type: Date,
        required: true,
        default: new Date
    },
})

module.exports = mongoose.model('informacoes', infoOrgaoSchema);
