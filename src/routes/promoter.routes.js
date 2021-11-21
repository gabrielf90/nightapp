import qr from 'qr-image'
import Busboy from 'busboy';
import bcrypt from 'bcryptjs';
import moment from 'moment';
import express from 'express';
import mongoose from 'mongoose';

import City from '../models/city.js';
import User from '../models/user.js';
import aws from '../services/aws.js';
import Genre from '../models/genre.js';
import Party from '../models/party.js';
import Ticket from '../models/ticket.js';
import AppValue from '../models/appValue.js';
import Promoter from '../models/promoter.js';
import Product from '../models/product.js'
import Category from '../models/category.js';
import CreditCard from '../models/creditCard.js';
import Restaurant from '../models/restaurant.js';
import UserTicket from '../models/relationship/userTicket.js';
import UserProduct from '../models/relationship/userProduct.js';
import RestaurantWork from '../models/relationship/userWork.js';



const router = express.Router();

import { criarEvento, statusTrabalhador, lerQRCODE } from '../function/database.function.js'
import { createConection } from '../services/asaas.js'
import UserWork from '../models/relationship/userWork.js';

//CRIAR EVENTO  //TESTADO
router.post('/event', async (req, res) => {
    try {
        const filtro = req.query.type

        let country
        if (req.body.country) {
            country = req.body.country
        } else {
            const promoter = await promoter.findById(req.body.promoterId)
            country = promoter.country
        }
        req.push(country)
        const executar = await criarEvento(req.body, filtro)

        res.status(executar.status).json(executar.message)
    } catch (err) {

        res.status(404).json(err.message)
    }

})

//CRIAR INGRESSOS  //TESTADO
router.post('/ticket', async (req, res) => {
    try {

        //CRIAR TICKET
        const ticket = await new Ticket({
            status: 'A',
            ...req.body,
        }).save();

        res.status(200).json({ ticket })
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
})

//CRIAR DRINKS  //TESTADO
router.post('/product', async (req, res) => {
    try {
        //CRIAR COMBO
        const combo = await new Product({
            status: "A",
            ...req.body,
        }).save()

        res.status(200).json({ combo })

    } catch (err) {
        res.status(404).json({ message: err.message })
    }
})

//VER TRABALHADORES
router.get('/work', async (req, res) => {
    try {
        const localId = req.query.localID

        const colaboradores = await UserWork.find({ localId })
        console.log(colaboradores)
        if (colaboradores.length == 0) { res.status(400).json({ message: "Nenhum colaborador encontrado" }) } else {
            res.status(200).json({ message: colaboradores })
        }
    } catch (err) {

        res.status(404).json({ message: err.message })
    }
})

//MUDAR STATUS DO TRABALHO
router.put('/work', async (req, res) => {
    try {
        const workId = req.query.workId
        if (!workId) { res.status(400).json({ message: "informe um trabalho válido" }) } else {
            const trabalho = await UserWork.findByIdAndUpdate(workId, {
                status: req.query.status
            })

            if (!trabalho) { res.status(400).json({ message: "Nenhum trabalho encontrado" }) } else {
                const work = await UserWork.findById(workId)
                res.status(200).json(work)
            }
        }
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
})

//LER QRCODE
router.get('/qrCode', async (req, res) => {
    try {
        const info = req.query

        const executar = lerQRCODE(info)

        res.status(executar.status).json(executar.message)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
})

//GERAR CORTESIA 
router.get('/qrCode', async (req, res) => {
    try {
        const gerarCortesia = await new UserTicket({
            ...req.body,
            userId: mongoose.Types.ObjectId()
        }).save()

        res.status(200).json(gerarCortesia._id)

    } catch (err) {
        res.status(404).json({ message: err.message })
    }
})

//VER SALDO
router.get('/balance/', async (req, res) => {
    try {
        const promoter = await Promoter.findById(req.query.promoterId)

        const balance = await createConection('/finance/getCurrentBalance', req.body, 'GET', promoter.access_token)

        res.status(balance.status).json(balance.message)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }

})

//VER EXTRATO
router.get('/statement', async (req, res) => {
    try {
        const promoter = await Promoter.findById(req.query.promoterId)

        const balance = await createConection('/financialTransactions', req.body, 'GET', promoter.access_token)

        res.status(balance.status).json(balance.message)
    } catch (err) {
        res.status(400).json(err.message)
    }
})

//VER SALDO A RECEBER
router.get('/fullbalance', async (req, res) => {
    try {
        const promoter = await Promoter.findById(req.query.promoterId)

        const balance = await createConection('/payments?status=CONFIRMED&billingType=CREDIT_CARD', req.body, 'GET')
        balance.resposta.data
        for (let i = 0; i < balance.length; i++) {

        }

        res.json()
    } catch (err) {
        res.status(400).json(err.message)
    }
})

//REALIZAR TRANSFERENCIAS
router.post('/transfers/', async (req, res) => {
    try {
        const promoter = Promoter.findById(req.params.id)

        const balance = await createConection('/finance/transfers', req.body, 'post', promoter.access_token)
        if (asaas.status != 200) {
            res.status(asaas.status).json(asaas.resposta.errors[0].description)
        }
        res.status(200).json(balance)
    } catch (err) {
        res.status(400).json(err.message)
    }

})

//INGRESSOS VENDIDOS POR LOTE 
router.post('/transfers/:id', async (req, res) => {
    try {

        const ticketVendido = await Ticket.find({ partyId: req.query.partyId })

        res.status(200).json(ticketVendido.length)

    } catch (err) {
        res.status(400).json(err.message)
    }

})

//EVENTOS DO PROMOTOR
router.post('/transfers/:id', async (req, res) => {
    try {

        const eventos = await Party.find({ promoterId: req.query.promoterId })

        res.status(200).json(ticketVendido.length)

    } catch (err) {
        res.status(400).json(err.message)
    }

})

//INGRESSOS VENTIDOS TOTAL

//INGRESSOS RESTANTES POR LOTE

//INGRESSOS RESTANTES TOTAL

//CADASTRAR DOCUMENTOS

//VER STATUS DOS DOCUMENTOS

//PRODUTOS VENDIDOS

export default router