const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipientShcema = new Schema({
  email: String,
  responded: { type: Boolean, default: false },
});

module.exports = recipientShcema;
