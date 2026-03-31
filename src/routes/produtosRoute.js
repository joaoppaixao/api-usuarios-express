import { Router } from "express";
import { getProdutos, postProdutos, buscarProdutoPorId, deletarProduto } from "../controllers/produtosController.js";
import { verificarAdmin } from "../middlewares/verificarAdminMiddleware.js";


const router = Router();

router.get("/produtos", getProdutos);

router.post("/produtos", postProdutos);

router.get("/produtos/:id", buscarProdutoPorId);

router.delete("/produtos/:id", verificarAdmin, deletarProduto);


export default router;