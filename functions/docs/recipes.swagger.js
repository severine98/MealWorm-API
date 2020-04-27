"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const findAll = {
  tags: ["Recipes"],
  description: "GET all recipes - receive a list of the favourites",
  operationId: "findAll",
  responses: {
    "200": {
      description: "The recipes were retrieved",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/Recipes"
          }
        }
      }
    }
  }
};
const create = {
  tags: ["Recipes"],
  description: "POST a recipe - add a recipe to the user's favourites",
  operationId: "create",
  responses: {
    "201": {
      description: "The recipe was successfully created",
      content: {
        "application/json": {
          schema: {
            message: {
              $ref: "#/components/schemas/Message"
            },
            recipe: {
              $ref: "#/components/schemas/Recipe"
            }
          }
        }
      }
    }
  }
};
const find = {
  tags: ["Recipes"],
  description: "GET one recipe - receive a selected recipe from the user's favourites",
  operationId: "find",
  responses: {
    "200": {
      description: "The recipe was retrieved",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/Recipe"
          }
        }
      }
    }
  }
};
const destroy = {
  tags: ["Recipes"],
  description: "DELETE one recipe - remove an item from the user's favourites",
  operationId: "destroy",
  responses: {
    "200": {
      description: "The recipe was successfully destroyed",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/Message"
          }
        }
      }
    }
  }
};
var _default = {
  findAll,
  create,
  find,
  destroy
};
exports.default = _default;