app.component('tenuesform',{
    template:
    /*html*/
    `
    
  
    <form class="tenues-form">
    <label for="nomtenue">Nom de la tenue:</label>
    <input id="nomtenue" v-model="nomtenue">
    <label for="style">Style:</label>
    <select id="style" v-model="stylenom">
    <option v-for="style in styleliste" >{{ style.nomstyle }}</option>
    </select>
    <label for="Temps">Temps:</label>
    <select id="temps" v-model="tempsnom">
    <option v-for="temps in tempsliste" >{{ temps.nomtemps }}</option>
    </select>
    <label for="haut">En haut:</label>
    <select id="haut" v-model="hautnom">
    <option v-for="haut in hautliste">{{ haut.nomvetement }}</option>
    </select>
    <label for="bas" >En bas:</label>
    <select id="bas" v-model="basnom">
    <option v-for="bas in basliste">{{ bas.nomvetement }}</option>
    </select>
    <label for="chaussures" >En chaussures:</label>
    <select id="chaussures" v-model="chaussuresnom">
    <option v-for="chaussures in chaussuresliste">{{ chaussures.nomvetement }}</option>
    </select>
    <label for="accessoire" >En accessoire:</label>
    <select id="accessoire" v-model="accessoirenom">
    <option v-for="accessoire in accessoireliste">{{ accessoire.nomvetement }}</option>
    </select>
    <input class="button" type="submit" value="Créer la tenue" v-on:click="createtenue"> 
    


    
    
    
    
    
    
    </form>
    
    
    
    `,
    data(){
      return{
        
          idtenue:null,
          nomtenue:" ",
          haut:null,
          bas:null, 
          chaussures:null, 
          accessoire:null,
          style:null,
          styleliste:[],
          stylenom:"",
          temps:null,
          tempsliste:[],
          tempsnom:"",
          hautliste:[],
          hautnom:"",
          basliste:[],
          basnom:"",
          chaussuresliste:[],
          chaussuresnom:"",
          accessoireliste:[],
          accessoirenom:"",
          vetementliste:[],
        


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
    const request2=axios({
      method: 'get',
      url:'http://localhost:3000/temps',
      reponseType: 'stream',
      
     
      
  
  })
      request2.then((res1)=>{
      this.tempsliste=res1.data.data
  })
  const request3=axios({
    method: 'get',
    url:'http://localhost:3000/vetements',
    reponseType: 'stream',
    
   
    

})
    request3.then((res2)=>{
      let a=0
      let b=0
      let c=0
      let d=0
    for (let i=0;i<res2.data.data.length;i++){
      if (res2.data.data[i].proprietaire===this.proprietaire && res2.data.data[i].categorie==="haut"){
        this.hautliste[a]=(res2.data.data[i])
        a++
      }
      else if (res2.data.data[i].proprietaire===this.proprietaire && res2.data.data[i].categorie==="bas"){
        this.basliste[b]=(res2.data.data[i])
        b++
      }
      else if (res2.data.data[i].proprietaire===this.proprietaire && res2.data.data[i].categorie==="chaussures"){
        this.chaussuresliste[c]=(res2.data.data[i])
        c++
      }
      else if (res2.data.data[i].proprietaire===this.proprietaire && res2.data.data[i].categorie==="accessoire"){
        this.accessoireliste[d]=(res2.data.data[i])
        d++
      }
    }
})
    },
  methods:{
    
    createtenue(){
      if (this.stylenom==="" || this.tempsnom==="" || this.hautnom==="" || this.basnom==="" || this.nomtenue==="" || this.chaussuresnom==="" || this.accessoirenom===""){
        alert("Veuillez remplir le formulaire en entier")
      } 
      else{ 
      for (let i=0;i<this.styleliste.length;i++){
        if (this.styleliste[i].nomstyle===this.stylenom){
            this.style=this.styleliste[i].idstyle
        }
    }
    for (let i=0;i<this.tempsliste.length;i++){
      if (this.tempsliste[i].nomtemps===this.tempsnom){
          this.temps=this.tempsliste[i].idtemps
      }
  }
  for (let i=0;i<this.hautliste.length;i++){
    if (this.hautliste[i].nomvetement===this.hautnom){
        this.haut=this.hautliste[i].idvetement
    }
}
for (let i=0;i<this.basliste.length;i++){
  if (this.basliste[i].nomvetement===this.basnom){
      this.bas=this.basliste[i].idvetement
  }
}
for (let i=0;i<this.chaussuresliste.length;i++){
  if (this.chaussuresliste[i].nomvetement===this.chaussuresnom){
      this.chaussures=this.chaussuresliste[i].idvetement
  }
}
for (let i=0;i<this.accessoireliste.length;i++){
  if (this.accessoireliste[i].nomvetement===this.accessoirenom){
      this.accessoire=this.accessoireliste[i].idvetement
  }
}
const request=axios({
  method: 'post',
  url:'http://localhost:3000/tenue',
  reponseType: 'stream',
  data:{
      nomtenue:this.nomtenue,
      haut:this.haut,
      bas:this.bas,
      chaussures:this.chaussures,
      accessoire:this.accessoire,
      temps:this.temps,
      style:this.style,
      proprietaire:this.proprietaire,

  }
  
 
  

})
request.then((res)=>{
  alert("La tenue a été enregistrée")
})}

    }
  }







})