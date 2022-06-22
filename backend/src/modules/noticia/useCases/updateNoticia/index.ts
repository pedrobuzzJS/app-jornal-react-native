import { NoticiaRepository } from "../../repositories/NoticiaRepository";
import { UpdateNoticiaController } from "./UpdateNoticiaController";
import { UpdateNoticiaUseCase } from "./UpdateNoticiaUseCase";

const noticiaRepository = NoticiaRepository.getInstance();
const updateNoticiaUseCase = new UpdateNoticiaUseCase(noticiaRepository);
const updateNoticiaController = new UpdateNoticiaController(
  updateNoticiaUseCase
);

export { updateNoticiaController };
