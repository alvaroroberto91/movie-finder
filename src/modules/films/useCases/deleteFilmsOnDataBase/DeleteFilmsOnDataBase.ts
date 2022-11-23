import { Request, Response } from "express";
import FilmsModel from "../../../../models/FilmsModel"

export class DeleteFilmsOnDataBase {
  async execute(request: Request, response: Response) {
    await FilmsModel.find({}).deleteMany({});
    return response.send("Collection Successfully Deleted");
  }
}