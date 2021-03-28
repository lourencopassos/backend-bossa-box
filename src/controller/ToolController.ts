import { Request, Response } from "express";
import { IToolBusiness, IToolController } from "../@types/tools";
import { ToolBusiness } from "../business/ToolBusiness";
import { ToolDatabase } from "../data/ToolDatabase";
import { ToolInputDTO } from "../model/Tool";

export class ToolController {
  private toolBusiness: IToolBusiness;
  constructor(toolBusiness: IToolBusiness) { this.toolBusiness = toolBusiness }
  addTool = async (req: Request, res: Response) => {
    try {

      const input: ToolInputDTO = {
        title: req.body.title,
        description: req.body.description,
        link: req.body.link,
        tags: req.body.tags
      }



      const tool = await this.toolBusiness.addTool(input)

      res.status(201).send({ message: "Ferramenta adicionada com sucesso." });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }

  getAllTools = async (req: Request, res: Response) => {
    try {
      const limit = Number(req.query.limit);
      const skip = Number(req.query.skip);

      const tools = await this.toolBusiness.getAllTools(skip, limit);
      res.status(200).send({ tools: tools, total: tools.length });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }

  getToolsByTag = async (req: Request, res: Response) => {
    try {
      const tag = String(req.query.tag)

      const tools = await this.toolBusiness.getToolsByTag(tag);

      res.status(200).send({ tools });

    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }
  deleteTool = async (req: Request, res: Response) => {
    try {
      const toolIdToDelete = req.params.id
      const tools = await this.toolBusiness.deleteTool(toolIdToDelete);
      res.status(204).send({ message: "Conta deletada com sucesso." });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }
}
