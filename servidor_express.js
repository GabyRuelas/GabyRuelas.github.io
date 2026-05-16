// express: nos ayuda a crear el servidor de forma más sencilla que usando http.
import express from 'express';

// fs: permite leer archivos HTML del proyecto.
import fs from 'fs';

// path: ayuda a encontrar archivos usando rutas correctas.
import path from 'path';

const app = express();
const puerto = 1984;

// Express me parece más fácil que http porque las rutas se escriben más claro.
// Con Express ya no necesito hacer muchos if con req.url.

// express.static permite mostrar archivos como imágenes, CSS o JS.
app.use(express.static('public'));

function darBienvenida(req, res) {
  fs.readFile('bienvenida.html', 'utf8', (error, data) => {
    if (error) {
      res.status(500).send('No se pudo cargar bienvenida.html');
      return;
    }

    res.status(200).send(data);
  });
}

function mostrarUsuarios(req, res) {
  fs.readFile('usuarios.html', 'utf8', (error, data) => {
    if (error) {
      res.status(500).send('No se pudo cargar usuarios.html');
      return;
    }

    res.status(200).send(data);
  });
}

function mostrarMovimientos(req, res) {
  fs.readFile('movimientos.html', 'utf8', (error, data) => {
    if (error) {
      res.status(500).send('No se pudo cargar movimientos.html');
      return;
    }

    res.status(200).send(data);
  });
}

function mostrarPerfil(req, res) {
  fs.readFile('perfil.html', 'utf8', (error, data) => {
    if (error) {
      res.status(500).send('No se pudo cargar perfil.html');
      return;
    }

    res.status(200).send(data);
  });
}

function mostrarEquipo(req, res) {
  fs.readFile('equipo.html', 'utf8', (error, data) => {
    if (error) {
      res.status(500).send('No se pudo cargar equipo.html');
      return;
    }

    res.status(200).send(data);
  });
}

function mostrarOpinion(req, res) {
  fs.readFile('opinion.html', 'utf8', (error, data) => {
    if (error) {
      res.status(500).send('No se pudo cargar opinion.html');
      return;
    }

    res.status(200).send(data);
  });
}

function mostrarContacto(req, res) {
  fs.readFile('contacto.html', 'utf8', (error, data) => {
    if (error) {
      res.status(500).send('No se pudo cargar contacto.html');
      return;
    }

    res.status(200).send(data);
  });
}

function mostrarAyuda(req, res) {
  fs.readFile('ayuda.html', 'utf8', (error, data) => {
    if (error) {
      res.status(500).send('No se pudo cargar ayuda.html');
      return;
    }

    res.status(200).send(data);
  });
}

// Página nueva para mostrar el árbol de la universidad.
function mostrarArbol(req, res) {
  fs.readFile('arbol.html', 'utf8', (error, data) => {
    if (error) {
      res.status(500).send('No se pudo cargar arbol.html');
      return;
    }

    res.status(200).send(data);
  });
}

function getUsuarios(req, res) {
  const usuarios = [
    {
      nombre: 'Punk',
      saldo: 0
    },
    {
      nombre: 'Gaby',
      saldo: 550
    },
    {
      nombre: 'Alex',
      saldo: 220
    }
  ];

  res.status(200).json(usuarios);
}

function getMovimientos(req, res) {
  const movimientos = [
    {
      tipo: 'ingreso',
      monto: 1000
    },
    {
      tipo: 'gasto',
      monto: 300
    },
    {
      tipo: 'transferencia',
      monto: 150
    }
  ];

  res.status(200).json(movimientos);
}

function getPerfil(req, res) {
  const perfil = {
    nombre: 'Gaby',
    carrera: 'ITC',
    semestre: 'Segundo'
  };

  res.status(200).json(perfil);
}

function getEquipo(req, res) {
  const equipo = [
    {
      nombre: 'Gaby',
      cualidad: 'Organizada'
    },
    {
      nombre: 'Punk',
      cualidad: 'Creativo'
    },
    {
      nombre: 'Alex',
      cualidad: 'Colaborador'
    }
  ];

  res.status(200).json(equipo);
}

function getContacto(req, res) {
  const contacto = {
    correo: 'contacto@proyecto.com',
    telefono: '3312345678',
    ciudad: 'Guadalajara'
  };

  res.status(200).json(contacto);
}

function manejarRuta404(req, res) {
  res.status(404).send('Página perdida en el multiverso.');
}

// Rutas transformadas a Express.
// Antes usabas if (url === '/ruta'), ahora Express usa app.get('/ruta', funcion).
app.get('/bienvenida', darBienvenida);
app.get('/usuarios', mostrarUsuarios);
app.get('/movimientos', mostrarMovimientos);
app.get('/perfil', mostrarPerfil);
app.get('/equipo', mostrarEquipo);
app.get('/opinion', mostrarOpinion);
app.get('/contacto', mostrarContacto);
app.get('/ayuda', mostrarAyuda);
app.get('/arbol', mostrarArbol);

app.get('/api/usuarios', getUsuarios);
app.get('/api/movimientos', getMovimientos);
app.get('/api/perfil', getPerfil);
app.get('/api/equipo', getEquipo);
app.get('/api/contacto', getContacto);

app.use(manejarRuta404);

app.listen(puerto, () => {
  console.log(`Servidor con Express funcionando en el puerto ${puerto}`);
});