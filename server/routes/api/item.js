const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')

//Item model
const Item = require('../../model/item')

// @route Get api/items
// @desc  Get all items
// @access Public
router.get('/', (req, res) => {
    Item.find()
        .sort({
            date: -1
        })
        .then(item => res.json(item))
})

// @route Post api/items
// @desc  Add items
// @access Private
router.post('/', (req, res) => {
    const {
        name
    } = req.body

    const newItem = new Item({
        name,
        completed: false
    })

    newItem.save().then(item => res.json(item))
})

// @route PUT api/items/:id
// @desc Update item
// @access Private
router.put('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => {
            if (item.completed === false) {
                item.completed = true

            } else {
                item.completed = false
            }

            item.save().then(upItem => res.json(upItem))
        }).catch(err => res.status(404).json({
            message: err.message,
            success: false
        }))
})

// @route Delete api/items/:id
// @desc  Delete item
// @access Private
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({
                success: true
            }))
            .catch(err => res.status(404).json({
                success: false
            }))
        )
})

module.exports = router