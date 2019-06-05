var express = require('express');
var router = express.Router();
var conn = require('./conexion');

//trae todos los datos
router.get('/mostrar',function(req,res,next){
  conn.query('SELECT * FROM doctores',function(error,result,fields){
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
  conn.query('SELECT * FROM doctores WHERE iddoctores = '+output+';',function (error,result,fields) {
    if (error){
      res.status(422).json(["Error"]);
    }else{
      res.status(200).json(result);
    }
    });
  })

//Eliminar datos metodos
router.post('/eliminar',function (req,res,next) {
  iddoctores= req.body.iddoctores;

  // conn.connect();
  // tomar los parametros y asignarlos a variable output

    conn.query('DELETE from doctores  WHERE iddoctores = "'+iddoctores+'";',function (error,result,fields) {
      if (error){
        res.status(422).json(["Error"]);
      }else{
        res.status(200).json(result);
      }
      });
    });
//actualizar datos método

router.post('/actualizar',function (req,res,next) {
  iddoctores=req.body.iddoctores;
  Nombre = req.body.Nombre;
    apaterno = req.body.apaterno;
    amaterno = req.body.amaterno;
    genero	= req.body.genero;
    fracc = req.body.fracc;
    num	 = req.body.num;
    calle = req.body.calle;
    edad = req.body.edad;
    telefono = req.body.telefono;
    correo	 = req.body.correo;
    cedula = req.body.cedula;
    iddepartamento = req.body.iddepartamento;
    sueldo = req.body.sueldo;
    especialidad = req.body.especialidad;
    nconsultorio =req.body.nconsultorio;

// conn.connect();
// tomar los parametros y asignarlos a variable output

  conn.query('UPDATE doctores SET Nombre="'+Nombre+'", apaterno = "'+apaterno+'", amaterno = "'+amaterno+'",genero= "'+genero+'",fracc="'+fracc+'",num="'+num+'",calle="'+calle+'",edad="'+edad+'",telefono="'+telefono+'",correo="'+correo+'",cedula="'+cedula+'",iddepartamento="'+iddepartamento+'",sueldo="'+sueldo+'",especialidad="'+especialidad+'",nconsultorio = "'+nconsultorio+'" WHERE iddoctores = "'+iddoctores+'";',function (error,result,fields) {
    if (error){
      res.status(422).json(["Error"]);
    }else{
      res.status(200).json(result);
    }
    });
  });


// trae 1 solo dato
router.post('/insertar',function (req,res,next) {

    Nombre = req.body.Nombre;
    apaterno = req.body.apaterno;
    amaterno = req.body.amaterno;
    genero	= req.body.genero;
    fracc = req.body.fracc;
    num	 = req.body.num;
    calle = req.body.calle;
    edad = req.body.edad;
    telefono = req.body.telefono;
    correo	 = req.body.correo;
    cedula = req.body.cedula;
    iddepartamento = req.body.iddepartamento;
    sueldo = req.body.sueldo;
    especialidad = req.body.especialidad;
    nconsultorio =req.body.nconsultorio;

  // conn.connect();
  // tomar los parametros y asignarlos a variable output
  output=req.params.id;
  // si es string se ponen ""
  conn.query('INSERT INTO doctores (Nombre,apaterno,amaterno,genero,cedula,fracc,num,calle,edad,telefono,correo,especialidad,nconsultorio,sueldo,iddepartamento) VALUES ("'+Nombre+'","'+apaterno+'","'+amaterno+'","'+genero+'","'+cedula+'","'+fracc+'","'+num+'","'+calle+'","'+edad+'","'+telefono+'","'+correo+'","'+especialidad+'","'+nconsultorio+'","'+sueldo+'","'+iddepartamento+'");',function (error,result,fields) {
    if (error){
      res.status(422).json(["Error"]);
    }else{
      res.status(200).json(result);
    }
    });
  })

module.exports = router;