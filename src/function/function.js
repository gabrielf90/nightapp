import express from 'express';
import mongoose from 'mongoose';
import moment from 'moment'
import Busboy from 'busboy';
import Promoter from '../models/promoter.js';
import Party from '../models/party.js';
import aws from '../services/aws.js'
import Ticket from '../models/ticket.js';
import Product from '../models/product.js';
import UserTicket from '../models//relationship/userTicket.js';



//CREATE PHOTO NAME
export const createPhoto = async (files, userId, model) => {
  const file = files.photo;
  const nameParts = file.name.split('.');
  const fileName = `${userId}.${nameParts[nameParts.length - 1]}`;
  const photo = `${model}/${fileName}`;
  return photo
}

//CREATE A CLEAN STRING TO TAGS
export const simplify = (text) => {
  let tag = text.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  tag = tag.split(" ");
  return tag
}

export const cidade = (body, req) => {
  try{ 
    const festas = body
    const filter = req.city

    const filtro = festas.filter((value) => {
      if (value.cityName == filter) {
        return value
      }
    })

    return filtro

  }catch(err){
    console.log(err.message)
  }
 
}

export const genero = (body, req) => {
  const festas = body
  const filter = req.genre
  console.log(body)
  console.log(filter)
  const filtro = festas.filter((value) => {
    if (value.genre._id == filter) {
      return value
    }
  })
  return filtro
}

export const cidadeGenero = (body, req) => {
  
  const festas = body
  const filter1 = req.genre
  const filter2 = req.city
  const filtro = festas.filter((value) => {
    if (value.genre._id == filter1) {
      return value
    }
  })
  const filtroFinal = filtro.filter((value) => {
    if (value.cityName == filter2) {
      return value
    }
  })

  return filtroFinal
}

export const filtrarData = async (festas) => {

  const diaHoje = moment()
  const filtrar = await festas.filter((value) => {
    if (moment(value.date).isAfter(diaHoje)) {
      return value
    }
  })
  console.log(filtrar)
  const filtrarStatus = await filtrar.filter((value) => {
    if (value.status == "A") {
      return value
    }
  })
  
  return filtrarStatus
}

export const gerarRC = () => {
  return Math.random().toString(36).slice(-5);
}
