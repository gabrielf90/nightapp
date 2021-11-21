import qr from 'qr-image'
import Busboy from 'busboy';
import bcrypt from 'bcrypt';
import moment from 'moment';
import express from 'express';
import mongoose from 'mongoose';

import User from '../models/user.js';
import aws from '../services/aws.js';
import Genre from '../models/genre.js';
import Party from '../models/party.js';
import Product from '../models/product.js';
import Ticket from '../models/ticket.js';
import AppValue from '../models/appValue.js';
import Promoter from '../models/promoter.js';
import Category from '../models/category.js';
import UserProduct from '../models/relationship/userProduct.js';
import CreditCard from '../models/creditCard.js';
import UserTicket from '../models/relationship/userTicket.js';
import UserWork from '../models/relationship/userWork.js';

import { createConection } from '../services/asaas.js'
import { simplify, createPhoto } from '../function/function.js'
import { carrinho, finalizarPix, finalizarCartao, criarItens } from '../function/database.function.js'

const router = express.Router();

//INGRESSOS DO USUARIO
router.get('/tickets', async (req, res) => {
    try {
        const userTickets = await UserTicket.find({ userId: req.query.id })

        res.status(200).json({ userTickets })
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
})

//DETALHES DO INGRESSO
router.get('/ticket', async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.id)
        res.status(200).json({ ticket })
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
})

//GERAR QRCODE
router.get('/ticket/qrCode', async (req, res) => {
    try {
        const id = req.query.id
        const qrCode = qr.image(id, { type: 'svg' })

        res.type("svg")

        qrCode.pipe(res)

    } catch (err) {
        res.status(404).json({ message: err.message })
    }
})

