export const verificarAdmin = (req, res, next) => {
    const isAdmin = req.headers['admin'];

    if (isAdmin === 'true') {
        return next()
    }

    return res.status(403).json({
        erro: 'Acesso negado! Utilize um usuário administrador.'
    });
};
