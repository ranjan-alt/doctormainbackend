import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import adminRouter from "./routes/adminRoute.js";
import reviewRouter from "./routes/reviewRoutes.js";
import hospitalRoutes from "./routes/hospitalRoutes.js";
import insuranceRoutes from "./routes/insuranceRoute.js";
import surgeriesRoute from "./routes/surgeryRoute.js";
// app config
const app = express();
const port = process.env.PORT || 3000;
connectDB();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors());

// api endpoints
app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/hospitals", hospitalRoutes);
app.use("/api/insurances", insuranceRoutes);
app.use("/api/surgeries", surgeriesRoute);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => console.log(`Server started on PORT:${port}`));
