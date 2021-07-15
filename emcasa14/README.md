# Projeto Final {Reprograma} S18

## Soluções técnicas para construção da API:

**CREATE**

POST para criar um Órão Publico:

- [ ]  post("/orgaos/registrarOrgao", controller.createrNewOrgao) - Criará uma nova Categoria de órgão Público: Ex: Junta Comercial, Prefeitura ou SEFAZ.
- [ ]  post("/orgaos/informacoes/registrarOrgao", controller.createrNewOrgao) - Criará um novo  órgão Público, com suas informações básicas.

**READ**

- [ ]  get("/orgaos/listaTodosOsOrgaos", controller.listAllOrgaos) - Retornará todas as categorias de órgãos já registrados.
- [ ]  get("/orgaos/procuraPorNome", controller.findOrgaoByName) - Buscará uma Categoria de órgão Publico já cadastrada
- [ ]  get("/orgaos/:id", controller.listOrgaoById) - Buscará uma categoria de órgão público por ID
- [ ]  get("/orgaos/informacoes/listaTodosOsOrgaos", controller.listAllOrgaos) - Retornará todos os  órgãos já registrados.
- [ ]  get("/orgaos/informacoes/procuraPorFiltro", controller.findOrgaoByName) - Buscará um determinado órgão Publico já cadastrado.
- [ ]  get("/orgaos/informacoes/:id", controller.listOrgaoById) - Buscará um órgão público por ID

**UPDATE**

- [ ]  patch("/orgaos/:id", controller.updateOrgaoPublico) - Fará alteração de uma categoria de órgão Público, buscando por id específico.
- [ ]  patch("/orgaos/informacoes/:id", controller.updateOrgaoPublico) - Fará alteração de um determinado órgão Público, buscando por id específico, dentro de uma categoria.

**DELETE**

- [ ]  delete("/orgaos/:id", controller.deleteOrgaoPublico) - Deverá deletar uma Categoria de órgão Público por id específico.
- [ ]  delete("/orgaos/informacoes/:id", controller.deleteOrgaoPublico) - Deverá deletar um determinado órgão Público, buscando por id específico, dentro de uma categoria.

### **Dados para Collection de Órgão Público**

- id: autogerada e obrigatória
- orgao: referência da categoria de órgão Público cadastrada previamente e obrigatório
- name: texto e obrigatório
- state: texto e obrigatório
- city: texto e obrigatório
- phone: texto e não obrigatório (apenas caracteres númericos)
- email: texto e não obrigatório (com formato específico)
- address: texto e obrigatório
- site: texto e obrigatório
- createdIn: data gerada automaticamente e obrigatório

### **Dados para Collection da categoria de Orgão**

- id: autogerado e obrigatório
- nome: texto e obrigatório
- createdIn: data gerada automaticamente e obrigatório

## Arquitetura

📁 infoParalegal
|
|-  📁 src
|    |
|    |- 📁 data
|         |- 📄 database.js
|
|    |- 📁 controllers
|         |- 📄 infoOrgaosController.js
|         |- 📄 orgaosController.js
|
|    |- 📁 models
|         |- 📄 infoOrgao.js
|         |- 📄 orgao.js
|
|    |- 📁 routes
|         |- 📄 infoOrgaos.routes.js
|         |- 📄 orgaos.routes.js
|

|    |- 📁 utils
|         |- 📄 utilities.js
|

|- 📄 app.js
|- 📄 .env
|- 📄 .env.example
|- 📄 .gitignore
|- 📄 package-lock.json
|- 📄 package.json
|- 📄 server.js

## Nathalia Micheloni

[github.com/NathiMick](https://github.com/NathiMick)
[linkedin.com/in/nathalia-micheloni](http://inkedin.com/in/nathalia-micheloni)