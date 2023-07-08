import express from "express";
import cors from "cors";

const app = express();
const port = 3001;
app.use(cors());

app.use(express.json());

import api from "./routes";
app.use("/api", api);


app.listen(port, () => console.log(`App server listening on port ${port}!`));

