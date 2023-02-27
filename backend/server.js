const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URL || 'mongodb+srv://manishankar:Newpassword123@cluster0.ii5gstz.mongodb.net/Form '

mongoose.connect(MONGO_URI , { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Connected to MongoDB successfully....."))
.catch((err) => console.log('Failed to connect MongoDB', err))

const mongooseSchema = new mongoose.Schema({
    firstname : {
        type:String,
        require : true
    },
    lastname : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    confirmPassword : {
        type : String,
        require : true
    }
});

const formModel = mongoose.model('Values', mongooseSchema);



app.post('/formdata', (req,res) => {
    res.json(req.body);
    console.log(req.body);
    formModel.create(req.body).then(() => console.log('Saved'));
})

app.post('/login' , async(req,res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log('Recieved Successfully');
    console.log({email, password});
    const checkEmail = await formModel.findOne({email : email});
    const checkPassword = await formModel.findOne({password : password});

    try {
        if(email === checkEmail.email && password === checkPassword.password){
            res.status(200).json({data : 'matched'});
        }
        else{
            res.status(400).json({data : 'not matched'})
            console.log('not matched')
        }
    } catch (error) {
        console.log(error);
    }
    
    

})

app.listen(PORT, () => console.log(`Server started on ${PORT}`));