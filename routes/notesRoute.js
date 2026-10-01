const express = require("express");
const router = express.Router();
const connection = require("../config/connect")

// Get all notes 
router.get('/', async (req, res) => {
    try {
        const [notes] = await connection.query('select * from notes')
        res.json(notes)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

//Get note by id
router.get('/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const [note] = await connection.query('SELECT * FROM notes WHERE id = ?', [userId])
        res.json(note)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});


// Post or add a new note 
router.post('/', async (req, res) => {
    try {
        const { title, author, url, content, categories } = req.body
        const [result] = await connection.query('INSERT INTO notes (title, author, url, content, categories) VALUES(?,?,?,?,?)', [title, author, url, content, categories])

        res.status(201).json({
            message: "Note created successfully",
            noteId: result.insertId,
            data: { title, author, url, content, categories }
        });

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});


// delete note 
router.delete('/:id', async (req, res) => {
    try {
        const noteId = req.params.id;

        const [result] = await connection.query('DELETE FROM notes WHERE id = ?', [noteId]);

        // Check if a row was actually deleted
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Note not found' });
        }

        res.json({ message: 'Note deleted successfully', affectedRows: result.affectedRows });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error', error: err.message });
    }
});

module.exports = router