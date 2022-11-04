const { Schema, model } = require('../connection');
const schemaObject = new Schema({
    title: String,
    description: String,
    author:String,
    lyrics: String,
    image:String,
    musicfile:String,
    createdate:Date,
    year: Number,
    publisher: String,


})

module.exports = model('music', schemaObject);