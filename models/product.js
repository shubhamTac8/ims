const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid"); 

const productSchema = new mongoose.Schema({
    product_id: {
        type: String,
        default: uuidv4,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    available_quantity: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("Product", productSchema);
