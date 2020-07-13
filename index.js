const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')


const app = express();
app.use(cors())
app.use(bodyParser.json());

//routes
const user = require('./routes/user');
app.use('/user',user);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'client','build','index.html'))
    });
}
const uri ='mongodb+srv://yash15700:qwertyuiop@cluster0.4glkw.mongodb.net/test2?retryWrites=true&w=majority';
mongoose.connect(uri,
{
    useNewUrlParser:true,
    useFindAndModify : false
},(err)=>{
    if(err){
        console.log(err);
        console.log("Not connected");
        process.exit(1);
        
    }
    else
        console.log("Connected");
});

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`App is running on ${port}`);
})