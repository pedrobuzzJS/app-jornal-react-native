import { Request, Response } from "express";

import { ListNoticiasUseCase } from "./ListNoticiasUseCase";

class ListNoticiasController {
  constructor(private listNoticiasUseCase: ListNoticiasUseCase) {}

  handle(request: Request, response: Response): Response {
    const all = this.listNoticiasUseCase.execute();

    return response.json(all);
  }
}

export { ListNoticiasController };
