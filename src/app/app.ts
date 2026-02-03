import type {Application} from "express";
import express from "express";
import {prisma} from "../shared/prisma.js";
import {toNodeHandler} from "better-auth/node";
import {auth} from "../lib/auth.js";
const app: Application = express();


app.all('/api/auth/{*any}', toNodeHandler(auth));


app.get("/", (req, res) => {
    res.send("Hello World");
})


export default app;
