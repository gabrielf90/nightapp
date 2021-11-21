import bcrypt from 'bcrypt'
import User from '../models/user.js';
import aws from '../services/aws.js';
import Genre from '../models/genre.js';
import Party from '../models/party.js';
import moment from 'moment'
import mongoose from 'mongoose';

import City from '../models/city.js';
import Ticket from '../models/ticket.js';
import AppValue from '../models/appValue.js';
import Promoter from '../models/promoter.js';
import Product from '../models/product.js';
import Category from '../models/category.js';
import CreditCard from '../models/creditCard.js';
import Restaurant from '../models/restaurant.js';
import RestaurantGenre from '../models/restaurantGenre.js';
import UserTicket from '../models/relationship/userTicket.js';
import UserProduct from '../models/relationship/userProduct.js';

import { simplify, cidade, genero, cidadeGenero, filtrarData, gerarRC } from '../function/function.js'
import { createConection } from '../services/asaas.js'

export const buscarFestas = async (categoryId) => {
    try {


        const festas = await Party.find().select(' -tags -promoterId -registerDate -__v  ')

        const filtro = festas.filter((value) => {
            if (value.category._id == categoryId) {
                return value
            }
        })

        const filtrar = await filtrarData(filtro)

        const resposta = {
            status: 200,
            message: filtrar
        }
        return resposta


    } catch (err) {
        const resposta = {
            status: 404,
            message: err.message
        }
        return resposta

    }
}

export const buscarRestaurante = async (categoryId) => {
    try {

        const restaurant = await Restaurant.find().select(' -tags -promoterId -registerDate -__v ')

        const filtro = restaurant.filter((value) => {
            if (value.category._id == categoryId) {
                return value
            }
        })
        const filtrarStatus = filtro.filter((value) => {
            if (value.status == "A") {
                return value
            }
        })

        const resposta = {
            status: 200,
            message: filtrarStatus
        }
        return resposta


    } catch (err) {
        const resposta = {
            status: 404,
            message: err.message
        }
        return resposta
    }




}

export const buscarGenerosFesta = async (country) => {
    try {
        const generos = await Genre.find()

        const resposta = {
            status: 200,
            message: generos
        }
        return resposta

    } catch (err) {
        const resposta = {
            status: 404,
            message: err.message
        }
        return resposta
    }

}

export const buscarGenerosRestaurante = async (country) => {
    try {
        const generos = await RestaurantGenre.find()

        const resposta = {
            status: 200,
            message: generos
        }
        return resposta

    } catch (err) {
        const resposta = {
            status: 404,
            message: err.message
        }
        return resposta
    }

}

export const buscarEvento = async (req) => {
    try {

        if (!req.categoryId) {
            const resposta = {
                status: 400,
                message: "Escolha uma categoria válida e tente novamente"
            }
            return resposta
        } else {
            const category = await Category.findById(req.categoryId).select('name')
            let buscar = []
            if (!category) {
                const resposta = {
                    status: 400,
                    message: "Escolha uma categoria válida e tente novamente"
                }
                return resposta
            }
            const buscarEventos = {
                Show: buscarFestas,
                Restaurante: buscarRestaurante,
                Bar: buscarRestaurante,
                Balada: buscarFestas,
                Eventos: buscarFestas,
            }

            buscar = await buscarEventos[category.name](req.categoryId)
            if (buscar.message.length > 0) {
                const resposta = {
                    status: buscar.status,
                    message: buscar.message
                }
                return resposta
            } else {
                const resposta = {
                    status: 200,
                    message: "Nenhum evento encontrado"
                }
                return resposta
            }

        }

    } catch (err) {
        const resposta = {
            status: 404,
            message: err.message
        }
        return resposta
    }

}

export const filtrarEvento = async (req) => {
    try {
        const eventos = await buscarEvento(req)
        if (eventos.status == 400) {
            return eventos
        } else {
            const filtro = req.filter
            const filtros = {
                city: cidade,
                genre: genero,
                cityGenre: cidadeGenero,
            }
            const filtrar = await filtros[filtro](eventos.message, req)

            const resposta = {
                status: 200,
                message: filtrar
            }
            return resposta
        }
    } catch (err) {
        const resposta = {
            status: 404,
            message: err.message
        }
        return resposta
    }

}

