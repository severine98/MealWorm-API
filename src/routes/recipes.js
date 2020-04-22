import { Router } from "express";
import * as recipes from "../controllers/recipesController";   

const router = Router();

router.get("/", recipes.findAll);

router.get("/:id", recipes.find);

router.post("/", recipes.create);

router.delete("/:id", recipes.destroy);

module.exports = router;