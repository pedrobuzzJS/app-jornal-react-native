import { Noticia } from "../model/Noticia";

interface ICreateNoticiaDTO {
  noticia: string;
  autor: string;
}

interface IUpdateNoticiaDTO {
  noticia: string;
  autor: string;
}

class NoticiaRepository {
  private noticias: Noticia[];

  private static INSTANCE: NoticiaRepository;

  private constructor() {
    this.noticias = [];
  }

  public static getInstance(): NoticiaRepository {
    if (!NoticiaRepository.INSTANCE) {
      NoticiaRepository.INSTANCE = new NoticiaRepository();
    }
    return NoticiaRepository.INSTANCE;
  }

  list() {
    return this.noticias;
  }

  create({ noticia, autor }: ICreateNoticiaDTO) {
    const Noticiaa = new Noticia();

    Object.assign(Noticiaa, { noticia, autor });

    this.noticias.push(Noticiaa);
  }

  update(id: string, { noticia, autor }: IUpdateNoticiaDTO) {
    const Noticia = this.findById(id);

    if (Noticia) {
      const indice = this.noticias.findIndex((p) => p.id === id);

      const noticiaUpdated: Noticia = {
        ...Noticia,
        noticia, 
        autor
      };

      this.noticias[indice] = noticiaUpdated;
    }
  }

  delete(id: string) {
    const newList = this.noticias.filter((p) => p.id !== id);

    this.noticias = newList;
  }

  findById(id: string): Noticia | undefined {
    const user = this.noticias.find((u) => u.id === id);

    return user;
  }
}

export { NoticiaRepository };
