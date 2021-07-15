const express = require('express');
const cors = require('cors');
const db = require('./data/database');
const orgaosRoutes = require('./routes/orgaos.routes');
const infoOrgaosRoutes = require('./routes/infoOrgaos.routes');

const app = express();
db.connect();

app

.use(cors())
.use(express.json())
.use('/orgaos', orgaosRoutes)
.use('/orgaos/informacoes', infoOrgaosRoutes)

app.get("/", (req, resp) => {
    resp.status(200).json([{
        "mensagem": "Bem vindo(a) ao InfoParalegal"
    }])
})

module.exports = app;
