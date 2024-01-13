// const User = require('../models/user')
const User = require('../config/mongoDb')

const getAllUsers = (req,res)=>{
    res.json({message:[]})
}

const createAUser=(req,res)=>{
    const newUser = new User({
        firstName: 'pratik',
        lastName: 'ingle',
        uidi: 1234567
      });
      
      // Save the user to the database
      newUser.save()
        .then(result => {
          console.log('User saved:', result);
        })
        .catch(error => {
          console.error('Error saving user:', error);
        });
}

module.exports={getAllUsers,createAUser}