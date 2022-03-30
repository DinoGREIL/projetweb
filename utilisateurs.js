const db = require('./db.js');
const helper = require('../helper');
const config = require('../config');
const bcrypt = require('bcryptjs/dist/bcrypt');

async function getMultipleutilisateur(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT idutilisateur, identifiant, motdepasse,premium
    FROM utilisateur LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  
  
  const meta = {page};

  return {
    data,
    meta
  }
}

module.exports = {
    getMultipleutilisateur,
    createutilisateur,
    updateutilisateur,
    removeutilisateur,
    
  }

async function createutilisateur(utilisateur){
  const requetcheck=`SELECT * FROM utilisateur WHERE identifiant = "${utilisateur.identifiant}";`
  const check= await db.query(requetcheck);
  
  const data = helper.emptyOrRows(check);
  
  if (data.length!==0){
    const msg="Déjà inscrit"
    
    return {msg};
}
else{ 

  bcrypt.hash(utilisateur.motdepasse,10, async function(err,hash){
    if(err){
      return{err}
    }
    else{
      const requet=`INSERT INTO utilisateur 
    (identifiant,motdepasse,premium) 
    VALUES 
    ("${utilisateur.identifiant}", "${hash}", 0)`
    
    const result = await db.query(
      
      requet
    );
      
    let message = 'Error in creating utilisateur';
      
    if (result.affectedRows) {
      
      message = 'utilisateur created successfully';
      return{message}
    }
  
    return {message};
    }



  })
    }
  }

async function updateutilisateur(id, utilisateur){
    const result = await db.query(
      `UPDATE utilisateur
      SET identifiant="${utilisateur.identifiant}", motdepasse="${utilisateur.motdepasse}", premium=${utilisateur.premium}
      WHERE idutilisateur=${id}` 
    );
  
    let message = 'Error in updating utilisateur';
  
    if (result.affectedRows) {
      message = 'utilisateur updated successfully';
    }
  
    return {message};
  }






async function removeutilisateur(id){
    const requet=`DELETE FROM utilisateur WHERE idutilisateur=${id}`
    
    const result = await db.query(
      requet
    );
  
    let message = 'Error in deleting utilisateur';
  
    if (result.affectedRows) {
      message = 'utilisateur deleted successfully';
    }
  
    return {message};
  }