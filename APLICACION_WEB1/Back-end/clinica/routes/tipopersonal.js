var express = require('express');
var router = express.Router();
var conn = require('./conexion');

//trae todos los datos
router.get('/mostrar',function(req,res,next){
  conn.query('SELECT * FROM tipopersonal',function(error,result,fields){
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
  conn.query('SELECT * FROM tipopersonal WHERE idtipo = '+output+';',function (error,result,fields) {
    if (error){
      res.status(422).json(["Error"]);
    }else{
      res.status(200).json(result);
    }
    });
  })


//Eliminar datos metodos
router.post('/eliminar',function (req,res,next) {
  idtipo= req.body.idtipo;
  
  // conn.connect();
  // tomar los parametros y asignarlos a variable output
  
    conn.query('DELETE from tipopersonal  WHERE idtipo = "'+idtipo+'";',function (error,result,fields) {
      if (error){
        res.status(422).json(["Error"]);
      }else{
        res.status(200).json(result);
      }
      });
    });
//actualizar datos método  

router.post('/actualizar',function (req,res,next) {
  idtipo = req.body.idtipo;
  nombretipo =	req.body.nombretipo;
// conn.connect();
// tomar los parametros y asignarlos a variable output

  conn.query('UPDATE tipopersonal SET nombretipo="'+nombretipo+'" WHERE idtipo = "'+idtipo+'";',function (error,result,fields) {
    if (error){
      res.status(422).json(["Error"]);
    }else{
      res.status(200).json(result);
    }
    });
  });

// trae 1 solo dato
router.post('/insertar',function (req,res,next) {
    
nombretipo =	req.body.nombretipo;

    
  // conn.connect();
  // tomar los parametros y asignarlos a variable output
  //output=req.params.id;
  // si es string se ponen ""
  conn.query('INSERT INTO tipopersonal (nombretipo) VALUES ("'+nombretipo+'");',function (error,result,fields) {
    if (error){
      res.status(422).json(["Error"]);
    }else{
      res.status(200).json(result);
    }
    });
  })

module.exports = router;