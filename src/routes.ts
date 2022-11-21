import { Router } from "express";
import { GetFilmsFromApi } from "./api/GetFilmsFromApi";
import {SaveFilmsAtDataBaseController} from "./modules/films/useCases/saveFilmsAtDB/SaveFilmsAtDataBaseController"

const routes = Router();

const saveFilmsAtDataBaseController = new SaveFilmsAtDataBaseController()

routes.get('/get-films', saveFilmsAtDataBaseController.handle);

export { routes };
