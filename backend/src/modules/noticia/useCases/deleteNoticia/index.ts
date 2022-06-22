import { NoticiaRepository } from "../../repositories/NoticiaRepository";
import { DeleteNoticiaController } from "./DeleteNoticiaController";
import { DeleteNoticiaUseCase } from "./DeleteNoticiaUseCase";

const noticiaRepository = NoticiaRepository.getInstance();
const deleteNoticiaUseCase = new DeleteNoticiaUseCase(noticiaRepository);
const deleteNoticiaController = new DeleteNoticiaController(
  deleteNoticiaUseCase
);

export { deleteNoticiaController };
