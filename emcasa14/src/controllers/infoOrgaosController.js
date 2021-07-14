const mongoose = require('mongoose');
const InformacoesOrgao = require('../models/infoOrgao');
const { getAll, getById, createOrgao, deleteOrgao ,findOrgao, updateOrgao } = require('../utils/utilities');


const listAllOrgaos = async (req, res) => {
    const populate = 'orgao';
    getAll(req, res, InformacoesOrgao, populate);
}

const listOrgaoById = async (req, res) => {
    getById(req, res, InformacoesOrgao)
}

const createrNewOrgao = async (req, res) => {

    const { name, state, city, phone, email, address, site, orgao } = req.body;

    const newOrgao = new InformacoesOrgao ({
        _id: new mongoose.Types.ObjectId(),
        name,
        state,
        city,
        phone,
        email,
        address,
        site,
        orgao
            
    });

    if(name.length == 0) {
        return res.status(400).json({message: error.message});
    }
    
    createOrgao(req, res, InformacoesOrgao, newOrgao, name)
    
}

const deleteOrgaoPublico = async (req, res) => {
    deleteOrgao(req, res, InformacoesOrgao);
}

const findOrgaoByFilter = async (req, res) => {
    const populate = 'orgao';
    findOrgao(req, res, InformacoesOrgao, populate);
}

const updateOrgaoPublico = async (req, res) => {
    updateOrgao(req, res, InformacoesOrgao);

}


module.exports = {
    listAllOrgaos,
    listOrgaoById,
    createrNewOrgao,
    deleteOrgaoPublico,
    findOrgaoByFilter,
    updateOrgaoPublico
}