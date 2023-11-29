import { PORT } from "./config/envs";
import { Server } from "./domain/server";

const main = () => {
  const server = new Server({
    port: PORT,
  });

  server.start();
};

(() => {
  main();
})();
