let produtos = [];
let id = 0;


export const getProdutos = (req, res) => {
    return res.json(produtos)
}


export const postProdutos = (req, res) => {
    const { nome, preco, categoria } = req.body;

    if (!nome || !preco || !categoria) {
        return res.status(400).json({
            erro: 'Dados inválidos. Nome, preço e categoria são campos obrigatórios!'
        });
    };

    const novoProduto = {
        id: id++,
        nome,
        preco,
        categoria
    }

    produtos.push(novoProduto);

    return res.status(201).json({
        mensagem: "Produto criado com sucesso!", novoProduto
    });
}


export const buscarProdutoPorId = (req, res) => {
    const { id } = req.params;

    const produto = produtos.find(p => p.id == id);

    if (!produto) {
        return res.status(404).json({
            mensagem: '[ERRO] Produto não encontrado!'
        });
    };

    return res.json(produto)
}


export const deletarProduto = (req, res) => {
    const { id } = req.params;

    const index = produtos.findIndex(p => p.id == id);

    if (index === -1) {
        return res.status(404).json({ erro: "[ERRO] Produto não encontrado!" })
    }

    produtos.splice(index, 1);

    return res.status(204).send()
}