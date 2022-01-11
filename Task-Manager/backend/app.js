// Express.js
const express = require("express");
const app = express();

var cors = require("cors");

// Tasks Routes
const tasks = require("./routes/tasksRoutes");
const connectDB = require("./db/connectMongo");

// config .env Variables
const dotenv = require("dotenv");
dotenv.config();

// middleware
app.use(cors());
// app.use(express.static("./public"));
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
