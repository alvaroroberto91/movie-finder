import FilmsModel from "../models/FilmsModel";

interface DataParams {
  title: string,
  original_title: string,
  description: string,
  rt_score: string,
  release_date: string
}

export class ExecuteSaveDataAtDataBase {
  async execute(data: DataParams[]) {
    const responseApi = data;
    let listOfSavedFilms = [];
    for(let i = 0; i < responseApi.length; i++) {
      let saveFilmsProperty = new FilmsModel({
        title: responseApi[i].title, 
        original_title: responseApi[i].original_title,
        description: responseApi[i].description,
        rt_score: responseApi[i].rt_score,
        release_date: responseApi[i].release_date,
      });
      await saveFilmsProperty.save();
      listOfSavedFilms.push(saveFilmsProperty);
    }
    return listOfSavedFilms;
  }
}