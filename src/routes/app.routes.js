import Busboy from 'busboy';

import moment from 'moment';
import express from 'express';
import mongoose from 'mongoose';
import City from '../models/city.js'
import aws from '../services/aws.js';
import Genre from '../models/genre.js';
import Party from '../models/party.js';
import Ticket from '../models/ticket.js';
import UserTicket from '../models/relationship/userTicket.js'
import Product from '../models/product.js';
import Category from '../models/category.js';
import Restaurant from '../models/restaurant.js';
import RestaurantGenre from '../models/restaurantGenre.js';

import { simplify, cidade, genero, cidadeGenero, filtrarData } from '../function/function.js'
import { buscarGenerosFesta, buscarGenerosRestaurante, buscarEvento, filtrarEvento, realizarBusca } from '../function/database.function.js'

const router = express.Router();

//LISTAR CATEGORIAS //FINALIZADO 
router.get('/category', async (req, res) => {
    try {

        const category = await Category.find().select('name photo _id') //Buscar categorias e selecionar nome e foto

        res.status(200).json(category)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//LISTAR GENEROS  //FINALIZADO
router.get('/genre', async (req, res) => {
    try {

        if (!req.query.category) {

            res.status(400).json({ message: "Escolha uma categoria válida e tente novamente" })

        } else {

            const category = await Category.findById(req.query.category).select('name')
            const filtro = category.name

            const buscarGeneros = {
                Show: buscarGenerosFesta,
                Restaurante: buscarGenerosRestaurante,
                Bar: buscarGenerosRestaurante,
                Balada: buscarGenerosFesta,
                Eventos: buscarGenerosFesta,

            }

            const buscar = await buscarGeneros[filtro]()

            res.status(buscar.status).json(buscar.message)
        }

    } catch (err) {
        res.status(404).json({ message: err.message })
    }
})

//LISTAR CIDADES //FINALIZADO 
router.get('/city', async (req, res) => {
    try {
        const city = await City.find().select('name _id')

        res.status(200).json(city)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
})

//CARDAPIO LOCAL ESCOLHIDO //FINALIZADO
router.get('/products', async (req, res) => {
    try {
        const id = req.query.localId
        const produtos = await Product.find({ localId: id })
        if (produtos.length > 0) {
            res.status(200).json(produtos)
        } else {
            res.status(400).json({ message: "Nenhum produto encontrado" })
        }

    } catch (err) {
        res.status(404).json({ message: err.message })
    }
})

//TODOS OS EVENTOS  //FINALIZADO
router.get('/', async (req, res) => {
    try {

        const query = req.query
        const buscar = await buscarEvento(query)

        res.status(buscar.status).json(buscar.message)

    } catch (err) {
        res.status(404).json({ message: err.message })
    }
})

//FILTRAR FESTAS  //FINALIZADO
router.get('/filter', async (req, res) => {
    try {

        const requisicao = req.query
        const filtrar = await filtrarEvento(requisicao)

        if (filtrar) {
            res.status(filtrar.status).json(filtrar.message)
        } else {
            res.status(400).json({ message: "Nenhum evento encontrado" })
        }

    } catch (err) {
        res.status(404).json({ message: err.message })
    }
})

//SEARCH BY NAME //FINALIZADO
router.post('/search', async (req, res) => {
    try {

        const buscar = await realizarBusca(req.body, req.query)

        res.status(buscar.status).json(buscar.message)

    } catch (err) {
        res.status(404).json({ message: err.message })
    }
})

//DETALHES DA FESTA  //FINALIZADO
router.get('/event', async (req, res) => {
    try {
        const id = req.query.eventId
        if (!id) {
            res.status(400).json({ message: "Escolha um evento válido e tente novamente" })
        }
        else if (!req.query.categoryId) {

            res.status(400).json({ message: "Escolha uma categoria válida e tente novamente" })

        } else {

            const category = await Category.findById(req.query.categoryId).select('name')

            if (category.name == "Restaurante" || category.name == "Bar") {

                const event = await Restaurant.findById(id).select('-tags -country')

                if (event) {
                    res.status(200).json(event)
                } else {
                    res.status(400).json({ message: "Nenhum local encontrado, tente novamente" })
                }

            } else {

                const party = await Party.findById(id).select('-tags -country')
                if (party) {
                    const filtrar = filtrarData(party)
                    res.status(200).json(filtrar)
                } else {
                    res.status(400).json({ message: "Nenhum evento encontrado, tente novamente" })
                }
            }
        }
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
})

//INGRESSOS DA FESTA //DOCUMENTADO
router.get('/tickets', async (req, res) => {
    try {
        const id = req.query.partyId
        const ingresso = await Ticket.find({ partyId: id })
        const time = moment()
        const filtred = ingresso.filter((value) => {
            if (moment(value.dataEnd).isAfter(time) && moment(value.dataStart).isBefore(time)) {
                return value
            }
        })
        const token = filtred[0].token
        const buyedTicket = await UserTicket.find({ ticketId: filtred[0]._id })


            for (let i = 0; i < token.length; i++) {
                let id = token[i]._id
                const buyedFilter = buyedTicket.filter((value) => {
                    if (value.tokenId.toHexString() === id.toHexString()) {
                        return value
                    }
                })
    
                if (buyedFilter.length >= token[i].qnt) {
                    token[i].qnt = 0
                } else {
                    token[i].qnt -= buyedFilter.length
                }
            }
    
            const final = token.filter((value) => {
                if (value.qnt > 0) {
                    return value
                }
            })
    
            if (final.length == 0) {
                res.status(200).json('Ingressos esgotados. Aguarde o próximo lote')
            } else {
                res.status(200).json(final)
            }


    } catch (err) {
        res.status(404).json({message:err.message})
    }
})

//ENVIAR FOTO PARA AWS //DOCUMENTADO
router.post('/photo', async (req, res) => {

    var busboy = new Busboy({ headers: req.headers });
    busboy.on('finish', async () => {
        try {

            console.log(req.body)
            if (req.query.delete) {
                const deletar = await aws.deleteFileS3(req.query.delete)
            }
            let errors = [];
            const userId = mongoose.Types.ObjectId();
            let photo = '';
            let photoLocation = ''
            let photoKey = ''
            if (req.files) {
                const file = req.files.photo;

                const nameParts = file.name.split('.');
                const fileName = `${userId}.${nameParts[nameParts.length - 1]}`;
                photo = `${req.query.model}/${fileName}`;

                const response = await aws.uploadToS3(
                    file,
                    photo
                );

                photoKey = response.message.Key;
                photoLocation = response.message.Location
                if (response.error) {
                    errors.push({ error: true, message: response.message.message });
                }
            }

            if (errors.length > 0) {
                res.status(400).json(errors[0]);
                return false;
            }

            const resp = {
                location: photoLocation,
                key: photoKey
            }
            console.log(resp)
            res.status(200).json(resp);
        } catch (err) {
            res.status(404).json({message: err.message });
        }
    });
    req.pipe(busboy);
})

//ENVIAR FOTO PARA AWS //DOCUMENTADO
router.delete('/photo', async (req, res) => {
    try {
        const deletar = await aws.deleteFileS3(req.query.delete)
        res.status(200).json({ message: "Imagem apagada com sucesso" })
    }
    catch (err) {
        res.status(404).json({ error: true, message: err.message });
    }
})
export default router