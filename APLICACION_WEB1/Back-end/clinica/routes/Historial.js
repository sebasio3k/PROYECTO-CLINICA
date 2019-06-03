var express = require('express');
var router = express.Router();
var conn = require('./conexion');

//trae todos los datos
router.get('/mostrar',function(req,res,next){
  conn.query('SELECT * FROM historial',function(error,result,fields){
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
  // si es string se ponen "" AQUI HAY MAS DUDAS PORQUE TAMPOCO TIENE ID principal
  conn.query('SELECT * FROM historial WHERE iddepartamento = '+output+';',function (error,result,fields) {
    if (error){
      res.status(422).json(["Error"]);
    }else{
      res.status(200).json(result);
    }
    });
  })


// trae 1 solo dato
router.post('/insertar',function (req,res,next) {
    idpaciente = req.body.idpaciente;
    idcita=	req.body.idcita;
    descripcioncita =	req.body.descripcioncita;
    observaciones =	req.body.observaciones;
    iddoctor  =req.body.iddoctor;
  // conn.connect();
  // tomar los parametros y asignarlos a variable output
  //output=req.params.id;
  // si es string se ponen ""
  conn.query('INSERT INTO historial (idpaciente,idcita,descripcioncita,observaciones,iddoctor) VALUES ("'+idpaciente+'","'+idcita+'","'+descripcioncita+'","'+observaciones+'","'+iddoctor+'");',function (error,result,fields) {
    if (error){
      res.status(422).json(["Error"]);
    }else{
      res.status(200).json(result);
    }
    });
  })

module.exports = router;