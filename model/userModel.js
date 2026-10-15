const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim:true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
}, { timestamps: true });

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
