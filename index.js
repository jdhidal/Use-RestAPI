// Importar Express
const express = require('express');

// Crear una instancia de Express
const app = express();

// Middleware para parsear el cuerpo de las peticiones en formato JSON
app.use(express.json());

// Endpoint de prueba: GET /hello
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// Endpoint de ejemplo: POST /user
app.post('/user', (req, res) => {
  const { name, age } = req.body;
  
  if (!name || !age) {
    return res.status(400).json({ error: 'Faltan parámetros' });
  }

  res.status(201).json({ message: `Usuario ${name} de ${age} años creado` });
});

// Endpoint de ejemplo: GET /user/:id
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  // Normalmente, buscarías al usuario en una base de datos
  res.json({ id: userId, name: 'John Doe', age: 30 });
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API REST escuchando en el puerto ${PORT}`);
});
