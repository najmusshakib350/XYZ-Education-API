const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");

const AppError = require("./utils/apperror");
const GlobalError = require("./controllers/errorcontroller");
const userRouter = require("./routes/userroutes");
const courseRouter = require("./routes/courseroutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
//solve cross origin policy problem
app.use(cors());
//Router mount
app.use("/api/user/", userRouter);
app.use("/api/course/", courseRouter);

app.all("*", (req, res, next) => {
  return next(
    new AppError(`can not findout this url: ${req.originalUrl}`, 404)
  );
});
app.use(GlobalError);
module.exports = app;
