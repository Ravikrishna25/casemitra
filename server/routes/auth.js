const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../models');
const secret = K7mC46ByU6d8n5zfG4EN3Adjxuin9eNlakK0MhtZ3diw4zRl9MwbBwrey1jF7k4P;

// Register route
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 8);
    const user = await db.User.create({ username, password: hashedPassword });
    res.json(user);
});

// Register admin route
router.post('/register-admin', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 8);
    const user = await db.User.create({ username, password: hashedPassword, role: 'admin' });
    res.json(user);
});

// Login route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await db.User.findOne({ where: { username } });
    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).send('Invalid credentials');
    }
    const token = jwt.sign({ id: user.id, role: user.role }, secret, { expiresIn: '1h' });
    res.json({ token });
});

module.exports = router;
