import express from 'express';   // Importing express (a Node.js web framework)

const app = express();   // Create an express app instance

// Defining a GET route at "/api/products"
app.get('/api/products', (req, res) => {
    // Mock data: list of products
    const products = [
        {
            id: 1,
            name: 'table wooden',
            price: 200,
            image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }, {
            id: 2,
            name: 'table glass',
            price: 250,
            image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }, {
            id: 3,
            name: 'table plastic',
            price: 150,
            image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }, {
            id: 4,
            name: 'table metal',
            price: 300,
            image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }, {
            id: 5,
            name: 'table polyester',
            price: 150,
            image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }
    ]

    // Example: https://localhost:3000/api/products?search=metal
    // If a query parameter 'search' is present, filter the products by name
    if (req.query.search) {
        const filterProducts = products.filter(product => product.name.includes(req.query.search));   // Filter products where the name includes the search term
        res.send(filterProducts);   // Send back only the filtered products as the response
        return;   // Exit early so the rest of the code doesn’t run (the setTimeout won't run). Only one response is sent back — which is correct behavior.
    }

    // If no search query is provided, wait 3 seconds before sending all products
    setTimeout(() => {
        res.send(products);
    }, 3000);
})

const port = process.env.PORT || 3000;   // Define the port number (use environment variable if available, otherwise 3000)

// Start the server and listen on the defined port
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});