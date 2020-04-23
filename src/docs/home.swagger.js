export default {
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
}