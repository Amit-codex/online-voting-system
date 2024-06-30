const mongoose = require('mongoose');

const voteSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  candidate: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Vote = mongoose.model('Vote', voteSchema);

module.exports = Vote;
