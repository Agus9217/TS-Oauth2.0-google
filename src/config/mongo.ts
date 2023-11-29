import mongoose from "mongoose";
import { MONGO_DB } from "./envs";

export class Mongo {
  static async connect() {
    try {
      await mongoose.connect(`${MONGO_DB}`);
      console.log("###### MONGO IS CONECTED ######");
    } catch (error) {
      console.log(`message: ${error}`);
    }
  }
}
