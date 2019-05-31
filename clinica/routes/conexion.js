var mysql = require('mysql');
var router = express.Router();
var connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'clinica',
});
/*connection.connect(function(error){
   if(error){
      throw error;
   }else{
      console.log('Conexion correcta.');
   }
});
*/
router.get('/mostrar',function(req,res,next){
    connection.query('SELECT * FROM pacientes',function(error,result,fields){
       if (error){
          res.status(422).json([]);
       }else{
          res.status(200).json(result);
       }
    }); 
 });