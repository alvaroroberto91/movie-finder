import { Request, Response } from "express";
import {SaveFilmsAtDataBaseUseCase} from "./SaveFilmsAtDataBaseUseCase"

export class SaveFilmsAtDataBaseController {
  async handle(request: Request, response: Response) {
    const saveFilmsAtDataBaseUseCase = new SaveFilmsAtDataBaseUseCase();
    const resolvedResult = await saveFilmsAtDataBaseUseCase.execute();

    return response.send(resolvedResult);
  }
}