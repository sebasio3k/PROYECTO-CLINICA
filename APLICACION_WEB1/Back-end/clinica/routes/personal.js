var express = require('express');
var router = express.Router();
var conn = require('./conexion');

//trae todos los datos
router.get('/mostrar',function(req,res,next){
  conn.query('SELECT * FROM personal',function(error,result,fields){
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
  conn.query('SELECT * FROM personal WHERE idpersonal = '+output+';',function (error,result,fields) {
    if (error){
      res.status(422).json(["Error"]);
    }else{
      res.status(200).json(result);
    }
    });
  })


//Eliminar datos metodos
router.post('/eliminar',function (req,res,next) {
  idpersonal= req.body.idpersonal;
  
  // conn.connect();
  // tomar los parametros y asignarlos a variable output
  
    conn.query('DELETE from personal  WHERE idpersonal = "'+idpersonal+'";',function (error,result,fields) {
      if (error){
        res.status(422).json(["Error"]);
      }else{
        res.status(200).json(result);
      }
      });
    });
//actualizar datos método  

router.post('/actualizar',function (req,res,next) {
  idpersonal = req.body.idpersonal;
  idtipo = req.body.idtipo;
    nombre = req.body.nombre;
    apaterno = req.body.apaterno;
    amaterno = req.body.amaterno;
    genero	= req.body.genero;
    fracc = req.body.fracc;
    Num	 = req.body.Num;
    calle = req.body.calle;
    edad = req.body.edad;
    telefono = req.body.telefono;
    correo	 = req.body.correo;
    cedula = req.body.cedula;
    iddepartamento = req.body.iddepartamento;
    sueldo = req.body.sueldo;

// conn.connect();
// tomar los parametros y asignarlos a variable output

  conn.query('UPDATE personal SET idtipo="'+idtipo+'", nombre = "'+nombre+'", apaterno = "'+apaterno+'",amaterno= "'+amaterno+'",genero="'+genero+'",fracc="'+fracc+'",Num="'+Num+'",calle="'+calle+'",edad="'+edad+'",telefono="'+telefono+'",correo="'+correo+'",cedula="'+cedula+'",iddepartamento="'+iddepartamento+'",sueldo="'+sueldo+'" WHERE idpersonal = "'+idpersonal+'";',function (error,result,fields) {
    if (error){
      res.status(422).json(["Error"]);
    }else{
      res.status(200).json(result);
    }
    });
  });

// trae 1 solo dato
router.post('/insertar',function (req,res,next) {
    idtipo = req.body.idtipo;
    nombre = req.body.nombre;
    apaterno = req.body.apaterno;
    amaterno = req.body.amaterno;
    genero	= req.body.genero;
    fracc = req.body.fracc;
    Num	 = req.body.Num;
    calle = req.body.calle;
    edad = req.body.edad;
    telefono = req.body.telefono;
    correo	 = req.body.correo;
    cedula = req.body.cedula;
    iddepartamento = req.body.iddepartamento;
    sueldo = req.body.sueldo;

  // conn.connect();
  // tomar los parametros y asignarlos a variable output
  output=req.params.id;
  // si es string se ponen ""
  conn.query('INSERT INTO personal (idtipo,nombre,apaterno,amaterno,genero,fracc,Num,calle,edad,telefono,correo,cedula,iddepartamento,sueldo) VALUES ("'+idtipo+'","'+nombre+'","'+apaterno+'","'+amaterno+'","'+genero+'","'+fracc+'","'+Num+'","'+calle+'","'+edad+'","'+telefono+'","'+correo+'","'+cedula+'","'+iddepartamento+'","'+sueldo+'");',function (error,result,fields) {
    if (error){
      res.status(422).json(["Error"]);
    }else{
      res.status(200).json(result);
    }
    });
  })

module.exports = router;