import "dotenv/config";

import path from "path";
import http from "http";

import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";

import baseRouter from "./routes/baseRouter";

// SECTION :: Application constants
const ISPROD = process.env.NODE_ENV == "production";
const PORT = process.env.PORT || 9000;
const app = express();

// SECTION :: Applying third party middleware
// For parsing json and populating body.json properly
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cross origin policy
app.use(cors());
// Request loggers
app.use(morgan("common"));
// Changes headers for additional layer of protection against attacks (Not impenetrible)
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

// SECTION :: Static files routing to public
app.use(express.static(path.join(__dirname, "/public")));

// SECTION :: Base Routes and Routers
app.use("/", baseRouter);

// SECTION :: Http server config and initialization
const httpServer = http.createServer(app);

httpServer.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
