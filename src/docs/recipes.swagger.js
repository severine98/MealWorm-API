export const findAll = {
    tags: ["Recipes"],
    description: "GET all recipes - receive a list of all the recipes",
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
}

export const create = {
    tags: ["Recipes"],
    description: "POST a recipe - add a recipe to the list of recipes",
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
}

export const find = {
    tags: ["Recipes"],
    description: "GET one recipe - receive a selected recipe using it's id",
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
}

export const destroy = {
    tags: ["Recipes"],
    description: "DELETE one recipe - remove an item from the recipes using its id",
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
}