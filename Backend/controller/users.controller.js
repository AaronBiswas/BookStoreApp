import User from "../model/users.model.js";
import bcrypt from "bcryptjs";
export const signup=async(req,res)=>{
    try {
        const{username,Email,Password}=req.body;
        const user=await User.findOne({Email});
        if(user){
            return res.status(400).json({message:"User already exists"});
        }
        const hashpassword=await bcrypt.hash(Password,10)
        const createUser=new User({
            username:username,
            Email:Email,
            Password:hashpassword,
        });
       await createUser.save()
        res.status(201).json({message:"User created successfully"});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:"Internal Server Error"});
    }
}

export const login = async (req,res)=>{
    try {
        const{Email,Password}=req.body;
        const user=await User.findOne({Email});
        const isMatch=await bcrypt.compare(Password,user.Password);
        if(!user || !isMatch){
            return res.status(400).json({message:"Invalid Username or Password"});
        }
        else{
            return res.status(200).json({message:"Login Successful",user:{
                _id:user._id,
                username:user.username,
                Email:user.Email,
            }})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Internal Server Error"});
    }
}