import {Schema, model, Document} from "mongoose";

interface IFilms extends Document {
  title: string,
  original_title: string,
  description: string,
  rt_score: string,
  release_date: string

}

const FilmSchema = new Schema({
  title: String,
  original_title: String,
  description: String,
  rt_score: String,
  release_date: String
});

export default model<IFilms>('Films', FilmSchema)