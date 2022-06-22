import { NoticiaRepository } from "../../repositories/NoticiaRepository";
import { CreateNoticiaController } from "./CreateNoticiaController";
import { CreateNoticiaUseCase } from "./CreateNoticiaUseCase";

const noticiaRepository = NoticiaRepository.getInstance();
const createNoticiaUseCase = new CreateNoticiaUseCase(noticiaRepository);
const createNoticiaController = new CreateNoticiaController(
  createNoticiaUseCase
);

export { createNoticiaController };
