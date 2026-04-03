const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  id:        { type: String, required: true, unique: true },
  fileName:  { type: String, required: true },
  perms:     { type: String, default: '-rw-r--r--' },
  icon:      { type: String, default: '◈' },
  category:  { type: String, default: 'General' },
  status:    { type: String, enum: ['COMPLETED', 'IN_PROGRESS', 'PAUSED', 'ARCHIVED'], default: 'COMPLETED' },
  year:      { type: String, default: () => new Date().getFullYear().toString() },
  shortDesc: { type: String, default: '' },
  fullDesc:  { type: String, default: '' },
  tech:      [{ type: String }],
  highlights:[{ type: String }],
  images:    [{ type: String }],
  github:    { type: String, default: '#' },
  live:      { type: String, default: '#' },
  order:     { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);
