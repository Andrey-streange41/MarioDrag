import express from "express";
import router from "./routes/index.js";
import cors from "cors";
import redis from "redis";
const app = express();

const PORT = process.env.PORT || 5000;
const REDIS_PORT = process.env.REDIS_PORT || 6379;

export const client = redis.createClient({ legacyMode: true });
client.on("connect", () => {
      console.log("Conneted to redis on port,", REDIS_PORT);
    });
app.use(cors());
app.use(express.json());
app.use("/api", router);

(async function () {
  try {
    await client.connect();
    
    app.listen(PORT, () => {
      console.log("App start on port", PORT);
    });
  } catch (error) {
    console.log(error);
  }
})();
