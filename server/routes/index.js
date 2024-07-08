const express = require('express');
const router = express.Router();

const authRoutes = require('./auth');
const firmRoutes = require('./firm');
const adminCourtRoutes = require('./courtAdmin');
const adminLitigationCodeRoutes = require('./litigationCodeAdmin');
const adminState = require('./adminState');

router.use('/auth', authRoutes);
router.use('/admin/firms', firmRoutes);
router.use('/admin/courts', adminCourtRoutes);
router.use('/admin/litigationcodes',adminLitigationCodeRoutes);
router.use('/admin/states',adminState);

module.exports = router;
