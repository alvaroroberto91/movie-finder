require('dotenv').config()
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
    const api_url = process.env.API_URL;
    const limit = "limit=200";
    try{
      const { data } = await axios.get<Array<IGetFilms>>(
        api_url + limit,
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