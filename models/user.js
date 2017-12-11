var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
  id: String,
  role: String,
  unit: String,
  name: String,
  nric: String,
  phone: String,
  email: { type: String, default: "johndoe@gmail.com" },
  updated_date: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Personal Information', userSchema);
