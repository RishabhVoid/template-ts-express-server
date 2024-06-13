import { Request, Response } from "express";
import { HttpCodes, ResponseCodes } from "../constants/reqCodes";
import { JsonResponse } from "../constants/types";

export const HealthCheck = (_req: Request, res: Response) => {
  const jsonRes: JsonResponse = {
    displayMessage: "100% HP",
    status: ResponseCodes.SUCCESS,
    error: "",
  };
  res.status(HttpCodes.OKAY).json(jsonRes);
};
