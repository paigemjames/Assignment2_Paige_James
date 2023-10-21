import Product from '../models/products.model.js'
import extend from 'lodash/extend.js'
import express from 'express'
import errorHandler from './error.controller.js'

const create = async (req, res) => {
    const products = new Product(req.body)
    try {
        await products.save()
        return res.status(200).json({
            message: "New product successfully added!"
        })
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const list = async (req, res) => {
    try {
        let products = await Product.find();
        if (req.query.name) {
            products = await Product.find({ name: { $regex: req.query.name, $options: 'i' } });
        } else {
            products = await Product.find();
        }
        res.json(products)
    }
    catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const id = async (req, res, next, id) => {
    try {
        let product = await Product.findById(id);
        if (!product)
            return res.status("400").json({
                error: "Product not found",
            });
        req.profile = product;
        next();
    } catch (err) {
        return res.status("400").json({
            error: errorHandler.getErrorMessage(err)
        });
    }
};

const read = (req, res) => {
    return res.json(req.profile)
}


const update = async (req, res) => {
    try {
        let product = req.profile;
        product = extend(product, req.body);
        await product.save();
        res.json(product);
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err),
        });
    }
};

const remove = async (req, res) => {
    try {
        let product = req.profile;
        if (product) {
            const deletedProduct = await product.deleteOne();
            res.json(deletedProduct);
        } else {
            const result = await Product.deleteMany({});
            res.json({ message: `Deleted ${result.deletedCount} products.` });
        }
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err),
        });
    }
};


export default { create, id, read, list, remove, update };