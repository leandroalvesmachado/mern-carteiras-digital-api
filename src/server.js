import express, { json } from "express";
import authRouter from "./routes/authRoutes.js";
import { connectDb } from "./config/database.js";
import "dotenv/config";

const app = express();
const port = process.env.PORT;

connectDb();
app.use(json());
app.use(authRouter);
app.listen(port, () => console.log(`Servidor executando na porta ${port}`));