const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
    {
        name: { type: String, required: true},
        ISBN: { type: String, required: true, unique: true},
        author: { type: String, required: true},
        price: { type: Number, required: true},
        origin: { type: String},
        pages: {type: Number},
        year: { type: Number, required: true},
        stocks: { type: Number, required: true},
        digitalform: { type: Boolean, required: true},
    },
    { timestamps: true}
);

module.exports = mongoose.model("Book", BookSchema);