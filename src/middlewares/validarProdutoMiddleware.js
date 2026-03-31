export const validarProduto = (req, res, next) => {
    const { nome, preco, categoria } = req.body;

    if (!nome) {
        return res.status(400).json({
            erro: '[ERRO] O nome do produto é obrigatório!'
        });
    };

    if (preco == null) {
        return res.status(400).json({
            erro: '[ERRO] O preço do produto é obrigatório!'
        });
    };

    if (preco <= 0) {
        return res.status(400).json({
            erro: '[ERRO] O preço do produto precisa ser maior que zero!'
        });
    };

    if (typeof preco !== 'number') {
        return res.status(400).json({
            erro: '[ERRO] O preço do produto precisa ser um número!'
        });
    };

    if (!categoria) {
        return res.status(400).json({
            erro: '[ERRO] A categoria do produto é obrigatória!'
        });
    };

    next();
}