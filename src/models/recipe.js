import { v4 as uuid } from 'uuid';
import { firestore } from '../config/firebase';

export default class Recipe {
    constructor(data) {
        this.id = data.id || uuid();
        this.userId = data.userId || "";
        this.name = data.name;
        this.category = data.category;
        this.area = data.area;
        this.instructions = data.instructions;
        this.thumbnail = data.thumbnail;
        this.tags = data.tags;
        this.ingredients = data.ingredients;
        this.source = data.source;
        this.dateCreated = new Date().toUTCString();
    }

    static async findAll() {
        const response = await firestore.collection("recipes").get();
        return response.docs.map(doc => doc.data());
    }

    static async find(id) {
        const response = await firestore.collection("recipes").doc(id).get();
        return response.data();
    }

    static async findByUserId(userId) {
        const response = await firestore
            .collection("recipes")
            .where("userId", "==", userId)
            .get();
        return response.docs.map(doc => doc.data());
    }

    async save() {
        this.dateModified = new Date().toUTCString();
        const recipe = {...this};
        const response = await firestore.collection("recipes").doc(recipe.id).set(recipe);
    }

    static async destroy(id) {
        const response = await firestore.collection("recipes").doc(id).delete();
    }
}