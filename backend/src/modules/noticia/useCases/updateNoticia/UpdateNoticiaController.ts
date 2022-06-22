import { Request, Response } from "express";

import { UpdateNoticiaUseCase } from "./UpdateNoticiaUseCase";

class UpdateNoticiaController {
  constructor(private updateNoticiaUseCase: UpdateNoticiaUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.params;
    const { noticia, autor } = request.body;

    this.updateNoticiaUseCase.execute(id, { noticia, autor });

    return response.send();
  }
}

export { UpdateNoticiaController };
