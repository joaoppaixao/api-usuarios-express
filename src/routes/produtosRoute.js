import { Router } from "express";
import { getProdutos, postProdutos, buscarProdutoPorId, deletarProduto } from "../controllers/produtosController.js";
import { verificarAdmin } from "../middlewares/verificarAdminMiddleware.js";
import { validarProduto } from "../middlewares/validarProdutoMiddleware.js";


const router = Router();

router.get("/produtos", getProdutos);

router.post("/produtos", validarProduto, postProdutos);

router.get("/produtos/:id", buscarProdutoPorId);

router.delete("/produtos/:id", deletarProduto);


export default router;