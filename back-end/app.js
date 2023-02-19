import express from "express";
import connectMongoose from "./loaders/db.js";
import routes from "./loaders/routes.js";
import routesSettings from "./loaders/routesSettings.js";

const app = express();

// Init Routes Settings
routesSettings(app);
app.use("/api", routes);

// Connecting with Mongoose
connectMongoose();

export default app;
