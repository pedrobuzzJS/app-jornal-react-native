import { Router } from "express";

import { createNoticiaController } from "../modules/noticia/useCases/createNoticia";
import { deleteNoticiaController } from "../modules/noticia/useCases/deleteNoticia";
import { listNoticiasController } from "../modules/noticia/useCases/listNoticias";
import { updateNoticiaController } from "../modules/noticia/useCases/updateNoticia";

const noticiasRoutes = Router();

noticiasRoutes.get("/", (request, response) => {
  return listNoticiasController.handle(request, response);
});

noticiasRoutes.post("/", (request, response) => {
  return createNoticiaController.handle(request, response);
});

noticiasRoutes.patch("/:id", (request, response) => {
  return updateNoticiaController.handle(request, response);
});

noticiasRoutes.delete("/:id", (request, response) => {
  return deleteNoticiaController.handle(request, response);
});

export { noticiasRoutes };
