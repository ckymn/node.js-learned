const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const usersSchema = new mongoose.Schema({
    username : {
        type : String,
        require : true,
        unique : true
    },
    password: {
        type : String,
        require : true
    }
},{timestamps : true});

usersSchema.pre("save" , async function(next){
    const salt  = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})
module.exports = mongoose.model("user",usersSchema);