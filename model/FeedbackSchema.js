import mongoose from "mongoose";

const{Schema , model} = mongoose;

const feedbackSchema = new Schema({
    farmerName:{
        type:String,
    },
    phone:{
        type:String,
    },
    woolQuality:{
        type:String,
    },
    productid:{
        type : String,
    },
    woolColor:{
        type:String,
    },
    rateFarmer:{
        type: String,
    },
    rateWool:{
        type: String,
    },
    shortDescription:{
        type: String,
    },
})

const feedbackRecord = model("feedbackRecord",feedbackSchema);
export default feedbackRecord;