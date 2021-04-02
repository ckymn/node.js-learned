const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log(`MongoDb connected : ${connect.connection.host}`)
    } catch (error) {
        console.error(error);
        process.exit(1);// kill program
    }
}

module.exports = connectDB;