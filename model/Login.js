import mongoose from "mongoose";

const{Schema , model} = mongoose;

const LoginSchema = new Schema({
    email:{
        type:String,
    },
    name:{
        type:String,
    },
    phone:{
        type:String,
    },
    password:{
        type:String,
    },
});

const loginRecord = model("loginRecord",LoginSchema);
export default loginRecord;