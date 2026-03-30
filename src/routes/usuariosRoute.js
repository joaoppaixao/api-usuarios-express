import { Router } from "express"
import { getUsuario, postUsuario, buscarUsuarioPorId, deleteUsuario } from "../controllers/usuariosController.js"


const router = Router();

router.get("/usuarios", getUsuario);

router.post("/usuarios", postUsuario);

router.get("usuarios/:id", buscarUsuarioPorId);

router.delete("usuarios/:id", deleteUsuario);


export default router;