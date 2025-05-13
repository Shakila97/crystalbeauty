

import User from "../models/user.js"; 
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export function saveUser (req,res){

    const hashedPassword = bcrypt.hashSync(req.body.password,10)
    
    const newUser = new User ({
        email : req.body.email,
        firstName : req.body.firstName, 
        lastName : req.body.lastName,
        role : req.body.role,
        password : hashedPassword
    })


    newUser.save().then(()=>{    
            res.json({        
                message:"Save Success"
            })
        }
    ).catch(()=>{
        res.status(500).json({
            message:"Error"
        }).status(500)
    })
}

export function loginUser (req,res){

        const email = req.body.email;
        const password = req.body.password;

        User.findOne({
                email : email
            }).then((User)=>{
               
                if (User==null){
                    res.status(404).json({
                        message:"User Not Found"
                    })
                }else{
                    if (bcrypt.compareSync(password,User.password)){
                        
                        const userData ={
                            email : User.email,
                            firstName : User.firstName,
                            lastName : User.lastName,
                            role : User.role,
                            phone : User.phone,
                            isDisabled : User.isDisabled,
                            isEmailVerified : User.isEmailVerified
                        }

                        const token = jwt.sign(userData,"secretkey");
                        res.json({
                            message:"Login Success",
                            token : token
                        });


                    }else{
                        res.status(401).json({
                            message:"Password Not Match"
                        })
                    }

               }
            })
}