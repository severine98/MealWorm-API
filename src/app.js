import express from "express";
import logger from "morgan";
import dotenv from "dotenv";

import indexRoutes from "./routes/index";
import recipesRoutes from "./routes/recipes";

dotenv.config();

console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS);

const app = express();
const port = process.env.PORT || '3000';

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/recipes', recipesRoutes);
app.use('/api', indexRoutes);
app.get("*", (req, res) => res.status(404).send("There is no content at this route."));

app.listen(port, () => console.log(`Server is listening on port ${port}.`));

export default app;

