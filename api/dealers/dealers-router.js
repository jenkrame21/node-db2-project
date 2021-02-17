const express = require("express");
const router = express.Router();
const Dealer = require("./dealers-model.js");
const mw = require("../../middleware/middleware.js");

router.get('/', async (req, res, next) => {
    try {
        const data = await Dealer.get();
        res.json(data);
    } catch(error) {
        next(error);
    }
});

router.get('/:id', mw.checkId, async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await Dealer.getById(id);
        res.json(data);
    } catch(error) {
        next(error);
    }
});

router.post('/', mw.checkPayload, async (req, res, next) => {
    try {
        const dealer = req.body;
        const data = await Dealer.create(dealer);
        res.json(data);
    } catch(error) {
        next(error);
    }
});

router.put('/:id', mw.checkId, mw.checkPayload, async (req, res, next) => {
    try {
        const { id } = req.params;
        const changes = req.body;
        const data = await Dealer.update(id, changes);
        res.json(data);
    } catch(error) {
        next(error);
    }
});

router.delete('/:id', mw.checkId, async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await Dealer.remove(id);
        res.json(data);
    } catch(error) {
        next(error);
    }
});