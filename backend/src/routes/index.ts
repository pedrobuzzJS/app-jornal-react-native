import { Router } from "express";

import { noticiasRoutes } from "./noticia.routes";

const router = Router();

router.use("/noticia", noticiasRoutes);

export { router };
