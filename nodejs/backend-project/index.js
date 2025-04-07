import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./utils/db.js";
import userRoutes from "./route/user.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: process.env.BASE_URL,
    credentials:true,
    methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders:['Content-Type','Authorization']
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Welcome to your new life!!");    
});

app.get("/tejal", (req, res) => {
  res.send("Tejal you are doing greate!! Keep it up");
});

//connect to db
db();

app.use("/api/v1/users",userRoutes)

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