export const realizarBusca = async (body, req) => {
    try {

        if (!req.categoryId) {

            const resposta = {
                status: 400,
                message: "Escolha uma categoria válida e tente novamente"
            }
            return resposta

        } else {
            const category = await Category.findById(req.categoryId).select('name')
            const name = category.name



            let search = body.search
            search = simplify(search)

            if (name == "Restaurante" || name == "Bar") {
                const event = await Restaurant.find({ tags: { $all: search } })

                const filtro = event.filter((value) => {
                    if (value.type == category.name.toUpperCase()) {
                        return value
                    }
                    const filtrarStatus = filtro.filter((value) => {
                        if (value.status == "A") {
                            return value
                        }
                    })
                })

                if (filtrarStatus.length > 0) {
                    const resposta = {
                        status: 200,
                        message: filtro
                    }
                    return resposta
                }
                else {
                    const resposta = {
                        status: 400,
                        message: "Nenhum local encontrado"
                    }
                    return resposta
                }


            } else {
                console.log("entrou")
                console.log(search)
                const party = await Party.find({ $tags: { $all: ["BUTECO"] } }).select("-tags -registerDate")
                const filtrar = await filtrarData(party)
                console.log(filtrar)
                if (filtrar.length > 0) {
                    const resposta = {
                        status: 200,
                        message: filtrar
                    }
                    return resposta
                }
                else {
                    const resposta = {
                        status: 400,
                        message: "Nenhum evento encontrado"
                    }
                    return resposta
                }

            }
        }
    } catch (err) {
        const resposta = {
            status: 404,
            message: err.message
        }
        return resposta
    }
}

export const criarPromoter = async (req) => {
    try {
        const { email, password } = req
        const promoter = await Promoter.findOne({ email })

        if (promoter) {
            const resposta = {
                status: 400,
                message: "email já utilizado"
            }
            return resposta
        } else {
            //CRIAR CONTA ASAAS
            const asaas = await createConection('/accounts', req,)
            if (asaas.status != 200) {
                const resposta = {
                    status: asaas.status,
                    message: asaas.resposta
                }
                return resposta

            } else {

                const walletId = asaas.resposta.walletId
                const access_token = asaas.resposta.apiKey

                //CRIAR CONTA
                const password = await bcrypt.hash(req.password, 10)
                const promoter = await new Promoter({
                    ...req,
                    password,
                    walletId,
                    access_token
                }).save()

                //RESPOSTA QUE SERÁ ENVIADA PARA O FRONTEND
                const resposta = {
                    status: 200,
                    message: promoter
                }
                return resposta
            }
        }

    } catch (err) {
        const resposta = {
            status: 404,
            message: err.message
        }
        return resposta
    }



}

export const criarUser = async (req) => {
    try {
        //VERIFICAR SE USUARIO EXISTE 
        const { email } = req
        const user = await User.findOne({
            email
        })

        if (user) {
            const resposta = ({
                status: 400,
                message: "Email já utilizado"
            })
            return resposta
        } else {
            //CRIAR USUARIO NO ASAAS   
            const asaas = await createConection('/customers', req)
            if (asaas.status != 200) {
                const resposta = ({
                    status: asaas.status,
                    message: asaas
                })
                return resposta
            } else {

                //CRIAR USUARIO
                const password = await bcrypt.hash(req.password, 10)
                const user = await new User({
                    ...req,
                    password,
                    customerId: asaas.resposta.id
                }).save();

                //RESPOSTA PARA O FRONT
                const resp = {
                    name: user.name,
                    photo: user.photo,
                    _id: user._id
                }
                const resposta = ({
                    status: 200,
                    message: resp
                })
                return resposta
            }
        }
    } catch (err) {
        const resposta = ({
            status: 404,
            message: err.message
        })
        return resposta

    }
}

export const login = async (req, model) => {
    let resposta
    try {
        const { email, password } = req;

        //VALIDAÇÃO DE EMAIL

        const user = model == "user" ? await User.findOne({ email }) : await Promoter.findOne({ email })
        if (!user) {
            resposta = {
                status: 400,
                message: 'Email ou senha incorretos'
            }
            return resposta
        }

        //VALIDAÇÃO DE SENHA
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            resposta = {
                status: 400,
                message: 'Email ou senha incorretos'
            }
            return resposta
        }

        //RESPOSTA PARA O FRONT
        const resp = {
            name: user.name,
            photo: user.photo,
            userId: user._id
        }
        resposta = {
            status: 200,
            message: resp
        }
        return resposta

    } catch (err) {
        resposta = {
            status: 404,
            message: err.message
        }
        return resposta
    }
}

