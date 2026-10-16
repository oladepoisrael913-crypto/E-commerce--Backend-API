require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const userRoutes = require("./routes/userRoutes.js");
const productRoutes = require("./routes/productRoutes.js");

const app = express();

const port = process.env.PORT || 8000;

// const compass_string = "mongodb://localhost:27017/oladepoisrael913_db";
const atlas_string = process.env.MONGO_URI;
console.log("MONGO_URI available:", Boolean(process.env.MONGO_URI));

if (!atlas_string) {
  console.error("MONGO_URI is not set. Add it in Render > Environment.");
  process.exit(1);
}

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server Is Active");
});

app.use("/users", userRoutes);
app.use("/products", productRoutes);

// Unknown address: answer with JSON that shows the method and path that was tried
app.use((req, res) => {
  res.status(404).json({
    message: `Cannot ${req.method} ${req.originalUrl}`,
  });
});

// Error handler: must stay AFTER all routes
app.use((err, req, res, next) => {
  // Multer errors (wrong field name, too many files, file too large...)
  if (err.name === "MulterError") {
    return res.status(400).json({
      message: err.message,
      sentField: err.field, // the field name that was actually sent
      hint: "The file key in your request must match the name used in upload.single(...)",
    });
  }

  console.error(err);
  res.status(err.status || 500).json({
    message: err.message || "Something went wrong",
  });
});

mongoose
  .connect(atlas_string)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(port, "0.0.0.0", () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Database Connection Error:", err);
    process.exit(1);
  });