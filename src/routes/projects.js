const router = require('express').Router();
const Project = require('../models/Project');

// GET all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ order: 1, createdAt: 1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET single project
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findOne({ id: req.params.id });
    if (!project) return res.status(404).json({ error: 'Project not found' });
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create project
router.post('/', async (req, res) => {
  try {
    const count = await Project.countDocuments();
    const project = await Project.create({ ...req.body, order: req.body.order ?? count });
    res.status(201).json(project);
  } catch (err) {
    if (err.code === 11000) return res.status(400).json({ error: 'Project ID already exists' });
    res.status(400).json({ error: err.message });
  }
});

// PUT update project
router.put('/:id', async (req, res) => {
  try {
    const project = await Project.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );
    if (!project) return res.status(404).json({ error: 'Project not found' });
    res.json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE project
router.delete('/:id', async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({ id: req.params.id });
    if (!project) return res.status(404).json({ error: 'Project not found' });
    res.json({ message: 'Project deleted', id: req.params.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PATCH reorder projects
router.patch('/reorder', async (req, res) => {
  try {
    const { order } = req.body; // array of { id, order }
    await Promise.all(order.map(item => Project.updateOne({ id: item.id }, { order: item.order })));
    res.json({ message: 'Reordered successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
