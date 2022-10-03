import { Schema, model, models } from "mongoose";


const pokemonSchema = new Schema({
 
    name: String,
    img: String,
    type: String,
    hp:Number,
    speed: Number,
    weight: Number,
    height: Number,
    skills: String,
    evolution: String,
    place: String
});

export const Pokemon = models.Pokemon || model('Pokemon', pokemonSchema);