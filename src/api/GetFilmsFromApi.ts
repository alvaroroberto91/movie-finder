import axios from "axios";

interface IGetFilms {
  title: string,
  original_title: string,
  description: string,
  rt_score: string,
  release_date: string
  data: [];
}

export class GetFilmsFromApi {
  async execute() {
    try{
      const { data } = await axios.get<Array<IGetFilms>>(
        'https://ghibliapi.herokuapp.com/films?limit=200',
        {
          headers: {},
        },
      );
      return data;
    }catch (e) {
      throw e
    };
  };
};