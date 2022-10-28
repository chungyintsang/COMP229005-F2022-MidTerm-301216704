// Do not expose your credentials in your code.
let atlasDB = "mongodb+srv://dbuser:Ny3UVBOD3EO3oZpK@cluster005.8scysba.mongodb.net/todo?retryWrites=true&w=majority";

// Database setup
let mongoose = require('mongoose');

module.exports = function(){

    mongoose.connect(atlasDB);
    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('===> Connected to MongoDB.');
    })

    return mongodb;
}