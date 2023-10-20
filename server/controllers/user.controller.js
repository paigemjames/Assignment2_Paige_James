import User from '../models/user.model.js'
import extend from 'lodash/extend.js'
//import errorHandler from './error.controller'
const create = (req, res, next) => { 
    console.log('ppppp create')
};
const list = (req, res) => {
    console.log('ppppp list')
 };
const userByID = (req, res, next, id) => { 
    console.log('ppppp userByID')
    next()
};
const read = (req, res) => { 
    console.log('ppppp read')
};
const update = (req, res, next) => {
    console.log('ppppp update')
 };
const remove = (req, res, next) => {
    console.log('ppppp remove')
 };
export default { create, userByID, read, list, remove, update };