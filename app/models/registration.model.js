const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'conviencestore.cw3crbgltbxe.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'eecs4413backend',
  database: 'ConviStore'
})

function connected(){
  connection.connect((err) => {
    if(err) throw err;
    console.log("Successfully Connected");
  })
}

function select(attribute){
  let allUser = [];
  let sql = `SELECT ${attribute} FROM User`;
  let query = connection.query(sql,(err,result,field) =>{
    if(err) throw err;
      return Object.values(JSON.parse(JSON.stringify(result)));
  })
}
module.exports = {connection, connected,select};