import  dados from "../models/dados.js";

const {barbies} = dados;

const getAllBarbies = (req, res) => {
    let resultado = barbies;

    res.status(200).json({
        total: resultado.length,
        barbies: resultado
    });
}

const getBarbies = (req, res) => {
    let resultado = barbies;

    res.status(200).json({
        total: resultado.length,
        barbies: resultado
    });
}

const getBarbieById =(req, res) => {
    let id = parseInt(req.params.id);

    const barbie = barbies.find(b => b.id === id);

    if (!barbie) {
        return res.status(404).json({
            success: false,
            message: `Barbie com o id: ${id} não foi encontrada`
        });
    }

    res.status(200).json({
        barbie: barbie
    });
    
}

const createBarbie = (req, res) => {
    const { nome, profissao, anoLancamento} = req.body;

    if(!nome || !profissao || !anoLancamento) {
        return res.status(400).json({
            success: false,
            message: "os campos 'nome', 'profissao' e 'anoLancamento' são obrigatórios."
        });
    }
    const novaBarbie = {
        id: barbies.length + 1,
        nome,
        profissao,
        anoLancamento: parseInt(anoLancamento)
    };

    barbies.push(novaBarbie);

    res.status(201).json({
        success: true,
        message: "Barbie cadastrada com sucesso!",
        barbie: novaBarbie
    });
}
 const barbieParaRemover = barbies.find(b => b.id === id);

 if (!barbieParaRemover) {
    return res.sttus(404).json({
        success: false,
        message:`Barbie com o id: ${id} não existe`
    });
 }

 const barbiesFiltradas = barbies.filter(barbie => barbie.id !== id);
 barbies.splice(0, barbies.length, ...barbiesFiltradas);

 res.status(200).json({
    success: true,
    message: `A Barbie com o id ${id} foi removida com sucesso!`
 });

 export { getAllBarbies, getBarbieById, createBarbie, deleteBarbie };
