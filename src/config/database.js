const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://vanshikaagrawal309:vanshika@namastenode.8fqwcsj.mongodb.net/devTinder",
            );
        console.log("MongoDB connected successfully");
        return true;
    } catch (error) {
        console.error("MongoDB Connection Failed:", error.message);
        return false;
    }
};

module.exports = connectDB;
