const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
    data:{
        type:String,
        required:true,
    },
    dayOfWeek:{
        type:String,
        required:true
    },
    numberOfCans:{
        type:Number,
        required:true
    },
    numberOfSoldLiters:{
        type:Number,
        required:true
    },
    numberOfRemainingLiters:{
        type:Number,
        required:true
    },
    valueOfInput:{
        type:Number,
        required:true
    },
    valueOfOutput:{
        type:Number,
        required:true
    },
    reason:{
        type:String
    },
    
    createdAt:{
        type:Date,
        default:Date.now
    }
    
})

mongoose.model("Report",ReportSchema)