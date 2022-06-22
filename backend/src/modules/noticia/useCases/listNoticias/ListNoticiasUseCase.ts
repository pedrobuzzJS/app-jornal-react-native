import { Noticia } from "../../model/Noticia";
import { NoticiaRepository } from "../../repositories/NoticiaRepository";

class ListNoticiasUseCase {
  constructor(private noticiasRepository: NoticiaRepository) {}
  execute(): Noticia[] {
    const noticias = this.noticiasRepository.list();

    return noticias;
  }
}

export { ListNoticiasUseCase };
