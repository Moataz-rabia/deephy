<template>
    <div class="next">
        <div class="container">
        <div class="title">Calculation</div>
        <label for="hd">saisir hauteur courant (HD): </label><input type="number" name="" id="hd" v-model="hd" value="hd">
        <button class="calulatehd" @click="hdvaleur">valider</button>

        <div class="calculation-section">
            <div class="card">
                <h3>calcule poids</h3>
               <div class="radio-poind">
                <label for="pt">PT:</label><input type="radio" v-model="selectedweight" id="pt" name="p" value="pt">
                <label for="pt">PC:</label><input type="radio" v-model="selectedweight" id="pc" name="p" value="pc">
                <label for="pb1">PB1:</label><input type="radio" v-model="selectedweight" id="pb1" name="p" value="pb1">
                <label for="pb2">PB2:</label><input type="radio" v-model="selectedweight" id="pb2" name="p" value="pb2">
               </div>
                <p>Result: {{ result }}</p>
                <button class="calculate" @click="calculepoid">Calculer</button>
                <button class="cancel" @click="cancelpoid">Annuler</button>
                
            </div>
            <div class="card">
                <h3>calcule efforts</h3>
                <div class="radio-poind">
                <label for="rg">RG:</label><input type="radio" id="rg" name="e" v-model="selectedeffort" value="rg" >
                <label for="rh">RH:</label><input type="radio" id="rh" name="e" v-model="selectedeffort" value="rh">
                <label for="fg">FG:</label><input type="radio" id="fg" name="e" v-model="selectedeffort" value="fg">
                <label for="fh">FH:</label><input type="radio" id="fh" name="e" v-model="selectedeffort" value="fh">
               </div>
                <p>Result: {{ resulteffort }}</p>
                <button class="calculate" @click="calculeefforts">Calculer</button>
                <button class="cancel" @click="canceleffort">Annuler</button>
            </div>
            <div class="card">
                <h3>calcule angles</h3>
                <div class="radio-poind">
                  <label for="">alpha</label><input type="radio" id="alpha" name="a" v-model="selecteangle" value="alpha">
                  <label for="">beta</label><input type="radio" id="beta" name="a" v-model="selecteangle" value="beta">
                </div>
                
                <p>Result: {{ resultangle }}</p>
                <button class="calculate" @click="calculerangle">Calculer</button>
                <button class="cancel"  @click="cancelangle">Annuler</button>
            </div>
            <div class="card">
                <h3>calculer longueur de vérin</h3>
                <p>Result: {{ resultverin }}</p>
                <button class="calculate" @click="calculeverin">Calculer</button>
                <button class="cancel" @click="cancelverin">Annuler</button>
            </div>
            <div class="card">
                <h3>calcule des points</h3>
                <div class="radio-poind">
                <label for="pd">D:</label><input type="radio" v-model="selectpoint" id="pd" name="p" value="pd">
                <label for="pe">E:</label><input type="radio" v-model="selectpoint" id="pe" name="p" value="pe">
                <label for="pk">K:</label><input type="radio" v-model="selectpoint" id="pk" name="p" value="pk">
                <label for="ph">H:</label><input type="radio" v-model="selectpoint" id="ph" name="p" value="ph">
                <label for="ph">G:</label><input type="radio" v-model="selectpoint" id="pg" name="p" value="pg">
                <label for="ph">M:</label><input type="radio" v-model="selectpoint" id="pm" name="p" value="pm">
                <label for="ph">N:</label><input type="radio" v-model="selectpoint" id="pn" name="p" value="pn">

              </div>
                <p>Result: {{ resultpoint }}</p>
                <button class="calculate" @click="calculepoints">Calculer</button>
                <button class="cancel" @click="cancelverin">Annuler</button>
              </div>
        </div>
    
    </div>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';
