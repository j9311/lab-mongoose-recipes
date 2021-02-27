const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: {type:String, required:true, unique:true},
    level: {
      type: String,
      enum:["Easy Peasy", "Amateur Chef", "UltraPro Chef"]
    },
    ingredients: [String],
    cuisine: String,
    dishType: String,
    image: {type: String, default:'https://images.media-allrecipes.com/images/75131.jpg'},
    duration: {type: Number, minimum: 0},
    creator: String,
    created:{type:Date, default:new Date()},

});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
