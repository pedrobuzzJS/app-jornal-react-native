import { Request, Response } from "express";

import { CreateNoticiaUseCase } from "./CreateNoticiaUseCase";

class CreateNoticiaController {
  constructor(private createNoticiaUseCase: CreateNoticiaUseCase) {}

  handle(request: Request, response: Response): Response {
    const { noticia, autor } = request.body;

    this.createNoticiaUseCase.execute({ noticia, autor });

    return response.status(201).send();
  }
}

export { CreateNoticiaController };
