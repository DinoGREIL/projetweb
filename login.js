const db = require('./db.js');

const bcrypt=require('bcryptjs')
const jwt=require("jsonwebtoken")

exports.connect=async (req,res) =>{
    const requet=`SELECT * FROM utilisateur WHERE identifiant = '${req.body.identifiant}';`
    
    try{const result=await db.query(requet)
        
        if (!result.length){
            const msg="Username or password is incorrect!"
            return {
                msg
              };
        }
        
        const comparer=bcrypt.compare(
            req.body.motdepasse,
            result[0]['motdepasse'])
            
                if (!comparer){
                    
                    const msg="Username or password is incorrect!"
                    return{
                      msg
                    };
                  }
                else{
                      
                    const token = jwt.sign({
                        username: result[0].identifiant,
                        userId: result[0].idutilisateur
                      },
                      'SECRETKEY', {
                        expiresIn: '7d'
                      }
                    );
                    const utilisateur=result[0]
                    const msg="Logged in!"
                    return {
                        msg,
                        token,
                        utilisateur
                        
                      };

            }
    
    }catch (err){
        return err
    }
}