import FilmsModel from "../models/FilmsModel";
import {difference} from "../utils/CompareDiffsBetweenDatas"
import {GetFilmsFromApi} from "../api/GetFilmsFromApi"


export class VerifySavedFilms {
  async execute() {
    const listOfFilmsOnDataBase = await FilmsModel.find({});
    const requestApi = new GetFilmsFromApi();
    const responseDataOfApiCall = await requestApi.execute();

    let list_data = [];
    let list_db = [];

    responseDataOfApiCall.forEach(function(data) {
      list_data.push({
        title: data.title, 
        original_title: data.original_title,
        description: data.description,
        rt_score: data.rt_score,
        release_date: data.release_date,
      });
    });

    listOfFilmsOnDataBase.forEach(function(save) {
      list_db.push({
        title: save.title, 
        original_title: save.original_title,
        description: save.description,
        rt_score: save.rt_score,
        release_date: save.release_date,
      });
    });

    const result = difference(list_db, list_data);
    console.log(result.length)
    return result;
  }
}