//VER EVENTOS QUE POSSUI PRODUTO
router.get('/product/event/all', async (req, res) => {
    try {
        const userProduct = await userProduct.find({ userId: req.params.id })

        let resposta = []

        for (let i = 0; i < userProduct.length; i++) {
            const productLocal = userProduct[i].localId
            let local = ''
            if (productLocal.name == "P") {
                local = await Party.findById(productLocal._id).select('name photo')
            } else {
                local = await Restaurant.findById(productLocal._id).select('name photo')
            }
            resposta.push(local)
        }
        const filtred = resposta.filter((este, i) => resposta.indexOf(este) === i);

        res.status(200).json({ filtred })
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
})

//VER PRODUTOS DE UM EVENTO ESPECIFICO
router.get('/product/event', async (req, res) => {
    try {
        const localId = req.query.localId
        const userProduct = await UserProduct.find({ userId: req.query.userId })

        let resposta = []

        for (let i = 0; i < userProduct.length; i++) {
            const productLocal = userProduct[i].localId._id
            let local = ''

            if (productLocal == localId) {
                resposta.push(userProduct[i])
            }
        }

        res.status(200).json({ resposta })
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
})

//CADASTRAR INGRESSO
router.post('/ticket/signup', async (req, res) => {
    try {

        const ticketId = req.query.ticketId
        const userId = req.query.userId
        const _id = mongoose.Types.ObjectId
        const ticket = await UserTicket.findByIdAndUpdate(ticketId, {
            userId,
            _id
        })
        res.status(200).json(ticket)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
})

//CADASTRAR PRODUTO
router.post('/drinks/signup', async (req, res) => {
    try {

        const drinkId = req.query.productId
        const userId = req.query.userId
        const _id = mongoose.Types.ObjectId
        const drink = await UserProduct.findByIdAndUpdate(drinkId, {
            userId,
            _id
        })
        res.status(200).json(drink)

    } catch (err) {
        res.status(404).json({ message: err.message })
    }
})

//VER CARTÕES DO USUARIO
router.get('/creditCard/:id', async (req, res) => {
    try {
        const id = req.params.id
        const creditCard = await CreditCard.find({ userId: id })

        res.status(200).json(creditCard)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
})

//REGISTRAR PARA TRABALHAR
router.post('/work', async (req, res) => {
    try {
        const rc = req.query.rc

        let event
        if (req.query.type == 'PARTY') { event = await Party.findOne({ rc }) }
        if (req.query.type == 'RESTAURANTE') { event = await Restaurant.findOne({ rc }) }
        if (!event) { res.status(400).json({ message: 'Nenhum evento encontrado' }) } else {

            const novoVinculo = await new UserWork({
                status: "A",
                userId: req.query.userId,
                localId: event._id,
                localType: req.query.type
            }).save()

            res.status(200).json(novoVinculo)
        }


    } catch (err) {
        res.status(404).json({ message: err.message })
    }
})

//REGISTRAR PARA TRABALHAR
router.get('/work', async (req, res) => {
    try {
        const userId = req.query.userId
        if (!userId) { res.status(400).json({ message: "informe um usuário válido" }) } else {
            const trabalhos = await UserWork.find({ userId })

            if (!trabalhos) { res.status(400).json({ message: "Nenhum trabalho encontrado" }) } else {
                res.status(200).json(trabalhos)
            }
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
            const verificarTrabalho = await UserWork.findById(workId)
            if (verificarTrabalho.status == "C") {
                res.status(400).json({ message: "Trabalho desativado pelo evento, por favor entre em contato com o mesmo" })
            } else {
                const trabalho = await UserWork.findByIdAndUpdate(workId, {
                    status: req.query.status
                })

                if (!trabalho) { res.status(400).json({ message: "Nenhum trabalho encontrado" }) } else {
                    const work = await UserWork.findById(workId)
                    res.status(200).json(work)
                }
            }
        }





    } catch (err) {
        res.status(404).json({ message: err.message })
    }
})

//APAGAR TRABALHO
router.delete('/work', async (req, res) => {
    try {
        const workId = req.query.workId
        if (!workId) { res.status(400).json({ message: "informe um trabalho válido" }) } else {

            const trabalho = await UserWork.findByIdAndDelete(workId)

            if (!trabalho) { res.status(400).json({ message: "Nenhum trabalho encontrado" }) } else {
                res.status(200).json("Trabalho apagado com sucesso")
            }
        }


    } catch (err) {
        res.status(404).json({ message: err.message })
    }
})

//GERAR CARRINHO
router.post('/wallet', async (req, res) => {
    try {

        const gerarCarrinho = await carrinho(req.body)

        res.json(gerarCarrinho)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
})

//GERAR PARCELAS
router.get('/paymentmethod', async (req, res) => {
    try {
        const valor = parseFloat(req.query.totalValue)
        const taxaApp = parseFloat(req.query.appValue)
        let pagamento = {
            installment: [],
            pix: []
        }
        pagamento.installment.push({ numInstallment: 1, value: valor.toFixed(2), message: "Sem juros" })
        pagamento.installment.push({ numInstallment: 2, value: (valor / 2).toFixed(2), message: "Sem juros" })
        pagamento.installment.push({ numInstallment: 3, value: (valor / 3).toFixed(2), message: "Sem juros" })
        pagamento.installment.push({ numInstallment: 4, value: (valor / 4).toFixed(2), message: "Sem juros" })
        pagamento.installment.push({ numInstallment: 5, value: (valor / 5).toFixed(2), message: "Sem juros" })
        pagamento.installment.push({ numInstallment: 6, value: (valor / 6).toFixed(2), message: "Sem juros" })
        pagamento.installment.push({ numInstallment: 7, value: (valor / 7 * 0.03).toFixed(2), message: "Com juros" })
        pagamento.installment.push({ numInstallment: 8, value: (valor / 8 * 0.04).toFixed(2), message: "Com juros" })
        pagamento.installment.push({ numInstallment: 9, value: (valor / 9 * 0.05).toFixed(2), message: "Com juros" })
        pagamento.installment.push({ numInstallment: 10, value: (valor / 10 * 0.06).toFixed(2), message: "Com juros" })

        if (valor >= 200) {
            const pix = valor - taxaApp + taxaApp * 0.95
            const pix2 = {
                value: pix,
                message: "5% off na taxa do aplicativo para compras no pix"
            }
            pagamento.pix.push(pix2)
        } else {
            const pix2 = {
                value: valor,
                message: "Ingresso liberado na hora"
            }
            pagamento.pix = pix2
        }

        res.json(pagamento)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
})

//FINALIZAR COMPRA
router.post('/payment', async (req, res) => {
    try {
        const metodoDePagamento = req.body.payment.billingType
        let finalizar
        if (metodoDePagamento == "PIX") { finalizar = await finalizarPix(req.body) }
        else { finalizar = await finalizarCartao(req.body) }
        if (finalizar.status != 200) {
            res.status(finalizar.status).json({ message: finalizar.message })
        } else {
            const criar = await criarItens(req.body, finalizar.paymentId)
            if (metodoDePagamento == "PIX") { res.status(finalizar.status).json({ qrCode: finalizar.qrCode, pixCode: finalizar.pixCode }) } else {
                res.status(criar.status).json({ message: criar.message })
            }
        }
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
})

//FINALIZAR COMPRA
router.post('/payment2', async (req, res) => {
    try {

        const criar = await criarItens(req.body)

        res.json(criar)

    } catch (err) {
        res.status(404).json({ message: err.message })
    }
})


export default router;