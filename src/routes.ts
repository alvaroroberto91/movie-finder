import { Router } from "express";
import {SaveFilmsAtDataBaseController} from "./modules/films/useCases/saveFilmsAtDB/SaveFilmsAtDataBaseController"
import {ListFilmsOnDataBaseController} from "./modules/films/useCases/listFilmsOnDataBase/ListFilmsOnDataBaseController";
const routes = Router();

const saveFilmsAtDataBaseController = new SaveFilmsAtDataBaseController();
const listFilmsOnDataBase = new ListFilmsOnDataBaseController();

routes.get('/get-films', saveFilmsAtDataBaseController.handle);
routes.get('/list-films', listFilmsOnDataBase.handle);

export { routes };
