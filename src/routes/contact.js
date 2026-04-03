const router = require('express').Router();
const { Contact } = require('../models/index');

router.get('/', async (req, res) => {
  try { res.json(await Contact.find().sort({ order: 1 })); }
  catch (err) { res.status(500).json({ error: err.message }); }
});
router.post('/', async (req, res) => {
  try {
    const count = await Contact.countDocuments();
    res.status(201).json(await Contact.create({ ...req.body, order: req.body.order ?? count }));
  } catch (err) { res.status(400).json({ error: err.message }); }
});
router.put('/:id', async (req, res) => {
  try {
    const doc = await Contact.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
    if (!doc) return res.status(404).json({ error: 'Not found' });
    res.json(doc);
  } catch (err) { res.status(400).json({ error: err.message }); }
});
router.delete('/:id', async (req, res) => {
  try {
    await Contact.findOneAndDelete({ id: req.params.id });
    res.json({ message: 'Deleted', id: req.params.id });
  } catch (err) { res.status(500).json({ error: err.message }); }
});
module.exports = router;
