 const userModel = require('../models/usermodel')
 
 const getUser = (req,res) => {
    res.send({
        success: true,
        message:"data coming from mvc",
    })
}

const addUser = (req,res) => {
    const { inputData } = req.body;
        res.json({
        sucess:true,
        message:` Welcome to ${inputData} `,
    });
};

const createUser =async(req,res) =>{
    try {
        const {name,email,password} = req.body
        const user = await userModel.create({
            name,email,password
        })
        res.status(201).json({
            message:'success',
            user
        })
    } catch (error) {
        console.log(`error in create user ctrl = ${error}`)
        res.status(400).json({
            message:false,
            error
        })
    }
};


const  getAllUsers=async(req,res) =>{
    try {
        const users = await userModel.find({})
        res.status(200).json({
            success:true,
            totalusers:users.length,
            users
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            msg:'get all users',
            error:error.message
        })
    }
}

const getsingleuser = async (req, res) => {
    try {
      const user = await userModel.findById(req.params.id);
      if (user) {
        res.status(200).json({
          success: true,
          user,
        });
      } else {
        res.status(400).send('User not found');
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Single user error',
        error: error.message,
      });
    }
  };
  
  const deleteUser = async (req, res) => {
    try {
      const user = await userModel.findByIdAndDelete(req.params.id);
      if (user) {
        res.status(200).json({
          success: true,
          message: 'User deleted successfully',
        });
      } else {
        res.status(404).send('User not found');
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Error deleting user',
        error: error.message,
      });
    }
  };
  
 const UpdateUser = async (req,res) => {
    try {
        
    } catch (error) {
        
    }
 } 
module.exports = { getUser,addUser,createUser, getAllUsers,getsingleuser,UpdateUser,deleteUser}