export const editarModel = async (req, model) => {
    let resposta
    try {
        const userId = req._id
        let password
        if (req.password) { password = await bcrypt.hash(req.password, 10) }

        else if (model == "user") {
            const atualizar = await User.findByIdAndUpdate(userId, {
                ...req,
                password
            }),

                resposta = {
                    status: 200,
                    message: atualizar
                }
            return resposta
        }

        else if (model == "promoter") {
            console.log("entrou")
            const atualizar = await Promoter.findByIdAndUpdate(userId, {
                ...req,
                password
            }),

                resposta = {
                    status: 200,
                    message: atualizar
                }
            return resposta
        }

        else if (model == "party") {
            const atualizar = await Party.findByIdAndUpdate(userId, {
                ...req,
                password
            }),

                resposta = {
                    status: 200,
                    message: atualizar
                }
            return resposta
        }

        else if (model == "ticket") {
            const atualizar = await Ticket.findByIdAndUpdate(userId, {
                ...req,
                password
            }),

                resposta = {
                    status: 200,
                    message: atualizar
                }
            return resposta
        }

        else if (model == "product") {
            const atualizar = await Product.findByIdAndUpdate(userId, {
                ...req,
                password
            }),

                resposta = {
                    status: 200,
                    message: atualizar
                }
            return resposta
        }

        else if (model == "restaurant") {
            const atualizar = await Restaurant.findByIdAndUpdate(userId, {
                ...req,
                password
            }),

                resposta = {
                    status: 200,
                    message: atualizar
                }
            return resposta
        } else {
            resposta = {
                status: 400,
                message: "Informe um type válido e tente novamente"
            }
            return resposta
        }

    } catch (err) {
        resposta = {
            status: 404,
            message: err.message
        }
        return resposta
    }
}

export const criarEvento = async (req, model) => {
    let resposta
    try {
        //CRIAR TAGS
        let city = await City.findById(req.cityId)
        if (!city) {
            city = await City.findOne({ name: req.cityName })
            if (!city) {
                city = await new City({
                    name: req.cityName,
                    country: req.country
                }).save()
            }
        }

        const evento = req
        let tags = simplify(evento.name)
        if (model == "party") { tags.push(simplify(evento.artists)) }
        tags.push(simplify(evento.promoterName))
        tags.push(simplify(city.name))

        let concatTag = [];
        for (let i = 0; i < tags.length; i++) {
            concatTag = concatTag.concat(tags[i])
        }

        //criar codigo de registro
        let rc = gerarRC()

        const registerCode = model == "party" ? await Party.find({ rc }) : await Restaurant.find({ rc })

        if (!registerCode) {
            rc = gerarRC()
        } else {
            for (let i = 0; i < registerCode.length; i++) {
                if (rc !== registerCode[i].rc) {
                    i = registerCode.length
                } else {
                    rc = gerarRC()
                }
            }
        }

        const event = model == "party" ? await new Party({
            tags: concatTag,
            ...req,
            status: 'A',
            rc
        }).save() : await new Restaurant({
            status: 'A',
            ...req,
            tags: concatTag,
            rc,
        }).save()

        resposta = {
            status: 200,
            message: event
        }
        return resposta


    } catch (err) {

        resposta = {
            status: 404,
            message: err.message
        }
        return resposta
    }
}

export const statusTrabalhador = async (req) => {
    let resposta
    try {

        const editarStatus = req.type == 'party' ? await PartyWork.findByIdAndUpdate(req.workId, {
            status: req.status
        }) : await RestaurantWork.findByIdAndUpdate(req.workId, {
            status: req.status
        })

        resposta = {
            status: 200,
            message: "Status alterado com sucesso"
        }
        return resposta
    } catch (err) {
        resposta = {
            status: 404,
            message: err.message
        }
        return resposta
    }
}

export const lerQRCODE = async (req) => {
    let resposta
    try {
        const requisicao = req
        const ingresso = req.type == "ticket" ? await UserTicket.findById(requisicao.ticketid) : await UserProduct.findById(requisicao.ticketid)

        if (ingresso.status == 'i') {
            resposta = {
                status: 400,
                message: "Ingresso já utilizado"
            }
            return resposta
        } else {
            const atualizarIngresso = await UserTicket.findByIdAndUpdate(requisicao.ticketid, {
                status: "I"
            })
            resposta = {
                status: 200,
                message: ingresso
            }
            return resposta
        }
    } catch (err) {
        resposta = {
            status: 404,
            message: err.message
        }
        return resposta
    }
}

