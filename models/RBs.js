const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rbSchema = new Schema({
  ranking: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    index: { unique: true },
    required: true,
  },
  team: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  }
});

const RBs = mongoose.model("RBs", rbSchema);

module.exports = RBs;