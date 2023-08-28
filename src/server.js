import express, { json } from "express";
import authRouter from "./routes/authRoutes.js";
import { connectDb } from "./config/database.js";
import "dotenv/config";

const app = express();
const port = process.env.PORT;

// DATABASE_URI="mongodb+srv://leandroalvesmachado:pxrqmB8UntoVb2DD@cluster0.z1owstp.mongodb.net/?retryWrites=true&w=majority"
// PORT=5000

connectDb();
app.use(json());
app.use(authRouter);
app.listen(port, () => console.log(`Servidor executando na porta ${port}`));