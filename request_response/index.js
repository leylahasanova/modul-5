const Express = require("Express");
const app = Express();

const Products = [
  { id: 1, name: "Skirt", price: 35, quantity: 10 },
  { id: 2, name: "Shoes", price: 25, quantity: 9 },
  { id: 3, name: "Blouse", price: 15, quantity: 7 },
  { id: 4, name: "Dress", price: 100, quantity: "out of stock" },
  { id: 5, name: "Sandalet", price: 80,quantity: 6  },
  { id: 6, name: "Jacket", price: 120, quantity: 5},
  { id: 7, name: "Jean", price: 130, quantity:5},
  { id: 8, name: "watch", price: 150, quantity: 3 },
  { id: 9, name: "blouse", price: 100, quantity: 1 },
  { id: 10, name: "T-shirt", price: 50, quantity: "out of stock" },
];

app.get("/", function (req, res) {
  res.json(Products);
});

app.get("/:id", function (req, res) {
    res.send(
        JSON.stringify(Products.find((Product) => Product.id == req.params.id))
      );
});

app.listen(3000, ()=>{S
    console.log('server is started');
  });
