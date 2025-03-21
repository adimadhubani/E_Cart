import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js'
import categoryRoutes from "./routes/categoryRoutes.js"
import productRoutes from "./routes/productRoutes.js";
import cors from 'cors'

const app=express()

dotenv.config();

//databse config
connectDB();


app.use(cors());
// app.use(
//     cors({
//       origin: "http://localhost:5173", // Allow requests from frontend
//       credentials: true, // Allow cookies if using authentication
//       methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
//     })
//   );
app.use(express.json());
app.use(morgan("dev"));

//routes

app.use('/api/v1/auth',authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to ecommerce app</h1>")
})

const PORT=process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`.bgCyan.white)
})