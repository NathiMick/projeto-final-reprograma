const express = require('express');
const router = express.Router();

const controller = require('../controllers/infoOrgaosController');

router.get('/listaTodosOsOrgaos', controller.listAllOrgaos);
router.get('/procuraPorCidade', controller.findOrgaoByFilter);
router.post('/registrarOrgao', controller.createrNewOrgao);
router.get('/:id', controller.listAllOrgaos);
router.delete('/:id', controller.deleteOrgaoPublico);
router.patch('/:id', controller.updateOrgaoPublico);

module.exports = router