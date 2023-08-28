import mongoose from "mongoose";
import "dotenv/config";

// atlas cloud mongodb
// leandroalvesmachado
// pxrqmB8UntoVb2DD
// 45.181.93.70/32
// Cluster0

export async function connectDb() {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log("Conectado ao banco de dados");
  } catch (error) {
    console.log(error.message);
  }
}

export async function disconnectDb() {
  await mongoose.disconnect(mongoUrl);
}
