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


module.exports = app;
