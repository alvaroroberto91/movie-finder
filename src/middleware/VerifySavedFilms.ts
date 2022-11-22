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

    for(let i = 0; i < responseDataOfApiCall.length; i++) {
      list_data.push({
        title: responseDataOfApiCall[i].title, 
        original_title: responseDataOfApiCall[i].original_title,
        description: responseDataOfApiCall[i].description,
        rt_score: responseDataOfApiCall[i].rt_score,
        release_date: responseDataOfApiCall[i].release_date,
      });
    }

    for(let i = 0; i < listOfFilmsOnDataBase.length; i++) {
      list_db.push({
        title: listOfFilmsOnDataBase[i].title, 
        original_title: listOfFilmsOnDataBase[i].original_title,
        description: listOfFilmsOnDataBase[i].description,
        rt_score: listOfFilmsOnDataBase[i].rt_score,
        release_date: listOfFilmsOnDataBase[i].release_date,
      });
    }
    const result = difference(list_db, list_data);
    return result;
  }
}