export default {
  name: 'NextPage',
  data() {
    return {
      selectedweight: '',
      selectedeffort:'',
      selecteangle:'',
      selectpoint:'',
      g: 9.81, 
      result: '',
      resulteffort:'',
      resultverin:'',
      hd:765,
      resultangle:'',
      resultpoint:'',
      yd:0,
      xd:0,
      ye:0,
      xh:0,
      xn:0,
      yn:0
    };
},
/**
 * Cette méthode permet d'importer les données à partir du store.
 */
  computed: {
    ...mapGetters({
      lb:'getlb',
      hMax: 'getHMax',
      hMin: 'getHMin',
      load: 'getLoad',
      mt: 'getMt',
      mc: 'getMc',
      fg: 'getFg',
      he: 'getHe',
      tn: 'getTn',
      un: 'getUn',
      vm: 'getVm',
      wm: 'getWm',
      xgt:'getxgt',
      xgc:'getxgc',
    }),
  },
  methods: {
    /* Cette fonction vérifie la valeur de HD. Si HD dépasse HMax, elle remplace HD par HMax. De même, si HD est inférieur à HMin, elle remplace HD par HMin. */
    hdvaleur() {
    if(this.hd===''){
      alert(' saisir valeur');
    }
    else if (this.hd > this.hMax) {
      this.hd = this.hMax;
      alert("HD value cannot exceed HMax value ");
    }
    else if(this.hd<this.hMin || this.hd==='null'){
      this.hd=this.hMin;
      alert("hd inferieur a hauteur maximale")
    }
  },
    calculepoid() {
      let ptpoid,pcpoid,pb1poid,pb2poid;

      if (this.selectedweight === 'pt') {
        ptpoid=this.mt * this.g;
        this.result = `Weight (PT): ${ptpoid} N`;

      } 
      else if (this.selectedweight === 'pc') {
        pcpoid=this.mc * this.g;
        this.result = `Weight (pc): ${pcpoid} N`;

      } 
      else if (this.selectedweight === 'pb1') {
        pb1poid=this.fg * this.g;
        this.result = `Weight (pb1): ${pb1poid} N`; 
      } 
      else if (this.selectedweight === 'pb2') {
        pb2poid=this.he * this.g
        this.result = `Weight (pb2): ${pb2poid} N`; 
      } 
      else {
        this.result = 'Please select a weight option.';
      }
    },
    cancelpoid() {
      this.selectedweight = '';
      this.result = '';
    },
  
    /* here i make some local variables to store  */
    calculeefforts(){
      let rgf,rhf,fgf,fhf;

        if (this.selectedeffort === 'rg') {
          rgf=(-(this.xgt)*this.ptpoid+this.xgc*this.pcpoid)/this.xg;
          this.resulteffort = `effort (RG): ${rgf} N`;
      } 

      else if (this.selectedeffort === 'rh') {
        rhf=(-this.rg)-(this.ptpoid)-(this.pcpoid);
        this.resulteffort = `effort (RH): ${rhf} N`;

      }

      else if (this.selectedeffort === 'fg') {
        fgf=-rgf;
        this.resulteffort = `effort (FG): ${fgf} N`; 

      } 
      
      else if (this.selectedeffort === 'fh') {
        fhf=-rhf;
        this.resulteffort = `effort (FH): ${fhf} N`; 

      } 
      
      else {
        this.resulteffort = 'Please select an effort option.';
      }
    },

    canceleffort(){
        this.selectedeffort='';
        this.resulteffort='';
    },

   

    calculerangle(){
      let anglealpha;
      if (this.selecteangle === 'alpha') {
        anglealpha=Math.asin(this.hd/this.lb);
        this.resultangle=`angle alpha est ${Math.asin(anglealpha)} `;
      } 
      else if(this.selecteangle==='beta'){
        this.resultangle=`angle beta est ${Math.atan2(this.xn-this.ptxm,this.yn-this.ptym)}`
      }
      else {
        this.resultangle = 'choisir un angle';
      }
    },
    cancelangle(){
      this.resultangle='';
    },
    calculepoints(){
      let ptxg,ptyg,ptxe,ptyh,ptxk,ptyk,ptxm,ptym;

      /* calcule de point D */
      if(this.selectpoint==='pd'){
        this.resultpoint=`coordonnées de point D (${this.xd}),(${this.xd})`;
      }
      /* calcule de point E */

      else if(this.selectpoint==='pe'){
        ptxe=(this.lb)*Math.cos(this.anglealpha);
        this.resultpoint=`coordonnées de point E (${ptxe}),(${this.ye})`;
      }
      /* calcule de point K */

      else if(this.selectpoint==='pk'){
        ptxk=ptxe/2;
        ptyk=this.hd/2;
        this.resultpoint=`coordonnées de point K (${ptxk}),(${ptyk})`;
      }
      /* calcule de point H */

      else if(this.selectpoint==='ph'){
        ptyh=this.hd;
        this.resultpoint=`coordonnées de point H (${this.xh}),(${ptyh})`;
      }
      /* calcule de point G */
      
      else if(this.selectpoint==='pg'){
        ptxg=ptxe;
        ptyg=this.hd;
        this.resultpoint=`coordonnées de point G (${ptxg,ptyg})`;
      }
      /* calcule de point M */

      else if(this.selectpoint==='pm'){
        ptxm=this.vm*Math.cos(-this.anglealpha)-this.wm*Math.sin(-this.anglealpha);
        ptym=ptyh+this.vm*Math.sin(-this.anglealpha)+this.wm*Math.cos(-this.anglealpha);
        this.resultpoint=`coordonnées de point M (${ptxm,ptym}) <br>  `;
      }
      else if(this.selectpoint==='pn'){
        this.resultpoint=`coordonnées de point N (${this.xn},${this.yn}) <br> formule :  `;
      }
      
    }
  }
};

