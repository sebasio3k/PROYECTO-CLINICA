var express = require('express');
var router = express.Router();
var conn = require('./conexion');

//trae todos los datos
router.get('/mostrar',function(req,res,next){
  conn.query('SELECT * FROM tratamientos_pacientes',function(error,result,fields){
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
  // si es string se ponen "" AQUI TENGO DUDA PORQUE ESTA TABLA NO TIENE ID PROPIO
  conn.query('SELECT * FROM tratamientos_pacientes WHERE idtratamiento = '+output+';',function (error,result,fields) {
    if (error){
      res.status(422).json(["Error"]);
    }else{
      res.status(200).json(result);
    }
    });
  })


// trae 1 solo dato
router.post('/insertar',function (req,res,next) {
    idtratamiento = req.body.idtratamiento;
    idpaciente  = req.body.idpaciente;
    ncitas	 = req.body.ncitas;
    iddoctor = req.body.iddoctor;
    modalidadpago = req.body.modalidadpago;
    pagos = req.body.pagos;

  // tomar los parametros y asignarlos a variable output
  //output=req.params.id;
  // si es string se ponen ""
  conn.query('INSERT INTO tratamientos_pacientes (idtratamiento,idpaciente,ncitas,iddoctor,modalidadpago,pagos) VALUES ("'+idtratamiento+'","'+idpaciente+'","'+ncitas+'","'+iddoctor+'","'+modalidadpago+'","'+pagos+'");',function (error,result,fields) {
    if (error){
      res.status(422).json(["Error"]);
    }else{
      res.status(200).json(result);
    }
    });
  })

module.exports = router;