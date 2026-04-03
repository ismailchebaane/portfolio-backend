const mongoose = require('mongoose');

// Experience
const ExperienceSchema = new mongoose.Schema({
  id:       { type: String, required: true, unique: true },
  title:    { type: String, required: true },
  company:  { type: String, default: '' },
  location: { type: String, default: '' },
  date:     { type: String, default: '' },
  stack:    { type: String, default: '' },
  bullets:  [{ type: String }],
  order:    { type: Number, default: 0 },
}, { timestamps: true });

// Skills Group
const SkillGroupSchema = new mongoose.Schema({
  id:     { type: String, required: true, unique: true },
  tree:   { type: String, default: '├──' },
  name:   { type: String, required: true },
  amber:  { type: Boolean, default: false },
  badges: [{ type: String }],
  order:  { type: Number, default: 0 },
}, { timestamps: true });

// Education
const EducationSchema = new mongoose.Schema({
  id:     { type: String, required: true, unique: true },
  degree: { type: String, required: true },
  school: { type: String, default: '' },
  year:   { type: String, default: '' },
  badge:  { type: String, enum: ['CURRENT', 'COMPLETED', 'DROPPED'], default: 'COMPLETED' },
  order:  { type: Number, default: 0 },
}, { timestamps: true });

// Language
const LanguageSchema = new mongoose.Schema({
  id:    { type: String, required: true, unique: true },
  name:  { type: String, required: true },
  level: { type: String, default: 'Fluent' },
  dots:  { type: Number, min: 1, max: 5, default: 3 },
  order: { type: Number, default: 0 },
}, { timestamps: true });

// Contact
const ContactSchema = new mongoose.Schema({
  id:    { type: String, required: true, unique: true },
  label: { type: String, required: true },
  value: { type: String, default: '' },
  href:  { type: String, default: '#' },
  order: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = {
  Experience: mongoose.model('Experience', ExperienceSchema),
  SkillGroup: mongoose.model('SkillGroup', SkillGroupSchema),
  Education:  mongoose.model('Education',  EducationSchema),
  Language:   mongoose.model('Language',   LanguageSchema),
  Contact:    mongoose.model('Contact',    ContactSchema),
};
