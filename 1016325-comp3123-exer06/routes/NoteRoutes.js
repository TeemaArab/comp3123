const express = require('express');
const router = express.Router();

const noteModel = require('../models/NotesModel.js');
//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save


router.post('/notes', (req, res) => {
    // Validate request
    if(!req.body.noteTitle) {
        return res.status(400).send({
            message: "Note title can not be empty"
        });
    }

    const note = new noteModel({
        noteTitle: req.body.noteTitle || "Untitled Note", 
        noteDescription: req.body.noteDescription,
        priority: req.body.priority,
        dateAdded: req.body.dateAdded,
        dateUpdated: req.body.dateUpdated
    });
    note.save()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({
        message: "An error  while savig the note"
    }));
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
router.get('/notes', (req, res) => {
    // Validate request
    noteModel.find()
    .then(notes => res.send(notes))
    .catch(err => res.status(500).send({
        message: "An error occurred while retrieving notes."
    }));

});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
router.get('/notes/:noteId', (req, res) => {
    // Validate request
    if(!req.params.noteId) {
        return res.status(400).send({
            message: "Note Id is required"
        });
    }
    noteModel.findById(req.params.noteId)
    .then(note => {
        if (!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.send(note);  // Return the found note
    })
    .catch(err => {
    
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.noteId
        });
    });
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
router.put('/notes/:noteId', (req, res) => {
    // Validate request - check if noteTitle is provided
    if (!req.body.noteTitle) {
        return res.status(400).send({
            message: "Note title cannot be empty"
        });
    }

    // Find the note by ID and update it
    noteModel.findByIdAndUpdate(req.params.noteId, {
        noteTitle: req.body.noteTitle,
        noteDescription: req.body.noteDescription,
        priority: req.body.priority,
        dateUpdated: Date.now() 
    }, { new: true })  
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }
            res.send(note);  
        })
        .catch(err => {
          
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.noteId
            });
        });
});


//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
router.delete('/notes/:noteId', (req, res) => {
    // Validate request
    if (!req.params.noteId) {
        return res.status(400).send({
            message: "Note Id is required"
        });
    }

// Find the note by ID and remove it
noteModel.findByIdAndRemove(req.params.noteId)
    .then(note => {
        if (!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.send({ message: "Note deleted successfully!" });
    })
    .catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.noteId
        });
    });
});

module.exports = router;
