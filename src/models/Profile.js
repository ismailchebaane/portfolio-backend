const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  name:     { type: String, default: 'Chebaane Ismail' },
  title:    { type: String, default: 'AI Engineer | Data Scientist | Web Developer' },
  email:    { type: String, default: 'chebaaneismail@gmail.com' },
  phone:    { type: String, default: '+216 52 759 375' },
  location: { type: String, default: 'Monastir, Téboulba, Tunisia' },
  github:   { type: String, default: 'https://github.com/chebaaneismail' },
  linkedin: { type: String, default: 'https://www.linkedin.com/in/ismail-chebaane-535b75146' },
  cv:       { type: String, default: '#' },
  about:    { type: String, default: '' },
  status:   { type: String, default: 'Seeking new opportunities' },
  focus:    { type: String, default: 'AI Engineering / Full-Stack / MLOps' },
}, { timestamps: true });

module.exports = mongoose.model('Profile', ProfileSchema);
