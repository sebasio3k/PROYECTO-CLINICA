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
//mostrar datos METODO
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
//Eliminar datos metodos
  router.post('/eliminar',function (req,res,next) {
    idpaciente= req.body.idpaciente;
    
    // conn.connect();
    // tomar los parametros y asignarlos a variable output
    
      conn.query('DELETE from pacientes  WHERE idpaciente = "'+idpaciente+'";',function (error,result,fields) {
        if (error){
          res.status(422).json(["Error"]);
        }else{
          res.status(200).json(result);
        }
        });
      });
//actualizar datos método  

  router.post('/actualizar',function (req,res,next) {
  idpaciente= req.body.idpaciente;
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
  
    conn.query('UPDATE pacientes SET nombre="'+nombre+'", apaterno = "'+apaterno+'", amaterno = "'+amaterno+'",genero= "'+genero+'",fracc="'+fracc+'",num="'+num+'",calle="'+calle+'",edad="'+edad+'",telefono="'+telefono+'",correo="'+correo+'" WHERE idpaciente = "'+idpaciente+'";',function (error,result,fields) {
      if (error){
        res.status(422).json(["Error"]);
      }else{
        res.status(200).json(result);
      }
      });
    });

//Insertar datos metodo
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

module.exports = router;
