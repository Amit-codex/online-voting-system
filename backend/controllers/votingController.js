const asyncHandler = require('express-async-handler');
const Vote = require('../models/Vote');

// @desc Cast a vote
// @route POST /api/voting
// @access Private
const castVote = asyncHandler(async (req, res) => {
  const { candidate } = req.body;
  const userId = req.user._id;

  const voteExists = await Vote.findOne({ user: userId });

  if (voteExists) {
    res.status(400);
    throw new Error('User has already voted');
  }

  const vote = await Vote.create({
    user: userId,
    candidate,
  });

  res.status(201).json({
    message: 'Vote cast successfully',
    vote,
  });
});

// @desc Get voting results
// @route GET /api/voting/results
// @access Private
const getResults = asyncHandler(async (req, res) => {
  const votes = await Vote.find({});

  res.json(votes);
});

module.exports = {
  castVote,
  getResults,
};
