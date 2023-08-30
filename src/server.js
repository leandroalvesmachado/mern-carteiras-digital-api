import express, { json } from "express";
import { connectDb } from "./config/database.js";
import "dotenv/config";
import authRouter from "./routes/authRoutes.js";
import transactionRouter from "./routes/transactionRoutes.js";

const app = express();
const port = process.env.PORT;

// DATABASE_URI="mongodb+srv://leandroalvesmachado:pxrqmB8UntoVb2DD@cluster0.z1owstp.mongodb.net/?retryWrites=true&w=majority"
// PORT=5000

connectDb();
app.use(json());
app.use(authRouter);
app.use(transactionRouter);
app.listen(port, () => console.log(`Servidor executando na porta ${port}`));