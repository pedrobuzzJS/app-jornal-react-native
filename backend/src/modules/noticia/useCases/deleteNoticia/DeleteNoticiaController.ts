import { Request, Response } from "express";

import { DeleteNoticiaUseCase } from "./DeleteNoticiaUseCase";

class DeleteNoticiaController {
  constructor(private deleteNoticiaUseCase: DeleteNoticiaUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.params;

    this.deleteNoticiaUseCase.execute(id);

    return response.send();
  }
}

export { DeleteNoticiaController };
