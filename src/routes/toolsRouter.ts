import express from "express";
import { ToolBusiness } from "../business/ToolBusiness";
import { ToolController } from "../controller/ToolController";
import { ToolDatabase } from "../data/ToolDatabase";

const toolRouter = express.Router();

const toolDatabase = new ToolDatabase()
const toolBusiness = new ToolBusiness(toolDatabase)
const toolController = new ToolController(toolBusiness);

toolRouter.post("/", toolController.addTool);
toolRouter.get("/", toolController.getAllTools);
toolRouter.get("/filter", toolController.getToolsByTag);
toolRouter.delete("/:id", toolController.deleteTool);


export { toolRouter }

