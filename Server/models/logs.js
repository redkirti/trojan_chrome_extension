const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logsSchema = new Schema({
  website: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  }
}, { timestamps: true });

const logs = mongoose.model('logs', logsSchema);
module.exports = logs;