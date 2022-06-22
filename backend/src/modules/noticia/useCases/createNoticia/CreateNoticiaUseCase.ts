import { NoticiaRepository } from "../../repositories/NoticiaRepository";

interface IRequest {
  noticia: string;
  autor: string;
}

class CreateNoticiaUseCase {
  constructor(private noticiasRepository: NoticiaRepository) {}
  execute({ noticia, autor }: IRequest) {
    this.noticiasRepository.create({ noticia, autor });
  }
}

export { CreateNoticiaUseCase };
