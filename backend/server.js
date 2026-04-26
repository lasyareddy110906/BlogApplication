import exp from "express";
import { config } from "dotenv";
import { connect } from "mongoose";
import { userApp } from "./APIs/UserAPI.js";
import { authorApp } from "./APIs/AuthorAPI.js";
import { adminApp } from "./APIs/AdminAPI.js";
import { commonApp } from "./APIs/CommonAPI.js";
import cookieParser from "cookie-parser";
import cors from "cors";

config();

//create express app
const app = exp();

// ✅ FIXED CORS
const allowedOrigins = [
  "http://localhost:5173",
  "https://blog-application-va94.vercel.app",
  process.env.FRONTEND_URL
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1 || process.env.NODE_ENV !== 'production') {
      callback(null, true);
    } else {
      // Temporarily allow all for testing if needed, or restrict later
      callback(null, true); 
    }
  },
  credentials: true
}));

//middlewares
app.use(cookieParser());
app.use(exp.json());

//routes
app.use("/user-api", userApp);
app.use("/author-api", authorApp);
app.use("/admin-api", adminApp);
app.use("/auth", commonApp);

//port
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`server listening on ${port}..`));

//connect to db
const connectDB = async () => {
  if (!process.env.DB_URL) {
    console.error("CRITICAL ERROR: DB_URL environment variable is missing!");
    return;
  }
  try {
    await connect(process.env.DB_URL);
    console.log("DB server connected");
  } catch (err) {
    console.log("err in db connect", err);
  }
};

connectDB();

//invalid path
app.use((req, res) => {
  res.status(404).json({ message: `path ${req.url} is invalid` });
});

//error handler
app.use((err, req, res, next) => {
  if (err.name === "ValidationError" || err.name === "CastError") {
    return res.status(400).json({ message: "error occurred", error: err.message });
  }

  const errCode = err.code ?? err.cause?.code ?? err.errorResponse?.code;
  const keyValue = err.keyValue ?? err.cause?.keyValue ?? err.errorResponse?.keyValue;

  if (errCode === 11000) {
    const field = Object.keys(keyValue)[0];
    const value = keyValue[field];
    return res.status(409).json({
      message: "error occurred",
      error: `${field} "${value}" already exists`,
    });
  }

  res.status(500).json({
    message: "error occurred",
    error: err.message || "Server side error"
  });
});
