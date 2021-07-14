const mongoose = require('mongoose');
const Orgao = require('../models/orgao');
const { getAll, getById, createOrgao, deleteOrgao ,findOrgao, updateOrgao } = require('../utils/utilities');


const listAllOrgaos = async (req, res) => {
    getAll(req, res, Orgao)
}

const listOrgaoById = async (req, res) => {
    getById(req, res, Orgao)
}

const createrNewOrgao = async (req, res) => {

    const { name } = req.body;

    const newOrgao = new Orgao ({
        _id: new mongoose.Types.ObjectId(),
        name        
    });

    if(name.length == 0) {
        return res.status(400).json({message: error.message});
    }
    
    createOrgao(req, res, Orgao, newOrgao, name)
    
}

const deleteOrgaoPublico = async (req, res) => {
    deleteOrgao(req, res, Orgao);
}

const findOrgaoByName = async (req, res) => {
    findOrgao(req, res, Orgao);
}

const updateOrgaoPublico = async (req, res) => {
    updateOrgao(req, res, Orgao);

}


module.exports = {
    listAllOrgaos,
    listOrgaoById,
    createrNewOrgao,
    deleteOrgaoPublico,
    findOrgaoByName,
    updateOrgaoPublico
}