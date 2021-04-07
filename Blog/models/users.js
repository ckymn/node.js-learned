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

usersSchema.statics.login  = async function(username, password){
    const user = await this.findOne({username});
    if(user){
        const auth = await bcrypt.compare(password, user.password);
        if(auth){
            return user
        }else {
            throw Error("parola hatali");
        }
    }else {
        throw Error("kullanici bulunamadi")
    }
}

usersSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

module.exports = mongoose.model("user",usersSchema);