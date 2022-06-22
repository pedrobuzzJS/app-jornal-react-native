import { NoticiaRepository } from "../../repositories/NoticiaRepository";

class DeleteNoticiaUseCase {
  constructor(private noticiasRepository: NoticiaRepository) {}
  execute(id: string) {
    this.noticiasRepository.delete(id);
  }
}

export { DeleteNoticiaUseCase };
