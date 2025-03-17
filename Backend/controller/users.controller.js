import User from "../model/users.model.js";
import bcrypt from "bcryptjs";
export const signup=async(req,res)=>{
    try {
        const{username,email,password}=req.body;
        console.log(req.body);
        const user=await User.findOne({email});
        if(user){
            return res.status(400).json({message:"User already exists"});
        }
        const hashpassword=await bcrypt.hash(password,10)
        const createUser=new User({
            username:username,
            email:email,
            password:hashpassword,
        });
       await createUser.save()
        res.status(201).json({message:"User created successfully",user:{
            _id:createUser._id,
            username:createUser.username,
            email:createUser.email,
        },});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:"Internal Server Error"});
    }
}

export const login = async (req,res)=>{
    try {
        const{email,password}=req.body;
        const user=await User.findOne({email});
        const isMatch=await bcrypt.compare(password,user.password);
        if(!user || !isMatch){
            return res.status(400).json({message:"Invalid Username or Password"});
        }
        else{
            return res.status(200).json({message:"Login Successful",user:{
                _id:user._id,
                username:user.username,
                email:user.email,
            }})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Internal Server Error"});
    }
}