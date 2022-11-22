import { ExecuteSaveDataAtDataBase } from "../../../../utils/ExecuteSaveDataAtDataBase";
import { GetFilmsFromApi } from "../../../../api/GetFilmsFromApi";
import { VerifySavedFilms } from "../../../../middleware/VerifySavedFilms";


export class SaveFilmsAtDataBaseUseCase {
  async execute() {
    try {
      const getFilmsApi = new GetFilmsFromApi();
      const result = await getFilmsApi.execute();
      
      const saveDataAtDataBase = new ExecuteSaveDataAtDataBase();

      const verifySavedFilms = new VerifySavedFilms();
      const verifiedDataReturn = await verifySavedFilms.execute();
      
      if(verifiedDataReturn.length) {
        const responseOfSavedData = await saveDataAtDataBase.execute(verifiedDataReturn);
        return responseOfSavedData;
      }
      if(!verifiedDataReturn.lengh) {
        throw new Error("Unable to insert data already registered")
      }

      const responseOfSavedData = await saveDataAtDataBase.execute(result);


      return responseOfSavedData;

    } catch (e) {
      throw e
    };
  };
};