const mongoose=require('mongoose');
const dbName="musicapp";
const dbUrl=`mongodb+srv://salman:salman@cluster0.a1xh4sl.mongodb.net/${dbName}?retryWrites=true&w=majority`;
//asynchronous function
//this funcion will return a promise


mongoose.connect(dbUrl)
.then((result) => {
    //console.log(result);
    console.log('connected to MongoDB');
})
.catch((err) => {
    console.error(err);
});
module.exports=mongoose;