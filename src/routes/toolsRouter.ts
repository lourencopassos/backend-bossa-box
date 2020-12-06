import express from "express";
import { ToolController } from "../controller/ToolController";

export const toolRouter = express.Router();

const toolController = new ToolController();

toolRouter.post("/", toolController.addTool);
toolRouter.get("/", toolController.getAllTools);
