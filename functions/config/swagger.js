"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.swaggerDocument = void 0;

var _home = _interopRequireDefault(require("../docs/home.swagger"));

var recipes = _interopRequireWildcard(require("../docs/recipes.swagger"));

var favourites = _interopRequireWildcard(require("../docs/favourites.swagger"));

var _schemas = _interopRequireDefault(require("../docs/schemas.swagger"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
    url: 'https://mealworm-api.web.app/',
    description: 'Production'
  }, {
    url: 'http://localhost:3000/',
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
      get: recipes.findAll,
      post: recipes.create
    },
    "/api/recipes/:id": {
      get: recipes.find,
      delete: recipes.destroy
    },
    "/api/favourites/:userId": {
      get: favourites.findAll
    }
  },
  components: {
    schemas: _schemas.default
  }
};
exports.swaggerDocument = swaggerDocument;