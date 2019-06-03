var express = require('express');
var router = express.Router();
var conn = require('./conexion');

//trae todos los datos
router.get('/mostrar',function(req,res,next){
  conn.query('SELECT * FROM citas',function(error,result,fields){
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
  conn.query('SELECT * FROM citas WHERE idcita = '+output+';',function (error,result,fields) {
    if (error){
      res.status(422).json(["Error"]);
    }else{
      res.status(200).json(result);
    }
    });
  })


// trae 1 solo dato
router.post('/insertar',function (req,res,next) {
    idpaciente=req.body.idpaciente;
    hora=req.body.hora;
    fecha=req.body.fecha;
    iddoctor=req.body.iddoctor;
    nconsultorio=req.body.nconsultorio;
    precio=req.body.precio;
    estatus=req.body.estatus;

  // conn.connect();
  // tomar los parametros y asignarlos a variable output
  output=req.params.id;
  // si es string se ponen ""
  conn.query('INSERT INTO citas (idpaciente,hora,fecha,iddoctor,nconsultorio,precio,estatus) VALUES ("'+idpaciente+'","'+hora+'","'+fecha+'","'+iddoctor+'","'+nconsultorio+'","'+precio+'","'+estatus+'");',function (error,result,fields) {
    if (error){
      res.status(422).json(["Error"]);
    }else{
      res.status(200).json(result);
    }
    });
  })

module.exports = router;