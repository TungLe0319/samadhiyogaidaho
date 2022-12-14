import { Auth0Provider } from "@bcwdev/auth0provider";
import { newsLetterService } from "../services/NewsLetterService.js";
import { retreatsService } from "../services/RetreatsService.js";
import { uploadsService } from "../services/UploadsService.js";
import BaseController from "../utils/BaseController.js";

export class UploadsController extends BaseController {
  constructor() {
    super("/api/uploads");
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get("", this.getAllUploads)

      .post("", this.addUpload);
  }

  async addUpload(req, res, next) {
    try {
      const upload = await uploadsService.addUpload(req.body, req.userInfo.id);
      await res.send(upload);
    } catch (error) {
      next(error);
    }
  }
  
  async getAllUploads(req, res, next) {
    try {
      const retreats = await uploadsService.getAllUploads();
      await res.send(retreats);
    } catch (error) {
      next(error);
    }
  }
}
