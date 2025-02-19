import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    fristName :{
        type : String,
        required : true
    },

    lastName :{
        type : String,
        required : true
    },

    password :{
        type : String,
        required : true
    },

    isBlocked :{
        type : Boolean,
        default : false
    },

    type :{
    type : String,
    default : "customer"
    },

    profilePicture : {
        type : String,
        default :"https://clipart-library.com/images/8i6oer5KT.png"
    },
})

const User = mongoose.model("users",userSchema)

export default User;