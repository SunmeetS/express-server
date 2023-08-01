import express, { json } from "express";
import routes from "./database/routes.js";
import cron from "node-cron";
import cors from 'cors';
import axios from "axios";
import { updateStandupComedy } from "./database/db.js";

cron.schedule("5 0 30 * *", async function() {
    await updateStandupComedy()
});

let app = express();

app.listen(process.env.PORT || 3001, () => {
    console.log("Server listening on Port", 3001);
})

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.use(
    cors({
        origin: true,
        optionsSuccessStatus: 200,
        credentials: true,
    })
);
app.options(
    '*',
    cors({
        origin: true,
        optionsSuccessStatus: 200,
        credentials: true,
    })
);

app.use(json());
app.use(routes);
//if you want in every domain then
