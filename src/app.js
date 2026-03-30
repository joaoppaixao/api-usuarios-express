import express from "express"
import statusRoute from "./routes/statusRoute.js"
import usuariosRoute from "./routes/usuariosRoute.js"


const app = express();

app.use(express.json());

app.use(statusRoute);

app.use(usuariosRoute);


export default app;