import home from "../docs/home.swagger";
import * as recipes from "../docs/recipes.swagger";
import * as favourites from "../docs/favourites.swagger";
import schemas from "../docs/schemas.swagger";

export const swaggerDocument = {
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
    servers: [
        {
            url: 'https://mealworm-api.web.app/',
            description: 'Production'
        },
        {
            url: 'http://localhost:3000/',
            description: 'Local server'
        }
    ],
    tags: [
        {
            name: "Home"
        },
        { 
            name: "Recipes" 
        }
    ],
    paths: {
        "/api": home,
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
        schemas: schemas
    }
}