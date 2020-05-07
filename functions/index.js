"use strict";

var functions = _interopRequireWildcard(require("firebase-functions"));

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _swagger = require("./config/swagger");

var _recipes = _interopRequireDefault(require("./routes/recipes"));

var _favourites = _interopRequireDefault(require("./routes/favourites"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const app = (0, _express.default)();
const port = process.env.PORT || '3000';
app.use((0, _morgan.default)('dev'));
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: false
}));
app.use('/api/recipes', _recipes.default);
app.use('/api/favourites', _favourites.default);
app.get('/api', (req, res) => res.send({
  message: "Welcome to the MealWorm API!"
}));
app.use('/docs', _swaggerUiExpress.default.serve, _swaggerUiExpress.default.setup(_swagger.swaggerDocument));
app.get("*", (req, res) => res.status(404).send("There is no content at this route."));
app.listen(port, () => console.log(`Server is listening on port ${port}.`));
exports.app = functions.https.onRequest(app);