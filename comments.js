const express = require('express');
const app = express();
const port = 3000;

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Escuchar en el puerto 3000
app.listen(port, () => {
  console.log(`El servidor está escuchando en el puerto ${port}`);
});
