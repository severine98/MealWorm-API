import Recipe from "../models/recipe";

export const findAll = async (req, res) => {
    const recipes = await Recipe.findByUserId(req.params.userId);
    res.status(200).send({
        recipes
    });
}
