import express from "express"
import statusRoute from "./routes/statusRoute.js"
import usuariosRoute from "./routes/usuariosRoute.js"
import { logger } from "./middlewares/loggerMiddleware.js"


const app = express();

app.use(express.json());

// logs 
app.use(logger);

// rotas dos endpoints
app.use(statusRoute);
app.use(usuariosRoute);


export default app;