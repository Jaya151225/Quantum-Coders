const express = require("express");
const app = express();

app.use(express.json());

// Laptop Data
const laptops = [
    {
        id: 1,
        brand: "Dell",
        model: "Inspiron 15",
        price: 55000
    },
    {
        id: 2,
        brand: "Lenovo",
        model: "IdeaPad Slim 3",
        price: 50000
    },
    {
        id: 3,
        brand: "HP",
        model: "Pavilion 14",
        price: 60000
    }
];

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to Laptop Store Backend");
});

// Get All Laptops
app.get("/laptops", (req, res) => {
    res.json(laptops);
});

// Get Laptop by ID
app.get("/laptops/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const laptop = laptops.find(l => l.id === id);

    if (!laptop) {
        return res.status(404).json({
            message: "Laptop not found"
        });
    }

    res.json(laptop);
});

// Add New Laptop
app.post("/laptops", (req, res) => {
    const newLaptop = req.body;

    laptops.push(newLaptop);

    res.status(201).json({
        message: "Laptop Added Successfully",
        laptop: newLaptop
    });
});

// Start Server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
