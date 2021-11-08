const express = require('express');
const mongoose = require('../utils/db');
const Board = require('../models/Board')

const boardRouter = express.Router();



// routes


boardRouter.post('/', async (req, res)=>{
    const board = new Board({
        name: req.body.name,
        description: req.body.description
    });

    try {
        const savedBoard = await board.save();
        res.json(savedBoard);
    } catch (error) {
        res.json({error: error});
    }

});


boardRouter.get('/', async (req, res)=>{
    try {
        const boards = await Board.find();
        res.json(boards)
    } catch (error) {
        res.json({error: error});
    }
});


boardRouter.get('/:boardID', async(req, res)=>{
    try {
        const board = await Board.findById(req.params.boardID);
        res.json(board)
    } catch (error) {
        res.json({error: error})
    }
    
});

boardRouter.delete('/:boardID', async(req, res)=>{
    try {
        const removedBoard = await Board.deleteOne ({_id:req.params.boardID});
        res.json(removedBoard)
    } catch (error) {
        res.json({error: error})
    }
    
});

boardRouter.put('/:boardID', async(req, res)=>{
    try {
        const updatedBoard = await Board.updateOne (
            {_id:req.params.boardID},
            {name: req.body.name, description:req.body.description}
        );
        res.json(updatedBoard)
    } catch (error) {
        res.json({error: error})
    }
    
});

module.exports = boardRouter