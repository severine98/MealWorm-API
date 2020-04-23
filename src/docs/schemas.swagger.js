export default {
    Recipe: {
        type: "object",
        properties: {
            id: {
                type: 'string',
                description: 'Unique identifier',
                example: "422bf3e8-3a94-46be-8e49-2fd7c5db4bfc"
            },
            name: {
                type: 'string',
                description: 'The title of the recipe',
                example: "Toblerone Mousse"
            },
            category: {
                type: 'string',
                description: 'The type of recipe',
                example: "Dessert"
            },
            area: {
                type: 'string',
                description: 'The place of origin',
                example: "Yorkshire"
            },
            instructions: {
                type: 'string',
                description: 'The list of instructions to create the dish',
                example: "Melt toblerone, add creme fraiche, whisk egg whites, fold together, fridge. Done."
            },
            thumbnail: {
                type: 'string',
                description: 'A hosted image url',
                example: 'https://fillmurray.com/300/300'
            },
            tags: {
                type: 'string',
                description: "A comma separated list of relevant tags to categorise.",
                example: "diabetes, pleasure"
            },
            ingredients: {
                type: 'array',
                items: {
                    ingredient: {
                        type: "string",
                        description: "An ingredient for the recipe",
                        example: "Egg white"
                    }
                }
            },
            source: {
                type: "string",
                description: "Where the recipe was originally published",
                example: "https://www.bbcgoodfood.com/recipes/2907669/easy-pancakes"
            },
            dateCreated: {
                type: "string",
                description: "UTC date string for when the item was created",
                example: "Wed, 22 Apr 2020 22: 36: 50 GMT"
            },
            dateModified: {
                type: "string",
                description: "UTC date string for when the item was modified",
                example: "Wed, 22 Apr 2020 22: 56: 50 GMT"
            },
        }
    },
    Recipes: {
        type: 'object',
        properties: {
            recipes: {
                type: 'array',
                items: {
                    $ref: '#/components/schemas/Recipe'
                }
            }
        }
    },
    Message: {
        type: "object",
        properties: {
            message: {
                type: "string",
                description: "A message for the api consumer",
                example: "Recipe successfully deleted"
            }
        }
    }
}