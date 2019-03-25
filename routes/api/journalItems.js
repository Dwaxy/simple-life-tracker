const express = require('express')
const router = express.Router()

const JournalItem = require('../../models/JournalItems')

// @rout   GET api/journalItems
// @dec    Get All Journal Items
// @access Public
//! cahnge needs auth

router.get('/', (req, res) => {
  JournalItem.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
})

// @rout   POST api/journalItems
// @dec    Create a Journal Item
// @access Public
//! cahnge needs auth

router.post('/', (req, res) => {
  const newItem = new JournalItem({
    input: req.body.input
  })

  newItem.save().then(item => res.json(item))
})


// @rout   DELETE api/journalItems/:id
// @dec    Create a Journal Item
// @access Public
//! cahnge needs auth

router.delete('/:id', (req, res) => {
  JournalItem.findById(req.params.id)
    .then(item => item.remove()
      .then(() => res.json({success: true}))
    )
  .catch(err => res.status(404).json({success: false}))
})

module.exports = router