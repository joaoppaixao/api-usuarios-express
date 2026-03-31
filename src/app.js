import express from "express"
import statusRoute from "./routes/statusRoute.js"
import usuariosRoute from "./routes/usuariosRoute.js"
import produtosRoute from "./routes/produtosRoute.js"
import { logger } from "./middlewares/loggerMiddleware.js"
import { tempo } from "./middlewares/tempoMiddleware.js";


const app = express();

app.use(express.json());

// logs 
app.use(logger);
app.use(tempo);

// rotas dos endpoints
app.use(statusRoute);
app.use(usuariosRoute);
app.use(produtosRoute);


export default app;