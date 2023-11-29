import express from "express";
import { Mongo } from "../config/mongo";
import passport from "passport";
import session from "express-session";
import routes from "../routes/index";
import "../auth";

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
    this.app.use(
      session({
        secret: "mysecret",
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false },
      })
    );

    this.app.use(passport.initialize());
    this.app.use(passport.session());

    this.app.use("/", routes);


    this.app.listen(this.port, () => {
      const url = `http://localhost:${this.port}`;
      console.log(`Server is running on: ${url}`);
    });

    this.mongo();
  }
}
