
// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/prkart', {useNewUrlParser: true,
useUnifiedTopology:true});

var db =mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', function(){
    //we r connected!s
    console.log("we are connected bro/sis")
});


var kittySchema = new mongoose.Schema({
    name: String
  });

  // NOTE: methods must be added to the schema before compiling it with mongoose.model()
  kittySchema.methods.speak = function speak() {
    var greeting = "My name is " + this.name
    console.log(greeting);
  };
  var Kitten=mongoose.model('Kitten',kittySchema);
  
  var Prkitty= new Kitten({ name: 'Prkitty' });
  console.log(Prkitty.name); 
  Prkitty.speak();

