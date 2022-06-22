import { v4 as uuidV4 } from "uuid";

class Noticia {
  id?: string;
  noticia: string;
  autor: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Noticia };
