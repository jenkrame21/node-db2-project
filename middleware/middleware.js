const Dealer = require('../api/dealers/dealers-model.js');

module.exports = {
    checkId,
    checkPayload
};

// Middleware
// Check if ID exists
async function checkId(req, res, next) {
    const { id } = req.params;
    const idExists = await Dealer.getById(id);
    if (idExists) {
        next();
    } else {
        res.status(400).json({
            message: "Dealer ID does not exist in the DB"
        });
    }
}

//- The critical information for each car is the VIN, make, model, and mileage.
//- They also track transmission type and status of the title (clean, salvage, etc.), but this information is not always immediately known

function checkPayload(req, res, next) {
    const { vin, make, model, mileage } = req.body;
    if (vin && make && model && mileage) {
        next();
    } else {
        res.status(400).json({
            message: "VIN, make, model, and mileage required"
        });
    }
}