"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findAll = void 0;
const findAll = {
  tags: ["Recipes"],
  description: "GET a user's favourite recipes using their userID",
  operationId: "find",
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
exports.findAll = findAll;