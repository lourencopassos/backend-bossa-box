import { Request, Response } from "express";
import { ToolInputDTO } from "../model/Tool";
import { Document } from 'mongoose'

export interface IToolController {
  addTool(req: Request, res: Response): Promise<void>
  getAllTools(req: Request, res: Response): Promise<void>
  getToolsByTag(req: Request, res: Response): Promise<void>
  deleteTool(req: Request, res: Response): Promise<void>
}

export interface IToolBusiness {
  addTool(tool: ToolInputDTO): Promise<void>
  getAllTools(skip: number, limit: number): Promise<Document[]>
  getToolsByTag(tag: string): Promise<Document[]>
  deleteTool(toolId: string): Promise<void>
}

export interface IToolDatabase {
  addTool(title: string,
    link: string,
    description: string,
    tags: string[]): Promise<void>
  getAllTools(skip: number, limit: number): Promise<Document[]>
  getToolByTag(tag: string): Promise<Document[]>
  deleteTool(toolId: string): Promise<void>
  getToolByTitle(toolTitle: string): Promise<Document[]>

}