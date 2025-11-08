import express from "express"
import { ENV } from "./config/env.js";
import job from "./config/cron.js";


const app = express();
const PORT = ENV.PORT || 5001;

if (ENV.NODE_ENV === "production") job.start();

app.get("/api/health", (req, res) => {
    res.status(200).json({ sucess: true });
});

app.listen(PORT, () =>  {
    console.log ("Server is running on PORT:", PORT);
});     