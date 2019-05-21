var mysql = require('mysql');
var connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'clinica',
   port: 3306
});
connection.connect(function(error){
   if(error){
      throw error;
   }else{
      console.log('Conexion correcta.');
   }
});

var query = connection.query('INSERT INTO tratamientos(Nombre,descripcion,precio) VALUES(?,?,?)', ['Depilación laser', 'Depilación total de todo el cuerpo', '2567.90'], function(error, result){
    if(error){
       throw error;
    }else{
       console.log(result);
    }
  }
 );
connection.end();