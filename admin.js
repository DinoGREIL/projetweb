app.component('admin',{
    template:
    /*html*/
    `
    <div class="admin">
    <ul v-for="utilisateur in listeutilisateur">
    <li class="utilisateurs">
    <div>Identifiant:{{utilisateur.idutilisateur}}</div>
    <div>Nom d'utilisateur: {{utilisateur.identifiant}}</div>
    <div>Mot de passe: {{utilisateur.motdepasse}}</div>
    <div>Admin: {{utilisateur.premium==1}}</div>
    </li>
    </ul>
    <form class="eraser" >
    <label for="effaceur">Identifiant du compte à effacer:</label>
    <input id="effaceur" type="number" v-model="aeffacer">
    <input id="effaceur" class="button" type="submit" v-on:click="effacer(aeffacer)"></form>
    </div>
    
    `,
    data(){
        return{
            listeutilisateur:[],
            aeffacer:null
        }
    },
    created(){
        
        const request=axios({
        method: 'get',
        url:'http://localhost:3000/utilisateurs',
        reponseType: 'stream',
        
       
        
    
    })
        request.then((res)=>{
        this.listeutilisateur=res.data.data
    })
        },
        methods:{
            effacer(id){ 
                let peut=false
                for (let i=0;i<this.listeutilisateur.length;i++){
                    if (this.listeutilisateur[i].idutilisateur==id && this.listeutilisateur[i].premium===0){
                        peut=true
                    }
                }
                if (peut){ 
            const request=axios({
                method: 'delete',
                url:'http://localhost:3000/utilisateurs/'+id.toString(),
                reponseType: 'stream',
                
            
            })
                request.then((res)=>{
                alert("Utilisateur effacé")
            })}
                else{
                    alert("Utilisateur admin: impossible de l'effacer ")
                }
        }
        }


})