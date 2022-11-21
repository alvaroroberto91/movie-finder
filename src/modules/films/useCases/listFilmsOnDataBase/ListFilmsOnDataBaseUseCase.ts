import { Request, Response } from "express";
import FilmsModel from "../../../../models/FilmsModel";



export class ListFilmsOnDataBaseUseCase {
  async execute(request: Request, response: Response) {
    const offset = parseInt(request.query.skip as string);
    const limit = parseInt(request.query.limit as string);

    const filmsModel = await FilmsModel.find().skip(offset).limit(limit);
    return filmsModel;
  }
}