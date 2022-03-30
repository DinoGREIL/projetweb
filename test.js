app.component('test',{
    template:
    /*html*/
    `<div v-if="token!==''">
    <ul class="navbar">
  <li class="element" id="nav"><input class="button" id="bar" type="submit" value="Mes tenues et vêtements" v-on:click="affiche"></li>
  <li class="element" id="nav"><input class="button" id="bar" type="submit" value="Créer un vêtement" v-on:click="creervetement"></li>
  <li class="element" id="nav"><input class="button" id="bar" type="submit" value="Créer une tenue" v-on:click="creertenue"></li>
  <div v-if="premium===true"><li class="element" id="nav"><input class="button" id="bar" type="submit" value="Admin" v-on:click="voiradmin"></li></div>
  <li style="float:right" class="element" id="nav"><input class="button" id="bar" type="submit" value="Se déconnecter" v-on:click="deconnect"></li>
  </ul>
     
    <div v-if="choix==='affichage'">
    <affichage></affichage></div> 
    <div v-if="choix==='creervet'"><vetementform></vetementform></div>
    
    <div v-if="choix==='creerten'"><tenuesform></tenuesform></div>
    <div v-if="premium===true"><div v-if="choix==='vueadmin'"><admin></admin></div></div>
        
    </div>

<div v-else>
<div class="conteneur">
    <div class="connexion">
        
        <form class="connexion-form" @submit.prevent="connexion">
       <div class="titre"> Connexion :</div>
        <label for="identifiant">Nom d'utilisateur:</label>
        <input id="identifiant" v-model="identifiant">
        <label for="motdepasse">Mot de passe:</label>
        <input id="motdepasse" v-model="motdepasse" type="password">
        <input class="button" type="submit" value="Se connecter" >
        </form>
        
        <form class="creation-form" @submit.prevent="inscription" >
        <div class="titre">Créer un compte :</div>
        <label for="identifiantcreation">Nom d'utilisateur:</label>
        <input id="identifiantcreation" v-model="identifiantcreation" type="email">
        <label for="motdepassecreation">Mot de passe:</label>
        <input id="motdepassecreation" v-model="motdepassecreation" >
        <input class="button" type="submit" value="S'inscrire" >
        </form>
        </div>
    </div>
        
</div>
    
    `,
    data(){
        return{
            
            
            identifiant:"",
            motdepasse:"",
            identifiantcreation:"",
            motdepassecreation:"",
            choix:"affichage",


        }
    },
    
    
    computed:{
        token(){return this.$store.getters.isLoggedIn},
        premium(){return (this.$store.getters.getUser.premium===1)}
    },
    methods:{
        creervetement(){
            this.choix='creervet'
        },
        creertenue(){
            this.choix='creerten'
        },
        voiradmin(){
            this.choix='vueadmin'
        },
        affiche(){
            this.choix='affichage'

        },




        async connexion(){
            
            axios({
                method: 'post',
                url:'http://localhost:3000/login',
                reponseType: 'stream',
                data:{identifiant:this.identifiant,motdepasse:this.motdepasse}
                
               
                

            })
            .then((res)=>{
                if(res.data.msg==="Logged in!"){
                   this.$store.dispatch("login",{token:res.data.token,utilisateur:res.data.utilisateur}) 
                   alert("Connecté !")
                }
                else{
                    alert(res.data.msg)
                }
                
        }
                
                )
          

            

        },
        inscription(){
            
            if (this.identifiantcreation.length<3|| this.motdepassecreation.length<3){
                alert("Veuillez remplir le formulaire entièrement (mot de passe et identifiant faisant plus de 3 caractères)")
            }
            else{
            axios({
                method: 'post',
                url:'http://localhost:3000/utilisateurs',
                reponseType: 'stream',
                data:{identifiant:this.identifiantcreation,motdepasse:this.motdepassecreation}
                
               
                

            })
            .then((res)=>{
                
                if (res.data===""){
                    alert("Inscription réussie")
                }
                else{
                    alert(res.data.msg)
                }
               


                

            })}
        

        },
        deconnect(){
            this.$store.dispatch("logout",'')
        }
    }






})