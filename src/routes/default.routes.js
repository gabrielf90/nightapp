import Busboy from 'busboy';
import bcrypt from 'bcrypt';
import moment from 'moment';
import express from 'express';
import mongoose from 'mongoose';

import User from '../models/user.js';
import aws from '../services/aws.js';
import Genre from '../models/genre.js';
import Party from '../models/party.js';
import Ticket from '../models/ticket.js';
import AppValue from '../models/appValue.js';
import Promoter from '../models/promoter.js';
import Category from '../models/category.js';
import UserProduct from '../models/relationship/userProduct.js';
import CreditCard from '../models/creditCard.js';
import UserTicket from '../models/relationship/userTicket.js';
import City from '../models/city.js';

import { criarPromoter, criarUser, login, editarModel } from '../function/database.function.js'

const router = express.Router();


//CRIAR CONTA
router.post('/signup', async (req, res) => {
    try {
        const filtro = req.query.type
        
        const executar = filtro == "promoter"?await criarPromoter(req.body):await criarUser(req.body)

        executar.status == 200 ? res.status(200).json(executar) : res.status(400).json(executar)

    } catch (err) {
        res.status(400).json({ message: err.message })
    }

})

//LOGIN
router.post('/login', async (req, res) => {
    try {
        const filtro = req.query.type

        const executar = await login(req.body, filtro)
        console.log(executar)

        executar.status == 200 ? res.status(200).json(executar) : res.status(400).json(executar.message)

    } catch (err) {
        res.status(400).json({ message: err.message })
    }

})

//EDITAR INFROMAÇÕES
router.put('/update', async (req, res) => {
    try {
        const filtro = req.query.type

        const executar = await editarModel(req.body, filtro)

        executar.status == 200 ? res.status(200).json(executar) : res.status(400).json(executar.message)

    } catch (err) {
        res.status(400).json({ message: err.message })
    }

})



export default router