const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());

//routes
const user = require('./routes/users');
app.use('/user',user);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'client','build','index.html'))
    });
}
const uri = process.env.mongodb || 'mongodb://localhost:27017/mernstack';
mongoose.connect(uri,
{
    useNewUrlParser:true,
    useFindAndModify : false
},(err)=>{
    if(err){
        process.exit(1);
        console.log("Not connected");
    }
    else
        console.log("Connected");
});

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log('App is running');
})