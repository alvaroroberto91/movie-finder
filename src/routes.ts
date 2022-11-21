import { Router } from "express";

const routes = Router();

routes.get('/', (request, response) => {
  return response.json("First Route is Running!")
})

export { routes };
