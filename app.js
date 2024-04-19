const express = require('express');
const multer = require('multer');
const fs = require('fs');
const app = express();

// Configuración de Multer para cargar imágenes
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

// Ruta para manejar la carga del producto
app.post('/submit_product', upload.single('product_image'), (req, res) => {
    const { product_name, product_description, contact_whatsapp } = req.body;
    const product_image = req.file.filename; // Nombre del archivo de la imagen
    
    // Aquí deberías guardar la información en tu base de datos
    
    // Por ahora, simplemente muestra la información en la consola
    console.log('Producto Cargado:');
    console.log('Nombre:', product_name);
    console.log('Descripción:', product_description);
    console.log('Imagen:', product_image);
    console.log('Contacto WhatsApp:', contact_whatsapp);

    res.send('Producto cargado exitosamente.');
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
