var express = require('express');
var router = express.Router();
var conn = require('./conexion');

//trae todos los datos
router.get('/mostrar',function(req,res,next){
  conn.query('SELECT * FROM tratamientos',function(error,result,fields){
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
  conn.query('SELECT * FROM tratamientos WHERE idtratamiento = '+output+';',function (error,result,fields) {
    if (error){
      res.status(422).json(["Error"]);
    }else{
      res.status(200).json(result);
    }
    });
  })

//Eliminar datos metodos
router.post('/eliminar',function (req,res,next) {
  idtratamiento= req.body.idtratamiento;
  
  // conn.connect();
  // tomar los parametros y asignarlos a variable output
  
    conn.query('DELETE from tratamientos  WHERE idtratamiento = "'+idtratamiento+'";',function (error,result,fields) {
      if (error){
        res.status(422).json(["Error"]);
      }else{
        res.status(200).json(result);
      }
      });
    });
//actualizar datos método  

router.post('/actualizar',function (req,res,next) {
  idtratamiento=req.body.idtratamiento;
  Nombre =	req.body.Nombre;
  descripcion =	req.body.descripcion;
  precio =	req.body.precio;

// conn.connect();
// tomar los parametros y asignarlos a variable output

  conn.query('UPDATE tratamientos SET Nombre="'+Nombre+'", descripcion = "'+descripcion+'", precio = "'+precio+'" WHERE idtratamiento = "'+idtratamiento+'";',function (error,result,fields) {
    if (error){
      res.status(422).json(["Error"]);
    }else{
      res.status(200).json(result);
    }
    });
  });

// trae 1 solo dato
router.post('/insertar',function (req,res,next) {
    

Nombre =	req.body.Nombre;
descripcion =	req.body.descripcion;
precio =	req.body.precio;


    
  // conn.connect();
  // tomar los parametros y asignarlos a variable output
  //output=req.params.id;
  // si es string se ponen ""
  conn.query('INSERT INTO tratamientos (Nombre,descripcion,precio) VALUES ("'+Nombre+'","'+descripcion+'","'+precio+'");',function (error,result,fields) {
    if (error){
      res.status(422).json(["Error"]);
    }else{
      res.status(200).json(result);
    }
    });
  })

module.exports = router;