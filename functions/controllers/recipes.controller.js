"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.destroy = exports.create = exports.find = exports.findAll = void 0;

var _recipe = _interopRequireDefault(require("../models/recipe"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const findAll = async (req, res) => {
  const recipes = await _recipe.default.findAll();
  res.status(200).send({
    recipes
  });
};

exports.findAll = findAll;

const find = async (req, res) => {
  const recipe = await _recipe.default.find(req.params.id);
  res.status(200).send({
    recipe
  });
};

exports.find = find;

const create = (req, res) => {
  const newRecipe = new _recipe.default(req.body);
  newRecipe.save();
  res.status(201).send({
    message: "Recipe successfully created",
    "recipe": newRecipe
  });
};

exports.create = create;

const destroy = (req, res) => {
  _recipe.default.destroy(req.params.id);

  res.status(202).send({
    message: "Recipe successfully deleted"
  });
};

exports.destroy = destroy;