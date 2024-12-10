const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DrugSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    minLength: 3,
    maxLength: 25,
  },
  pharmacy: {
    type: String,
    required: [true, "Please provide a pharmacy name"],
    minLength: 3,
    maxLength: 25,
  },
  quantity: {
    type: Number,
    required: [true, "Please provide the available quantity for the drug"],
  },
});

module.exports = mongoose.model("Drug", DrugSchema);
