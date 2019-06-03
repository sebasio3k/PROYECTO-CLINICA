var express = require('express');
var router = express.Router();
var conn = require('./conexion');

//trae todos los datos
router.get('/mostrar',function(req,res,next){
  conn.query('SELECT * FROM pacientes',function(error,result,fields){
     if (error){
        res.status(422).json([]);
     }else{
        res.status(200).json(result);
     }
  });
});

// trae 1 solo dato
router.get('/mostrar1/:id',function (req,res,next) {
  // conn.connect();
  // tomar los parametros y asignarlos a variable output
  output=req.params.id;
  // si es string se ponen ""
  conn.query('SELECT * FROM pacientes WHERE idpaciente = '+output+';',function (error,result,fields) {
    if (error){
      res.status(422).json(["Error"]);
    }else{
      res.status(200).json(result);
    }
    });
  });

  router.post('/actualizar',function (req,res,next) {
    nombre = req.body.nombre;
  apaterno = req.body.apaterno;
  amaterno = req.body.amaterno;
  genero = req.body.genero;
  fracc = req.body.fracc;
  num = req.body.num;
  calle = req.body.calle;
  edad = req.body.edad;
  telefono = req.body.telefono;
  correo = req.body.correo;

  // conn.connect();
  // tomar los parametros y asignarlos a variable output
  
    conn.query('UDPDATE * FROM pacientes WHERE idpaciente = '+output+';',function (error,result,fields) {
      if (error){
        res.status(422).json(["Error"]);
      }else{
        res.status(200).json(result);
      }
      });
    });


// trae 1 solo dato
router.post('/insertar',function (req,res,next) {
  nombre = req.body.nombre;
  apaterno = req.body.apaterno;
  amaterno = req.body.amaterno;
  genero = req.body.genero;
  fracc = req.body.fracc;
  num = req.body.num;
  calle = req.body.calle;
  edad = req.body.edad;
  telefono = req.body.telefono;
  correo = req.body.correo;

  // conn.connect();
  // tomar los parametros y asignarlos a variable output
  output=req.params.id;
  // si es string se ponen ""
  conn.query('INSERT INTO pacientes (nombre,apaterno,amaterno,genero,fracc,num,calle,edad,telefono,correo) VALUES ("'+nombre+'","'+apaterno+'","'+amaterno+'","'+genero+'","'+fracc+'","'+num+'","'+calle+'",'+edad+','+telefono+',"'+correo+'");',function (error,result,fields) {
    if (error){
      res.status(422).json(["Error"]);
    }else{
      res.status(200).json(result);
    }
    });
  })
//   idpaciente	1
// nombre	"Sebastian"
// apaterno	"Hernandez"
// amaterno	"Ochoa"
// genero	"Masculino"
// fracc	"Granja Graciela"
// num	"167"
// calle	"Bosques"
// edad	22
// telefono	61817892893
// correo	"hola@gmail.com"

module.exports = router;
