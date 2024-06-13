import { Router } from "express";
import { HealthCheck } from "../controllers/base";

const baseRouter = Router();

baseRouter.get("/healthCheck", HealthCheck);

export default baseRouter;
