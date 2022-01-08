// Express.js
const express = require("express");
const app = express();

// Tasks Routes
const tasks = require("./routes/tasksRoutes");
const connectDB = require("./db/connectMongo");

// config .env Variables
const dotenv = require("dotenv");
dotenv.config({ path: "./routes/.env" });

// middleware
app.use(express.json());

// routes:
app.use("/api/v1/tasks/", tasks);

const start = async () => {
    try {
        // Start Conection With The DB
        await connectDB(process.env.DB_URI);
        // create node server
        app.listen(process.env.PORT, () => {
            console.log(`Server is listening on port ${process.env.PORT}...`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
