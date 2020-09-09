


const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes/routes');


mongoose.Promise = global.Promise;

const mongoURI = "mongodb+srv://abhishek:kiit%401705385@cluster0.4mrlg.mongodb.net/cluster0?retryWrites=true&w=majority";
mongoose.connect(mongoURI, {

     useNewUrlParser : true

  })
  .then(function(){
     console.log('Database connected');
  });





app.use(bodyParser.urlencoded({extended: true}));

const mustacheExpressInstance = mustacheExpress();
mustacheExpressInstance.cache = null;
app.engine('mustache',mustacheExpressInstance);
app.set('view engine','mustache');
app.set('views' , __dirname + '/views');

app.use('/',routes);

app.listen(3000, function(){
     console.log('Listening on port 3000');
});
