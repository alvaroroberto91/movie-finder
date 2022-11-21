import { GetFilmsFromApi } from "../../../../api/GetFilmsFromApi";
import filmsModel from "../../../../models/FilmsModel";


export class SaveFilmsAtDataBaseUseCase {
  async execute() {
    let listOfSalvedFilms = [];
    try {
      const getFilmsApi = new GetFilmsFromApi();
      const result = await getFilmsApi.execute();
      
      for(let i = 0; i < result.length; i++) {
        let saveFilmsProperty = new filmsModel({
          title: result[i].title, 
          original_title: result[i].original_title,
          description: result[i].description,
          rt_score: result[i].rt_score,
          release_date: result[i].release_date,
        });
        await saveFilmsProperty.save();
        listOfSalvedFilms.push(saveFilmsProperty);
      };
      return listOfSalvedFilms

    } catch (e) {
      throw e
    };
  };
};