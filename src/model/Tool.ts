import mongoose, { Schema } from "mongoose";
import { required, string } from "yargs";

export const ToolSchema = new Schema({
  title: {
    type: String,
    required: "Tool title required",
  },
  link: {
    type: String,
    required: "Link required",
  },
  description: {
    type: String,
    required: "Description required",
  },
  tags: { type: Array }

});

export const ToolModel = mongoose.model("tools", ToolSchema);

export interface ToolInputDTO {
  title: string;
  link: string;
  description: string;
  tags: string[];
}
