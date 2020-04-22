import { Router } from "express";
const router = Router();

// HOME ROUTE
router.get("/", (req, res) => res.send("Welcome to the MealWorm API!"));

router.get("*", (req, res) => res.redirect("/"));

module.exports = router;
