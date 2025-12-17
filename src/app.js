import express from "express";
const app = express();

// routes import 
import userRoutes from "./routes/user.routes.js";


// route declaration
app.use("/api/v1/users", userRoutes);


export { app };