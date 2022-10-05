const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT;
const errorHandler = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

// connect database
connectDB();

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// root url
app.get("/", (req, res) => {
  res.status(200).json({
    message: "welcome",
  });
});

// Routes
app.use("/api/users", require("./routes/userRoute"));
app.use("/api/tickets", require("./routes/ticketRoute"));
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
