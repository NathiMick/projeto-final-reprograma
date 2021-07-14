
// Retorna todas os cadastros dos órgãos
const getAll = async (req, res, schema, populate) => {
    try {
        const info = await schema.find().populate(populate)
        return res.status(200).send(info);

    } catch (error) {
        return res.status(401).json({ message: error.message })
    }
}

// Retorna um órgão pelo ID
const getById = async (req, res, schema) => {
    try {
        const info = await schema.findById(req.params.id)
        return res.status(200).send(info);

        
    } catch (error) {
        return res.status(404).json({ message: error.message })
    }
}

const createOrgao = async (req, res, schema, newOrgao, name) => {
    
    const nameOrgao = await schema.findOne({name: req.body.name})
    if(nameOrgao) {
        return res.status(409).json({error: "Oŕgão já cadastrado!"})
    }
          
    try {
        const orgao = await newOrgao.save()
        return res.status(201).send(orgao)
    }
        catch(error) {
        return res.status(406).json({message: error.message})
    }
}

const findOrgao = async (req, res, schema, populate)=> {
    try {
        const query = req.query;
        const orgao = await schema.find(query).populate(populate)
        return res.status(200).send(orgao)

    } catch(error) {
        return res.status(404).json({message: error.message})
    }
}

const deleteOrgao = async (req, res, schema) => {
    
    try {
        const orgao = await schema.findById(req.params.id)
        if(orgao == null) {
            return res.status(404).json({message: "Órgão Publico não encontrado"})
        } 
        
        await orgao.remove()
        res.status(202).json({message: "Órgão Público deletado com sucesso"})
        
    } catch(error) {
        res.status(401).json({message: error.message})
    }
}

const updateOrgao = async (req, res, schema) => {
    try {
        const orgao = await schema.findById(req.params.id);
        const updateBody = req.body

        if(orgao == null || updateBody == undefined) {
            return res.status(404).json({message: error.message});
        }

        let keyList = Object.keys(updateBody);
        keyList.forEach((key) => {
            orgao[key] = updateBody[key];
        });

        const orgaoUpdated = await orgao.save();
        res.status(200).json([{
            "message": "Órgão Publico atualizado com Sucesso",
            orgaoUpdated
        }]);

        
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }

}
  
 

module.exports = {
    getAll,
    getById,
    findOrgao,
    createOrgao,
    deleteOrgao,
    updateOrgao
}