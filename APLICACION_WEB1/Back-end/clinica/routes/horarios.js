var express = require('express');
var router = express.Router();
var conn = require('./conexion');
var conn2 = require('./conexion')
//trae todos los datos
router.get('/mostrar',function(req,res,next){
  conn.query('SELECT * FROM horarios',function(error,result,fields){
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
  conn.query('SELECT * FROM horarios WHERE idhorario = '+output+';',function (error,result,fields) {
    if (error){
      res.status(422).json(["Error"]);
    }else{
      res.status(200).json(result);
    }
    });
  })
//Eliminar datos metodos
router.post('/eliminar',function (req,res,next) {
  idhorario= req.body.idhorario;

  // conn.connect();
  // tomar los parametros y asignarlos a variable output

    conn.query('DELETE from horarios  WHERE idhorario = "'+idhorario+'";',function (error,result,fields) {
      if (error){
        res.status(422).json(["Error"]);
      }else{
        res.status(200).json(result);
      }
      });
    });
//actualizar datos método

router.post('/actualizar',function (req,res,next) {
  idhorario= req.body.idhorario;
  iddoctor =	req.body.iddoctor;
nconsultorio =	req.body.nconsultorio;
hora = req.body.hora;
// conn.connect();
// tomar los parametros y asignarlos a variable output

  conn.query('UPDATE horarios SET iddoctor="'+iddoctor+'",nconsultorio="'+nconsultorio+'",hora="'+hora+'" WHERE idhorario = "'+idhorario+'";',function (error,result,fields) {
    if (error){
      res.status(422).json(["Error"]);
    }else{
      res.status(200).json(result);
    }
    });
  });

// trae 1 solo dato
router.post('/insertar',  function (req,res,next) {

iddoctor =	req.body.iddoctor;
nconsultorio =	req.body.nconsultorio;
hora = req.body.hora;
idhorario= req.body.idhorario;

conn2.query('SELECT * FROM horarios WHERE nconsultorio = "'+nconsultorio+'" and hora = "'+hora+'" ;'
  ,function (error,result,fields) {
    if (!result){
      conn.query('INSERT INTO horarios (iddoctor,nconsultorio,hora) VALUES ("'+iddoctor+'","'+nconsultorio+'","'+hora+'");',function (error,result,fields) {
        if (error){
          res.status(422).json(["Error"]);
        }else{
          res.status(200).json(result);
        }
        });
    } else res.status(422).json({
      error : 'El horario ya esta registrado'
    })
  });
  // conn.connect();
  // tomar los parametros y asignarlos a variable output
  //output=req.params.id;
  // si es string se ponen ""

  })

module.exports = router;