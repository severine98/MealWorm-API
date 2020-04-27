"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.swaggerDocument = void 0;

var _home = _interopRequireDefault(require("../docs/home.swagger"));

var _recipes = _interopRequireDefault(require("../docs/recipes.swagger"));

var _schemas = _interopRequireDefault(require("../docs/schemas.swagger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const swaggerDocument = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'Mealworm API',
    description: 'The documentation for the _nology Mealworm API, designed to teach the concepts of API integration and server-side programming to trainees on our 12 week programme.',
    termsOfService: '',
    contact: {
      name: '_nology',
      email: 'coaches@nology.io',
      url: 'https://nology.io'
    },
    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
    }
  },
  servers: [{
    url: 'mealworm-api.web.app',
    description: 'Production'
  }, {
    url: 'http://localhost:3000',
    description: 'Local server'
  }],
  tags: [{
    name: "Home"
  }, {
    name: "Recipes"
  }],
  paths: {
    "/api": _home.default,
    "/api/recipes": {
      get: _recipes.default.findAll,
      post: _recipes.default.create
    },
    "/api/recipes/:id": {
      get: _recipes.default.find,
      delete: _recipes.default.destroy
    }
  },
  components: {
    schemas: _schemas.default
  }
};
exports.swaggerDocument = swaggerDocument;