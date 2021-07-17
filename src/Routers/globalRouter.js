import express from "express";
import { indexScreen } from "../Controllers/globalController";

const globalRouter = express.Router();

globalRouter.get("/", indexScreen);

export default globalRouter;
