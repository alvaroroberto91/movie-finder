import { Request, Response } from "express";
import { ListFilmsOnDataBaseUseCase } from "./ListFilmsOnDataBaseUseCase";



export class ListFilmsOnDataBaseController {
  async handle(request: Request, response: Response) {
    const listFilmsOnDataBaseUseCase = new ListFilmsOnDataBaseUseCase();
    const receivedResult = await listFilmsOnDataBaseUseCase.execute(request, response);

    return response.send(receivedResult);
  }
}