const { Schema, Types } = require('mongoose');

const thoughtSchema = new Schema(
  {
   thoughtText: {
      type: String,
      default: () => new Types.ObjectId(),
    },
    username: {
      type: String,
      required: true,
    },
    reaction: {
      reaction: [reactionSchema],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = thoughtSchema;