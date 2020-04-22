import express from "express";
import logger from "morgan";
import dotenv from "dotenv";
import swaggerUI from "swagger-ui-express";

import { swaggerDocument } from "./config/swagger";

import indexRoutes from "./routes/index";
import recipesRoutes from "./routes/recipes";

dotenv.config();

const app = express();
const port = process.env.PORT || '3000';

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/recipes', recipesRoutes);
app.use('/api', indexRoutes);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.get("*", (req, res) => res.status(404).send("There is no content at this route."));

app.listen(port, () => console.log(`Server is listening on port ${port}.`));

export default app;
