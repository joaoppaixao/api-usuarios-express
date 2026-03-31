import { Router } from "express";
import { getProdutos, postProdutos, buscarProdutoPorId, deletarProduto } from "../controllers/produtosController.js";
import { validarProduto } from "../middlewares/validarProdutoMiddleware.js";
import { logger } from "../middlewares/loggerMiddleware.js";


const router = Router();

router.get("/produtos", getProdutos);

router.post("/produtos", logger, validarProduto, postProdutos);

router.get("/produtos/:id", buscarProdutoPorId);

router.delete("/produtos/:id", deletarProduto);


export default router;