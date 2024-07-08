// routes/state.js
const express = require('express');
const router = express.Router();
const { State } = require('../models');

// Create a new state
router.post('/states', async (req, res) => {
    const { stateName } = req.body;

    try {
        // Check if the state name already exists
        const existingState = await State.findOne({ where: { stateName } });

        if (existingState) {
            return res.status(400).json({ error: 'State name already exists' });
        }

        // Create a new state if the name doesn't exist
        const state = await State.create({ stateName });
        res.status(201).json(state);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all states
router.get('/states', async (req, res) => {
    try {
        const states = await State.findAll();
        res.status(200).json(states);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get a state by ID
router.get('/states/:id', async (req, res) => {
    try {
        const state = await State.findByPk(req.params.id);
        if (state) {
            res.status(200).json(state);
        } else {
            res.status(404).json({ error: 'State not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Update a state by ID
router.put('/states/:id', async (req, res) => {
    try {
        const state = await State.findByPk(req.params.id);
        if (state) {
            await state.update(req.body);
            res.status(200).json(state);
        } else {
            res.status(404).json({ error: 'State not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete a state by ID
router.delete('/states/:id', async (req, res) => {
    try {
        const state = await State.findByPk(req.params.id);
        if (state) {
            await state.destroy();
            res.status(200).json({ message: 'State deleted successfully' });
        } else {
            res.status(404).json({ error: 'State not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
