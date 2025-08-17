
const express = require('express');
const connectDB = require("./config/database");
const app = express();
const cookieParser = require('cookie-parser');
const cors = require("cors");

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user"); 

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);

// Database connection and server startup
const startServer = async () => {
    try {
        const isConnected = await connectDB();
        
        if (isConnected) {
            const PORT = process.env.PORT || 3000;
            app.listen(PORT, () => {
                console.log(`Server is successfully listening on port ${PORT}...`);
            });
        } else {
            console.error("Failed to connect to database. Server not started.");
            process.exit(1);
        }
    } catch (error) {
        console.error("Error starting server:", error);
        process.exit(1);
    }
};

startServer();


