const mongoose = require('mongoose')
const Schema = mongoose.Schema

const JournalItemSchema = new Schema({
  input: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = JournalItem = mongoose.model('journalItem', JournalItemSchema);