var mongoose = require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/Users',{ useNewUrlParser: true });

module.exports={
    mongoose : mongoose // {mongoose}
}