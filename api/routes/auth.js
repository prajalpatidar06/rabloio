const router = require("express").Router();
const Book = require("../Books");

router.post("/books", async (req,res)=>{
    const newBook = new Book({
        name: req.body.name,
        ISBN: req.body.isbn,
        author: req.body.author,
        price: req.body.price,
        year: req.body.year,
        stock: req.body.stock,
        digitalform: req.body.digitalform,
    });

    try {
        const book = await newBook.save();
        res.status(201).json(book);
    } catch (err){
        res.status(500).json(err);
    }
});

module.exports = router;