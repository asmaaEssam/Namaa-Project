const mongoose = require('mongoose');
const Schema= new mongoose.Schema({
  name:{
type:String,
required:[true, 'name is required'],
unique:true,
minlength:4,
maxlength:13
  },
    username:{
        type:String,
        required:[true, 'username is required'],
        unique:true,
        minlength: 3,
        maxlength:10
        
        
    },
    password:{
        type: String,
    validate: {
      validator: function(v) {
        return /[A-Z]/
        .test(v);
      },
      message: 'password must have at least one uppercase letter'
    },
    required: [true, 'password is required']
  },
  role:{
    required:true,
    type:String
  }
    
})

const User= mongoose.model('User', Schema)
module.exports=User;