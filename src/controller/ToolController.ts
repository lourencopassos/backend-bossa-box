import { Request, Response } from "express";
import { ToolBusiness } from "../business/ToolBusiness";
import { ToolInputDTO } from "../model/Tool";

export class ToolController {
  async addTool(req: Request, res: Response) {
    try {

      const input: ToolInputDTO = {
        title: req.body.title,
        description: req.body.description,
        link: req.body.link,
        tags: req.body.tags
      }

      const toolBusiness = new ToolBusiness();

      const tool = await toolBusiness.addTool(input)

      res.status(201).send({ tool });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }

  async getAllTools(req: Request, res: Response) {
    try {
      const limit = Number(req.query.limit);
      const skip = Number(req.query.skip);

      const toolBusiness = new ToolBusiness();
      const tools = await toolBusiness.getAllTools(skip, limit);
      res.status(200).send({ tools: tools, total: tools.length });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }
}
