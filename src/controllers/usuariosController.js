let usuarios = []
let id = 0 


export const getUsuario = (req, res) => {
    res.json(usuarios)
}


export const postUsuario = (req, res) => {
    const {nome, email} = req.body;

    const novoUsuario = {
        id: id++,
        nome,
        email
    }

    usuarios.push(novoUsuario);

    return res.status(201).json({ mensagem: "Usuário criado com sucesso!", novoUsuario })
}


export const buscarUsuarioPorId = (req, res) => {
    const { id } = req.params;

    const usuario = usuarios.find(u => u.id == id)

    if (!usuario) {
        return res.status(404).json({ erro: "Usuário não encontrado!" })
    }

    res.json(usuario)

}


export const deleteUsuario = (req, res) => {
    const { id } = req.params;

    const index = usuarios.findIndex(u => u.id == id)

    if (index === -1) {
        return res.status(404).json({ erro: "Usuário não encontrado!" })
    }

    usuarios.splice(index, 1);

    res.status(204).send()
}