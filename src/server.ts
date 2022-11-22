import express, {NextFunction, Request, Response} from "express";
import "express-async-errors";
import mongoose from "mongoose";
import { routes } from "./routes"
const dbURL = 'mongodb://root:root@localhost:27017/admin';
import swaggerUi from "swagger-ui-express";
import swaggerFile from './swagger.json'
import cors from "cors"
const app = express();

mongoose.connect(dbURL);


app.use(express.json());
app.use(cors());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if(err instanceof Error) {
    return response.status(400).json({
      message: err.message
    });
  }

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

app.listen(process.env.PORT || 3000, () => console.log("Server is running!"));
