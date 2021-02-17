const db = require("../../data/dbConfig.js");

module.exports = {
    get,
    getById,
    create,
    update,
    remove
};

function get() {
    return db("dealers");
}

function getById(id) {
    return db("dealers").where("id", id).first();
}

function create(dealer) {
    return db("dealers").insert(dealer)
        .then(([id]) => {
            return db("dealers").where("id", id).first();
        });
}

function update(id, dealer) {
    const dealerId = id
    return db("dealers").where("id", id).update(dealer)
        .then(() => {
            return db("dealers").where("id", dealerId).first();
        });
}

function remove(id) {
    return db("dealers").where("id", id).del()
        .then(() => {
            return db("dealers");
        });
}