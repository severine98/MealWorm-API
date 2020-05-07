"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findAll = void 0;

var _recipe = _interopRequireDefault(require("../models/recipe"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const findAll = async (req, res) => {
  const recipes = await _recipe.default.findByUserId(req.params.userId);
  res.status(200).send({
    recipes
  });
};

exports.findAll = findAll;