export const carrinho = async (body) => {

    try {

        let carrinho = []

        let ingressoCompra
        if (body.ticketId) {
            let ingresso = await Ticket.findById(body.ticketId)
            const token = ingresso.token

            //filtrar token para encontrar escolhido
            const filtrar = await token.filter((value) => {
                if (value._id == body.tokenId) {
                    return value
                }
            })
            //verificar a quantidade de ingressos escolhidas com a quantidade disponivel
            ingresso = filtrar[0]

            const ingressosComprados = await UserTicket.find({ tokenId: ingresso._id })
            const verificarDisponibilidade = ingresso.qnt - ingressosComprados.length
            if (verificarDisponibilidade < body.ticketQnt) {
                const resposta = {
                    status: 400,
                    message: "Quantidade de ingressos não disponivel"
                }
            }

            //Criar o ingresso escolhido no carrinho
            ingressoCompra = {
                ticketId: body.ticketId,
                qnt: body.ticketQnt,
                tokenId: body.tokenId,
                price: body.ticketQnt * ingresso.price
            }
        }
        const combo = body.product
        //Verificar quantidade de combos e gerar carrinho 
        let combos = [];
        if (combo) {
            if (combo.length > 1) {
                for (let i = 0; i < combo.length; i++) {
                    let comboEscolhido = await Product.findById(combo[i].id)
                    combos.push({
                        productId: combo[i].id,
                        qnt: combo[i].qnt,
                        price: comboEscolhido.price * combo[i].qnt
                    })
                }
            } else {
                const combo2 = await Product.findById(combo[0].id)
                combos.push({
                    productId: combo2.id,
                    qnt: combo[0].qnt,
                    price: combo2.price * combo[0].qnt
                })
            }
            for (let i = 0; i < combos.length; i++) {
                carrinho.push(combos[i])
            }
        }
        let walletValue = 0
        for (let i = 0; i < carrinho.length; i++) {
            walletValue += carrinho[i].price
        }
        walletValue += ingressoCompra.price
        const appTax = await AppValue.findOne()
        const appValue = walletValue * appTax.comission
        const totalValue = walletValue + appValue

        const message = {
            tickets: ingressoCompra,
            products: carrinho,
            walletValue,
            appValue,
            totalValue
        }
        const resposta = {
            status: 200,
            message: message
        }

        return resposta




    } catch (err) {
        const resposta = {
            status: 404,
            message: err.message
        }
        return resposta
    }


}

export const finalizarPix = async (body) => {
    try {
        const user = await User.findById(body.payment.userId)
        body.payment.customer = user.customerId
        body.payment.dueDate = moment().add(10, 'days')
        const requisicaoAsaas = body.payment
        const transacao = await createConection('/payments', requisicaoAsaas, 'POST')


        if (transacao.status != 200) {
            const resposta = {
                status: transacao.status,
                message: transacao.resposta
            }
            return resposta
        } else {
            const transacaoId = transacao.resposta.id
            const pixQrCode = await createConection(`/payments/${transacaoId}/pixQrCode`, body, 'GET')
            if (pixQrCode.status != 200) {
                const resposta = {
                    status: pixQrCode.status,
                    message: pixQrCode.resposta
                }
                return resposta
            } else {
                const resposta = {
                    status: pixQrCode.status,
                    qrCode: pixQrCode.resposta.encodedImage,
                    pixCode: pixQrCode.resposta.payload,
                    paymentId: transacaoId
                }
                return resposta
            }
        }

    } catch (err) {
        const resposta = {
            status: 404,
            message: err.message
        }
        return resposta
    }
}

export const finalizarCartao = async (body) => {
    try {
        const user = await User.findById(body.payment.userId)
        body.payment.customer = user.customerId
        body.payment.dueDate = moment().add(10, 'days')
        body.payment.creditCardHolderInfo.email = user.email
        const requisicaoAsaas = body.payment
        console.log(requisicaoAsaas)
        const transacao = await createConection('/payments', requisicaoAsaas, 'POST')

        if (transacao.status != 200) {
            const resposta = {
                status: transacao.status,
                message: transacao.resposta
            }
            return resposta
        } else {

            const transacaoId = transacao.resposta.id
            const resposta = {
                status: transacao.status,
                paymentId: transacaoId
            }
            return resposta
        }
    } catch (err) {
        const resposta = {
            status: 404,
            message: err.message
        }
        return resposta
    }

}

export const criarItens = async (itens, id) => {
    try {
        let newItens = []

        if (itens.wallet.tickets) {
            const tickets = itens.wallet.tickets
            for (let i = 0; i < tickets.qnt; i++) {
                const criarTicket = await new UserTicket({
                    status: "A",
                    userId: itens.payment.userId,
                    ...tickets
                }).save()
                newItens.push(criarTicket)
            }
        }
        if (itens.wallet.products) {
            const products = itens.wallet.products
            for (let i = 0; i < products.length; i++) {
                const product = parseInt(products[i].qnt)
                for (let i = 0; i < product; i++) {
                    const criarProduct = await new UserProduct({
                        status: "A",
                        userId: itens.payment.userId,
                        ...products[i]
                    }).save()
                    newItens.push(criarProduct)
                }

            }
        }
        const resposta = {
            status: 200,
            message: newItens
        }
        return resposta




    } catch (err) {

        const resposta = {
            status: 404,
            message: err.message
        }
        return resposta
    }
}