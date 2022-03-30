const db = require('./db');
const helper = require('./helper');
const config = require('./config');

async function getMultipletemps(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT idtemps,nomtemps,ventviolent,chaud,froid,soleil,pluie
    FROM temps LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

module.exports = {
    getMultipletemps,
    createtemps,
    updatetemps,
    removetemps,
    
  }

async function createtemps(temps){
    const result = await db.query(
      `INSERT INTO temps 
      (nomtemps,ventviolent,chaud,froid,soleil,pluie) 
      VALUES 
      ("${temps.nomtemps}", ${temps.ventviolent}, ${temps.chaud},${temps.froid},${temps.soleil},${temps.pluie})`
    );
  
    let message = 'Error in creating temps';
  
    if (result.affectedRows) {
      message = 'temps created successfully';
    }
  
    return {message};
  }

async function updatetemps(id, temps){
    const result = await db.query(
      `UPDATE temps
      SET nomtemps="${temps.nomtemps}", ventviolent=${temps.ventviolent}, chaud=${temps.chaud},froid=${temps.froid},soleil=${temps.soleil},pluie=${temps.pluie}
      WHERE idtemps=${id}` 
    );
  
    let message = 'Error in updating temps';
  
    if (result.affectedRows) {
      message = 'temps updated successfully';
    }
  
    return {message};
  }






async function removetemps(id){
    const result = await db.query(
      `DELETE FROM temps WHERE idtemps=${id}`
    );
  
    let message = 'Error in deleting temps';
  
    if (result.affectedRows) {
      message = 'temps deleted successfully';
    }
  
    return {message};
  }
