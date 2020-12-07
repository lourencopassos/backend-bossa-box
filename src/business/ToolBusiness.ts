import { ToolDatabase } from "../data/ToolDatabase";
import { BadRequestError } from "../error/BadRequestError";
import { NotFoundError } from "../error/NotFoundError";
import { ToolInputDTO } from "../model/Tool";

export class ToolBusiness {
  async addTool(tool: ToolInputDTO) {
    const toolDatabase = new ToolDatabase();

    if (!tool) {
      throw new BadRequestError("Invalid Request Params")
    }

    const toolAlreadyExistsInDatabase = await this.getToolByTitle(
      tool.title
    );

    if (toolAlreadyExistsInDatabase.length > 0) {
      throw new BadRequestError("Tool Already in Database");
    }

    if (!tool.title || !tool.description || !tool.tags || !tool.link) {
      throw new BadRequestError(
        "Title, description, tags and link are mandatory fields"
      );
    }

    const toolAdded = await toolDatabase.addTool(
      tool.title, tool.link, tool.description, tool.tags
    );

    return toolAdded
  }

  async getAllTools(skip: number, limit: number) {
    const toolDatabase = new ToolDatabase();
    const tools = await toolDatabase.getAllTools(skip, limit);
    return tools;
  }

  async getToolsByTag(tag: string) {
    if (!tag) {
      throw new BadRequestError("Check tool tag");
    }
    const toolDatabase = new ToolDatabase();
    const tool = await toolDatabase.getToolByTag(tag);
    return tool;
  }

  async getToolByTitle(toolTitle: string) {
    if (!toolTitle) {
      throw new BadRequestError("Invalid Request Params")
    }
    const toolDatabase = new ToolDatabase();
    const tool = await toolDatabase.getToolByTitle(toolTitle)
    return tool;
  }

  async deleteTool(toolId: string) {

    if (!toolId) {
      throw new BadRequestError("Invalid Request Params")
    }

    const toolDatabase = new ToolDatabase();

    await toolDatabase.deleteTool(toolId)

  }
}
