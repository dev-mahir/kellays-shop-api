import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";

// internal import
import errorHandler from "./middlewares/errorHandler.js";
import userRoute from "./routes/user.js";
import productRoute from "./routes/product.js";
import tagRoute from "./routes/tag.js";
import categoryRoute from "./routes/category.js";
import brandRoute from "./routes/brand.js";
import colorRoute from "./routes/color.js";
import sizeRoute from "./routes/size.js";

// init express
const app = express();

// init middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser())

// env config
dotenv.config();

// init env variables
const PORT = process.env.PORT || 8080;

// Api routing
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/tag", tagRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/brand", brandRoute);
app.use("/api/v1/color", colorRoute);
app.use("/api/v1/size", sizeRoute);

// express error handler
app.use(errorHandler);

// listening server
app.listen(PORT, () => {
  connectDB();
  console.log(`server is running at http://localhost:${PORT}`.bgGreen.black);
});







// git init
// git add .
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/dev-mahir/kellays-shop-api.git
// git push -u origin main