import { ToolModel } from "../model/Tool";
import { BaseDatabase } from "./BaseDatabase";

export class ToolDatabase extends BaseDatabase {
  public addTool = async (
    title: string,
    link: string,
    description: string,
    tags: string[]
  ) => {
    try {
      await this.getConnection();
      new ToolModel({ title, link, description, tags }).save();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public getAllTools = async (skip: number, limit: number) => {
    try {
      await this.getConnection();
      const tools = await ToolModel.find({}).skip(skip).limit(limit).exec();
      return tools;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public getToolByTitle = async (toolTitle: string) => {
    try {
      await this.getConnection();
      const tools = await ToolModel.find({ title: toolTitle })
      return tools;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public getToolByTag = async (tag: string) => {
    try {
      await this.getConnection();
      const tool = await ToolModel.find({ tags: tag })
      console.log(tool)
      return tool;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public deleteTool = async (toolId: string) => {
    try {
      await this.getConnection();
      await ToolModel.findByIdAndRemove(toolId).exec();
    } catch (error) {
      throw new Error(error.message);
    }
  };
}
