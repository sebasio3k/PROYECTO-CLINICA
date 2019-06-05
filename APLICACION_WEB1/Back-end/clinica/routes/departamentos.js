var express = require('express');
var router = express.Router();
var conn = require('./conexion');

//trae todos los datos
router.get('/mostrar',function(req,res,next){
  conn.query('SELECT * FROM departamentos',function(error,result,fields){
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
  conn.query('SELECT * FROM departamentos WHERE iddepartamento = '+output+';',function (error,result,fields) {
    if (error){
      res.status(422).json(["Error"]);
    }else{
      res.status(200).json(result);
    }
    });
  })


//Eliminar datos metodos
router.post('/eliminar',function (req,res,next) {
  iddepartamento=req.body.iddepartamento;
  // conn.connect();
  // tomar los parametros y asignarlos a variable output
  
    conn.query('DELETE from departamentos  WHERE iddepartamento = "'+iddepartamento+'";',function (error,result,fields) {
      if (error){
        res.status(422).json(["Error"]);
      }else{
        res.status(200).json(result);
      }
      });
    });
    
//actualizar datos método  

router.post('/actualizar',function (req,res,next) {
  iddepartamento=req.body.iddepartamento;
  nombre=req.body.nombre;
  ubicacion=req.body.ubicacion;


// conn.connect();
// tomar los parametros y asignarlos a variable output

  conn.query('UPDATE departamentos SET nombre="'+nombre+'", ubicacion = "'+ubicacion+'" WHERE iddepartamento = "'+iddepartamento+'";',function (error,result,fields) {
    if (error){
      res.status(422).json(["Error"]);
    }else{
      res.status(200).json(result);
    }
    });
  });
// trae 1 solo dato
router.post('/insertar',function (req,res,next) {
    nombre=req.body.nombre;
    ubicacion=req.body.ubicacion;

  // conn.connect();
  // tomar los parametros y asignarlos a variable output
  output=req.params.id;
  // si es string se ponen ""
  conn.query('INSERT INTO departamentos (nombre,ubicacion) VALUES ("'+nombre+'","'+ubicacion+'");',function (error,result,fields) {
    if (error){
      res.status(422).json(["Error"]);
    }else{
      res.status(200).json(result);
    }
    });
  })

module.exports = router;