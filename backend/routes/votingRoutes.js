const express = require('express');
const { castVote, getResults } = require('../controllers/votingController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, castVote);
router.get('/results', protect, getResults);

module.exports = router;
