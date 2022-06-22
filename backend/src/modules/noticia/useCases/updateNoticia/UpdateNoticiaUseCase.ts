import { NoticiaRepository } from "../../repositories/NoticiaRepository";

interface IRequest {
  noticia: string;
  autor: string;
}

class UpdateNoticiaUseCase {
  constructor(private noticiasRepository: NoticiaRepository) {}

  execute(id: string, { noticia, autor }: IRequest) {
    this.noticiasRepository.update(id, { noticia, autor });
  }
}

export { UpdateNoticiaUseCase };
