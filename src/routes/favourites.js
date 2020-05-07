import { Router } from "express";
import * as favourites from "../controllers/favourites.controller";

const router = Router();

router.get("/:userId", favourites.findAll);

export default router;