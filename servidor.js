// http: crea la comunicación entre el navegador y el servidor.
import http from 'http';

// fs: permite leer archivos HTML del proyecto.
import fs from 'fs';

function darBienvenida(req, res) {
  fs.readFile('bienvenida.html', 'utf8', (error, data) => {
    if (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('No se pudo cargar bienvenida.html');
      return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
}

function mostrarUsuarios(req, res) {
  fs.readFile('usuarios.html', 'utf8', (error, data) => {
    if (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('No se pudo cargar usuarios.html');
      return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
}

function mostrarMovimientos(req, res) {
  fs.readFile('movimientos.html', 'utf8', (error, data) => {
    if (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('No se pudo cargar movimientos.html');
      return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
}

function mostrarPerfil(req, res) {
  fs.readFile('perfil.html', 'utf8', (error, data) => {
    if (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('No se pudo cargar perfil.html');
      return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
}

function mostrarEquipo(req, res) {
  fs.readFile('equipo.html', 'utf8', (error, data) => {
    if (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('No se pudo cargar equipo.html');
      return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
}

function mostrarOpinion(req, res) {
  fs.readFile('opinion.html', 'utf8', (error, data) => {
    if (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('No se pudo cargar opinion.html');
      return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
}

function mostrarContacto(req, res) {
  fs.readFile('contacto.html', 'utf8', (error, data) => {
    if (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('No se pudo cargar contacto.html');
      return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
}

function mostrarAyuda(req, res) {
  fs.readFile('ayuda.html', 'utf8', (error, data) => {
    if (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('No se pudo cargar ayuda.html');
      return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
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

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(usuarios));
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

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(movimientos));
}

function getPerfil(req, res) {
  const perfil = {
    nombre: 'Gaby',
    carrera: 'ITC',
    semestre: 'Segundo'
  };

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(perfil));
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

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(equipo));
}

function getContacto(req, res) {
  const contacto = {
    correo: 'contacto@proyecto.com',
    telefono: '3312345678',
    ciudad: 'Guadalajara'
  };

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(contacto));
}


async function getApiExterna(req, res) {
  try {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
    const datos = await respuesta.json();

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(datos));
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Error al consumir la API externa');
  }
}

function manejarRuta404(req, res) {
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Página perdida en el multiverso.');
}


// https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener
const servidor = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/bienvenida') {
    darBienvenida(req, res);
  } 
  else if (url === '/usuarios') {
    mostrarUsuarios(req, res);
  } 
  else if (url === '/movimientos') {
    mostrarMovimientos(req, res);
  } 
  else if (url === '/perfil') {
    mostrarPerfil(req, res);
  } 
  else if (url === '/equipo') {
    mostrarEquipo(req, res);
  } 
  else if (url === '/opinion') {
    mostrarOpinion(req, res);
  } 
  else if (url === '/contacto') {
    mostrarContacto(req, res);
  } 
  else if (url === '/ayuda') {
    mostrarAyuda(req, res);
  } 
  else if (url === '/api/usuarios') {
    getUsuarios(req, res);
  } 
  else if (url === '/api/movimientos') {
    getMovimientos(req, res);
  } 
  else if (url === '/api/perfil') {
    getPerfil(req, res);
  } 
  else if (url === '/api/equipo') {
    getEquipo(req, res);
  } 
  else if (url === '/api/contacto') {
  getContacto(req, res);
} 
else if (url === '/api/externa') {
  getApiExterna(req, res);
}
else {
  manejarRuta404(req, res);
}
});

const puerto = 1984;

servidor.listen(puerto, () => {
  console.log(`Servidor funcionando en el puerto ${puerto}`);
});