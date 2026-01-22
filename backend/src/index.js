import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
})
connectDB()
  .then(() => {
    const PORT = process.env.PORT || 8000;
    app.on("error", (err) => {
      console.error("ERROR", err);
      throw err;
    });
    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("DB CONNECTION ERROR", err);
    throw err;
  })



