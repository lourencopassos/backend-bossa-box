import dotenv from "dotenv";
import { AddressInfo } from "net";
import express from "express";
import { movieRouter } from "./routes/movieRouter";
import { ThirdParty } from "./services/ThirdParty";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors({ origin: true }));

app.use(express.json());

app.use("/movies", movieRouter);

export const server = app.listen(3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao rodar o servidor.`);
  }
});
