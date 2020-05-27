const mongoose = require('mongoose');
var authz = require('mongoose-authorization');
const Schema= new mongoose.Schema({
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
Schema.permissions = {
  
  admin: {
    write: ['username','password','role'],
    create: true,
  }
  
};
Schema.plugin(authz);
const User= mongoose.model('User', Schema)
module.exports=User;