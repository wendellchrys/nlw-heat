import { Request, Response } from "express";
import { GetAllMessagesService } from "../services/GetAllMessagesService";

class GetAllMessagesController {
  async handle(request: Request, response: Response) {
    const service = new GetAllMessagesService()

    const result = await service.execute()

    return response.json(result)
  }
}

export { GetAllMessagesController };
