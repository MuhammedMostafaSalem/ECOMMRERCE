const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
// const bodyParser = require("body-parser");
// const fileUpload = require("express-fileupload");
const cors = require("cors");

const errorMiddleware = require("./middleware/error");


app.use(express.json());
app.use(cookieParser());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(fileUpload());
app.use(cors());
app.options("*", cors());

// Route Imports
const product = require("./routes/productRoute");
const category = require("./routes/categoryRoute");
const subCategory = require("./routes/subCategoryRoute");
const brand = require("./routes/brandRoute");
const auth = require("./routes/authRoute");
const user = require("./routes/userRoute");
const review = require("./routes/reviewRoute");
const order = require("./routes/orderRoute");

app.options("*", cors());

app.use("/api/v1", product)
app.use("/api/v1", category)
app.use('/api/v1', subCategory);
app.use('/api/v1', brand);
app.use('/api/v1', auth);
app.use('/api/v1', user);
app.use('/api/v1', review);
app.use('/api/v1', order);




// Middleware for Errors
app.use(errorMiddleware)

module.exports = app;