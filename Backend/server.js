import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

// viser frontend mappen
app.use(express.static("frontend"));

const port = 3000;
app.listen(port, () => {
  console.log(`Server kører på http://localhost:${port}`);
});
