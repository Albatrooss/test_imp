import express from "express";
import router from "./router";

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Server running");
});

app.use("/api", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
