const path = require("path");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
// const bodyParser = require("body-parser");
// const fileUpload = require("express-fileupload");
const cors = require("cors");

const errorMiddleware = require("./middleware/error");

// Config
if(process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "./config/.env" });
}

app.use(express.json());
app.use(cookieParser());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(fileUpload());

app.use(cors());
app.options("*", cors());
// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(express.static(path.join(__dirname, "uploads")));

// Route Imports
const product = require("./routes/productRoute");
const category = require("./routes/categoryRoute");
const subCategory = require("./routes/subCategoryRoute");
const brand = require("./routes/brandRoute");
const auth = require("./routes/authRoute");
const user = require("./routes/userRoute");
const review = require("./routes/reviewRoute");
const order = require("./routes/orderRoute");
const cart = require("./routes/cartRoute");

app.options("*", cors());

app.use("/api/v1", product)
app.use("/api/v1", category)
app.use('/api/v1', subCategory);
app.use('/api/v1', brand);
app.use('/api/v1', auth);
app.use('/api/v1', user);
app.use('/api/v1', review);
app.use('/api/v1', order);
app.use('/api/v1/cart', cart);


app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, rea) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"))
})

// Middleware for Errors
app.use(errorMiddleware)

module.exports = app;