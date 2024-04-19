const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/unimark', { useNewUrlParser: true, useUnifiedTopology: true });

const productSchema = new mongoose.Schema({
    product_name: String,
    product_description: String,
    product_image: String,
    contact_whatsapp: String
});

const Product = mongoose.model('Product', productSchema);

// Ahora, en el endpoint /submit_product, puedes guardar el producto en la base de datos MongoDB