</script>
<style scoped>

.next{
  margin: 0;
  font-family: Arial, sans-serif;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/background.jpg') no-repeat center center fixed;
  background-size: cover;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
p{
    width: 100%;
    padding: 10px;
    height: 30%;
    margin-bottom: 20px;
    border: 2px solid orange;
    border-radius: 5px;
    font-size: 1em;
}

.container {
  text-align: center;
  width: 80%;
}

.title {
  font-size: 3em;
  font-weight: bold;
  margin-bottom: 50px;
}

.calculation-section {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.card {
  background-color:rgba(255, 111, 63, 0.7);
  padding: 20px;
  border-radius: 10px;
  width: 500px;
  margin: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  height: 300px;
}

.card h3 {
  margin-bottom: 20px;
  font-size: 1.5em;
  text-transform: uppercase;
}

.card input {
  width: 100%;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 5px;
  font-size: 1em;
}

.card button {
  padding: 10px 20px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  font-weight: bolder;
}

.card button.calculate {
  background-color: #c53100;
  color: white;
  transition: background 0.3s, transform 0.3s;

}

.card button.cancel {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
            border: 2px solid #ff6f3f;
            transition: background 0.3s, transform 0.3s;

        }

        .card button:hover {
            background: #ff3f1f;
            transform: scale(1.1);
        }
        .card button.cancel:hover {
            background: white;
            transform: scale(1.1);
        }
        .radio-poind{
            display: flex;
            margin-bottom: 20px;
            padding: 10px;
        }
input[type='number'] {
  width: 50%;
padding: 10px;
  color:white;
  background: transparent;
  margin-bottom: 15px;
  border: solid 2px #ff6f3f;
  border-radius: 10px;
}
input::placeholder{
  color: #ff6f3f;
  font-size: 16px;
}

.container > button{
  padding: 10px 20px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  font-weight: bolder;
  margin-left: 20px;
  transition: background 0.3s, transform 0.3s;
}

.container > button:hover{
  background: #ff3f1f;
  transform: scale(1.1);
  color: white;
}
</style>
