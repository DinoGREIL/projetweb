

app.component('vetementform',{
    template:
    /*html*/
    `
    
    <form class="vetement-form">
    <label for="nomvetement">Nom du vêtement:</label>
    <input id="nomvetement" v-model="nomvetement">
    <label for="style">Style:</label>
    <select id="style" v-model="stylenom">
    <option v-for="style in styleliste">{{style.nomstyle}}</option>
    </select>
    <label for="categorie" >Catégorie:</label>
    <select id="categorie" v-model="categorie">
    <option class="haut">haut</option>
    <option class="bas">bas</option>
    <option class="chaussures">chaussures</option>
    <option class="accessoire">accessoire</option>
    </select>
    <label for="ciel">Ciel:</label>
    <select id="ciel" v-model="ciel">
    <option class="soleil">Soleil</option>
    <option class="couvert">Couvert</option>
    <option class="pluie">Pluie</option>
  </select>
  <label for="temperature">Température:</label>
  <select id="temperature" v-model="temperature">
  <option class="chaud">Chaud</option>
  <option class="tiede">Tiède</option>
  <option class="froid">Froid</option>
</select>
<label for="vent">Vent violent:</label>
  <select id="vent" v-model="vent">
  <option class="oui">Oui</option>
  <option class="non">Non</option>
</select>
<input class="button" type="submit" value="Créer le vêtement" v-on:click="creationvetement">  
</form>
    
    
    
    `,
    data(){
        return{
            
            idvetement:null,
            nomvetement:"",
            pourchaud:null,
            pourfroid:null,
            pourpluie:null,
            poursoleil:null,
            pourvent:null,
            style:null,
            
            categorie:"",
            styleliste:[],
            vent:"",
            temperature:"",
            stylenom:"",
            ciel:"",


        }
    },
    computed:{
        proprietaire(){return this.$store.getters.getUser.idutilisateur}
    },
    created(){
        
    const request=axios({
    method: 'get',
    url:'http://localhost:3000/style',
    reponseType: 'stream',
    
   
    

})
    request.then((res)=>{
    this.styleliste=res.data.data
})
    },
    methods:{
        creationvetement(){
            if (this.temperature==="" || this.ciel==="" || this.vent==="" || this.style===""){
                alert("Veuillez remplir le formulaire entièrement")
            }
            else{ 
            if (this.temperature=="Chaud"){ 
            this.pourchaud=1
            this.pourfroid=0}
            else if (this.temperature=="Froid"){
                this.pourfroid=1
                this.pourchaud=0
            }
            else{
                this.pourchaud=0
                this.pourfroid=0
            }
            if (this.ciel=="Soleil"){ 
                this.poursoleil=1
            this.pourpluie=0}
                else if (this.ciel=="Pluie"){
                    this.poursoleil=0
                    this.pourpluie=1
                }
                else{
                    this.poursoleil=0
                    this.pourpluie=0
                }
            if (this.vent=="Oui"){
                this.pourvent=1
            }
            else{
                this.pourvent=0
            }
            for (let i=0;i<this.styleliste.length;i++){
                if (this.styleliste[i].nomstyle===this.stylenom){
                    this.style=this.styleliste[i].idstyle
                }
            }
                const request=axios({
                    method: 'post',
                    url:'http://localhost:3000/vetements',
                    reponseType: 'stream',
                    data:{
                        nomvetement:this.nomvetement,
                        pourchaud:this.pourchaud,
                        pourfroid:this.pourfroid,
                        poursoleil:this.poursoleil,
                        pourpluie:this.pourpluie,
                        pourvent:this.pourvent,
                        style:this.style,
                        categorie:this.categorie,
                        proprietaire:this.proprietaire,

                    }
                    
                   
                    
    
                })
                request.then((res)=>{
    
                    alert('Le vêtement a été créer')
                    
    
                    
    
                }) }   

        }
    }








})