import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const port = 3001;
const MONGODB_CONNECTION_STRING =
    "mongodb+srv://wouy448:0e4mXx1QTFCkMkQq@cluster0.hhelkph.mongodb.net"

app.use(cors());
app.use(express.json());

import api from "./routes/index.js";
app.use("/api", api);

mongoose.connect(MONGODB_CONNECTION_STRING + "/grass")
    .then(() => {
        console.log("Database connected");
    })
    .catch(error => {
        console.error(error);
    });

app.listen(port, () => console.log(`App server listening on port ${port}!`));

