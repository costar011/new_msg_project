import express from "express";
import {
  indexScreen,
  friendsController,
} from "../Controllers/globalController";

const globalRouter = express.Router();

globalRouter.get("/", indexScreen);
globalRouter.get("/friends", friendsController);

export default globalRouter;
