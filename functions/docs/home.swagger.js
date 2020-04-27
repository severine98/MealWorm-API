"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  get: {
    tags: ["Home"],
    description: "Say hello",
    operationId: "hello",
    responses: {
      "200": {
        description: "The user was greeted.",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Message"
            }
          }
        }
      }
    }
  }
};
exports.default = _default;