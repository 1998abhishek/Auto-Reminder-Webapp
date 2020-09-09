const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let todoSchema = new Schema({

     nametask: String,
     description: {
         type: String,
         required: true

     },
     namecreator:  String,
     duration: Number,
     createdate: {
            type:String,

         },
     done: {type:Boolean,
             default: false}
});

module.exports = mongoose.model('Todo', todoSchema);
