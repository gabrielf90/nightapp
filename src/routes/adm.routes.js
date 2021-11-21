import express from 'express';
import mongoose from 'mongoose';
import Category from '../models/category.js'
import Genre from '../models/genre.js'
import AppValue from '../models/appValue.js'
import promoter from '../models/promoter.js';
import restaurantGenre from '../models/restaurantGenre.js'

const router = express.Router();

//CREATE CATEGORY
router.post('/category', async (req, res) => {
    try {    
        const category = await new Category({
            ...req.body,
        }).save();

        res.status(200).json(category)
    } catch (err) {
        res.status(404).json({ message: err.message})
    }

})

//CREATE Genre
router.post('/genre', async (req, res) => {
    try {
        const genre = await new Genre({
            ...req.body,
        }).save();

        res.status(200).json(genre)
    } catch (err) {
        res.status(404).json({ message: err.message})
    }

})

//CREATE restaurantGenre
router.post('/restaurantGenre', async (req, res) => {
    try {
        const genre = await new restaurantGenre({
            ...req.body,
        }).save();

        res.status(200).json(genre)
    } catch (err) {
        res.status(404).json({ message: err.message})
    }

})

//Gerenciar taxa do aplicativo
router.post('/appvalue', async (req, res) => {
    try {
        const appValue = await AppValue.findOneAndUpdate({
            ...req.body,
        })
            res.status(200).json(appValue)
               
    } catch (err) {
        res.status(404).json({ message: err.message})
    }

})
export default router;