app.component('affichage',{
    template:
    /*html*/
    `
    <div class="affichagetenue">
    <ul v-for="tenue in tenueliste">
    <li class="tenues">
    <div class="donnee">Nom tenue: {{tenue.nomtenue}}</div>
    <div class="donnee">Temps: {{tenue.temps}}</div>
    <div class="donnee">Haut: {{tenue.haut}}</div>
    <div class="donnee">Bas: {{tenue.bas}}</div>
    <div class="donnee">Chaussures: {{tenue.chaussures}}</div>
    <div class="donnee">Accessoire: {{tenue.accessoire}}</div>
    <div class="donnee">Style: {{tenue.style}}</div>
    </li>
    </ul>
    <div class="affichagevetement">
    <ul v-for="vetement in vetementliste">
    <li class="vetements">
    <div class="donnee">Nom vêtement: {{vetement.nomvetement}}</div>
    <div class="donnee">Conditions météo: {{vetement.conditionsmétéo}}</div>
    <div class="donnee">Style: {{vetement.style}}</div>
    <div class="donnee">Catégorie: {{vetement.categorie}}</div>
    </li>
    </ul>
    </div>
    </div>
    
    `,
    data(){
        return{ 
        tenueliste:[],
        vetementliste:[],
        styleliste:[],
        tempsliste:[],
        }
    },
    created(){

        
        const request1=axios({
            method: 'get',
            url:'http://localhost:3000/temps',
            reponseType: 'stream',
            
           
            
        
        })
            request1.then((res1)=>{
            this.tempsliste=res1.data.data
        })

const requestP=axios({
            method: 'get',
            url:'http://localhost:3000/style',
            reponseType: 'stream',
            
           
            
        
        })
            requestP.then((res0)=>{
            this.styleliste=res0.data.data
            
        })

        const request2=axios({
            method: 'get',
        url:'http://localhost:3000/vetements',
        reponseType: 'stream',
        })
        request2.then((res2)=>{
            let m=0
            for (let j=0;j<res2.data.data.length;j++){
                if (this.proprietaire===res2.data.data[j].proprietaire){
                    var objet={idvetement:null,nomvetement:"",conditionsmétéo:"",categorie:"",style:""}
                    objet.idvetement=res2.data.data[j].idvetement
                    objet.nomvetement=res2.data.data[j].nomvetement
                    for (let q=0;q<this.styleliste.length;q++){
                        
                        if (res2.data.data[j].style===this.styleliste[q].idstyle){
                            objet.style=this.styleliste[q].nomstyle
                        }
                    }
                    objet.categorie=res2.data.data[j].categorie
                    if (res2.data.data[j].pourchaud===1){
                        objet.conditionsmétéo+="Chaud "
                    }
                    if (res2.data.data[j].pourfroid===1){
                        objet.conditionsmétéo+="Froid "
                    }
                    if (res2.data.data[j].pourfroid===0 && res2.data.data[j].pourchaud===0){
                        objet.conditionsmétéo+="Tiède "
                    }
                    if (res2.data.data[j].pourpluie===1){
                        objet.conditionsmétéo+="Pluie "
                    }
                    if (res2.data.data[j].poursoleil===1){
                        objet.conditionsmétéo+="Soleil "
                    }
                    if (res2.data.data[j].poursoleil===0 && res2.data.data[j].pourpluie===0){
                        objet.conditionsmétéo+="Couvert "
                    }
                    if (res2.data.data[j].pourvent===1){
                        objet.conditionsmétéo+="Vent violent "
                    }
                    this.vetementliste[m]=objet
                    m++

                }
            }


        })






        const request3=axios({
            method: 'get',
            url:'http://localhost:3000/tenue',
            reponseType: 'stream',
            
           
            
        
        })
        request3.then((res)=>{ 
            let n=0
            for (let i=0;i<res.data.data.length;i++){
                if (this.proprietaire===res.data.data[i].proprietaire){
                    let objet={idtenue:null,nomtenue:"",temps:"",haut:"",style:"",bas:"",chaussures:"",accessoire:""}
                    objet.nomtenue=res.data.data[i].nomtenue
                    objet.idtenue=res.data.data[i].idtenue
                    for (let p=0;p<this.styleliste.length;p++){
                        
                        if (res.data.data[i].style===this.styleliste[p].idstyle){
                            objet.style=this.styleliste[p].nomstyle
                        }
                    }
                    for (let l=0;l<this.tempsliste.length;l++){
                        
                        if (res.data.data[i].style===this.tempsliste[l].idtemps){
                            objet.temps=this.tempsliste[l].nomtemps
                        }
                    }
                    for (let k=0;k<this.vetementliste.length;k++){
                        
                        if (res.data.data[i].haut===this.vetementliste[k].idvetement){
                            objet.haut=this.vetementliste[k].nomvetement
                        }
                        if (res.data.data[i].bas===this.vetementliste[k].idvetement){
                            objet.bas=this.vetementliste[k].nomvetement
                        }
                        if (res.data.data[i].chaussures===this.vetementliste[k].idvetement){
                            objet.chaussures=this.vetementliste[k].nomvetement
                        }
                        if (res.data.data[i].accessoire===this.vetementliste[k].idvetement){
                            objet.accessoire=this.vetementliste[k].nomvetement
                        }
                    }
                    this.tenueliste[n]=objet
                    n++
                }
            }
        }
        )
    },
    computed:{
      proprietaire(){return this.$store.getters.getUser.idutilisateur}
    },
})