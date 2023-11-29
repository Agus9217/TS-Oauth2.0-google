import express from "express";
import { Mongo } from "../config/mongo";

interface Opt {
  port: number;
}

export class Server {
  private app = express();
  private readonly port: number;
  private readonly mongo = Mongo.connect;

  constructor({ port }: Opt) {
    this.port = port;
  }

  start() {
    this.app.use(express.json());

    this.app.listen(this.port, () => {
      console.log(`Server is running on: http://localhost:${this.port}`);
    });

    this.mongo();
  }
}
