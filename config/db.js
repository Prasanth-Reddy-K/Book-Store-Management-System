const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://prasanthreddykpr:prasanth123@cluster0.g2bmytp.mongodb.net/Book-Store');

const db = mongoose.connection;

db.on('error',(error)=>{
    console.log('error to connecting with database')
})

db.once('open',function(){
    console.log('Successfully connected to database');
})