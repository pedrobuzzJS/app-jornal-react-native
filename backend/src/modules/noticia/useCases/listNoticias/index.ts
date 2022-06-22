import { NoticiaRepository } from "../../repositories/NoticiaRepository";
import { ListNoticiasController } from "./ListNoticiasController";
import { ListNoticiasUseCase } from "./ListNoticiasUseCase";

const noticiaRepository = NoticiaRepository.getInstance();
const listNoticiasUseCase = new ListNoticiasUseCase(noticiaRepository);
const listNoticiasController = new ListNoticiasController(listNoticiasUseCase);

export { listNoticiasController };
