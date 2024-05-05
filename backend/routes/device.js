const express = require('express');
const router = express.Router();
const { revokeAccess } = require('../controllers/device');

router.post('/revoke-access', revokeAccess);

module.exports = router;