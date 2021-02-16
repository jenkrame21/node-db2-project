const db = require("../../data/dbConfig.js");

module.exports = {
    get,
    getById,
    create,
    update,
    remove
};

// GET - Get all dealers
function get() {
    return db("dealers");
}

// GET - Get dealer by id
function getById(id) {
    return db("dealers").where("id", id).first();
}

// POST - Create new dealer
function create(dealer) {
    return db("dealers").insert(dealer)
        .then(([id]) => {
            return db("dealers").where("id", id).first();
        });
}

// PUT - Update dealer
function update(id, dealer) {
    const dealerId = id
    return db("dealers").where("id", id).update(dealer)
        .then(() => {
            return db("dealers").where("id", dealerId).first();
        });
}

// DELETE - Delete dealer
function remove(id) {
    return db("dealers").where("id", id).del()
        .then(() => {
            return db("dealers");
        });
}