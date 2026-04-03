const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  name:     { type: String, default: '' },
  title:    { type: String, default: '' },
  email:    { type: String, default: ''},
  phone:    { type: String, default: '' },
  location: { type: String, default: ''},
  github:   { type: String, default: ''},
  linkedin: { type: String, default: ''},
  cv:       { type: String, default: '' },
  about:    { type: String, default: '' },
  status:   { type: String, default: '' },
  focus:    { type: String, default: ''},
}, { timestamps: true });

module.exports = mongoose.model('Profile', ProfileSchema);
