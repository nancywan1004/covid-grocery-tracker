var express = require("express");
var router = express.Router();
const fs = require('fs');
const path = require('path');

router.get("/:pType", function(req, res, next) {
    try {
        let pType = req.params.pType;
        fs.readFile(path.join(__dirname, '..', 'store_data', 'store_data.json'
        ), (err, data) => {
            if (err) throw err;
            let storeData = JSON.parse(data);
            console.log(storeData);
            let availStores = getStoresByAvail(storeData.stores, pType);
            console.log(availStores)
            res.send(availStores);
        });
    } catch (err) {
        console.log(err);
        res.send(err);
    }

});

const checkAvail = (product, pType) => {
    return product.name === pType && product.quantity > 0;
}

const getStoresByAvail = (stores, pType) => {
    const availStores = stores.filter(store =>
        store.products.some(p => checkAvail(p, pType))
    );
    console.log(availStores);
    return availStores;
}

module.exports = router;