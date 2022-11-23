import { Router } from "express";
import { SaveFilmsAtDataBaseController } from "./modules/films/useCases/saveFilmsItDataBase/SaveFilmsAtDataBaseController";
import { ListFilmsOnDataBaseController } from "./modules/films/useCases/listFilmsInDataBase/ListFilmsOnDataBaseController";
import { DeleteFilmsOnDataBase } from "./modules/films/useCases/deleteFilmsOnDataBase/DeleteFilmsOnDataBase";
const routes = Router();

const saveFilmsAtDataBaseController = new SaveFilmsAtDataBaseController();
const listFilmsOnDataBase = new ListFilmsOnDataBaseController();
const deletCollection = new DeleteFilmsOnDataBase()

routes.get('/get-films', saveFilmsAtDataBaseController.handle);
routes.get('/list-films', listFilmsOnDataBase.handle);
routes.delete('/delete-films', deletCollection.execute);

export { routes };
