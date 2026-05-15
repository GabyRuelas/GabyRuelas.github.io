import express from 'express';

const app = express();
const puerto = 1984;

// Ruta principal
app.get('/', (req, res) => {
  res.send('Servidor del Kueski Smart Widget funcionando');
});

// Ruta con parámetro
app.get('/sitio/:nombre', (req, res) => {
  const nombre = req.params.nombre;

  res.send(`Revisando si ${nombre} es compatible con Kueski`);
});

// Ruta con otro parámetro
app.get('/score/:usuario', (req, res) => {
  const usuario = req.params.usuario;

  res.send(`Mostrando el Score Coach del usuario: ${usuario}`);
});

// Ruta 404
app.use((req, res) => {
  res.status(404).send('Ruta no encontrada');
});

app.listen(puerto, () => {
  console.log(`Servidor funcionando en http://localhost:${puerto}`);
});