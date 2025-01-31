<template>
    <div class="next">
        <div class="container">
        <div class="title">Calculation</div>
        <p style="border: none; width: 30%; margin: 0 auto;margin-bottom: 10px; background-color: rgba(241, 24, 24, 0.72);">Gardez à l'esprit que certains calculs nécessitent des calculs précédents, donc effectuez tous les calculs étape par étape.</p>
        <label for="hd">saisir hauteur courant (HD): </label><input type="number" name="" placeholder="il faut saisir valeur de hauteur courante pour le  calcul" id="hd" v-model="hd" value="hd">
        <button class="calulatehd" @click="hdvaleur">valider</button>

        <div class="calculation-section">
            <div class="card">
                <h3>calcule poids</h3>
                <p id="pfvaleur"></p>
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
                <p id="pfvaleur"></p>

                <div class="radio-poind">
                <label for="rg">RG:</label><input type="radio" id="rg" name="e" v-model="selectedeffort" title="il faut calculer point XG" value="rg" >
                <label for="rh">RH:</label><input type="radio" id="rh" name="e" v-model="selectedeffort" title="il faut calculer  PT PC" value="rh">
                <label for="fg">FG:</label><input type="radio" id="fg" name="e" v-model="selectedeffort" value="fge">
                <label for="fh">FH:</label><input type="radio" id="fh" name="e" v-model="selectedeffort" title="il faut calculer  RH" value="fh">
               </div>
                <p>Result: {{ resulteffort }}</p>
                <button class="calculate" @click="calculeefforts">Calculer</button>
                <button class="cancel" @click="canceleffort">Annuler</button>
            </div>
            <div class="card">
                <h3>calcule angles</h3>
                <p id="pfvaleur"> {{ valeurstore }}</p>

                <div class="radio-poind">
                  <label for="">alpha</label><input type="radio" id="alpha" name="a" v-model="selecteangle" title="il faut saisir valeur de HD" value="alpha">
                  <label for="">beta</label><input type="radio" id="beta" name="a" v-model="selecteangle" title="il faut calculer point Xm Ym" value="beta">
                </div>
                
                <p>Result: {{ resultangle }}</p>
                <button class="calculate" @click="calculerangle">Calculer</button>
                <button class="cancel"  @click="cancelangle">Annuler</button>
            </div>
            <div class="card">
                <h3>calculer longueur de vérin</h3>
                <p id="pfvaleur"> </p>

                <p>Result: {{ resultverin }}</p>
                <button class="calculate" @click="calculeverin">Calculer</button>
                <button class="cancel" @click="cancelverin">Annuler</button>
            </div>
            <div class="card">
                <h3>calcule des points</h3>
                <p id="pfvaleur"></p>
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
                <button class="cancel" @click="cancelpoint">Annuler</button>
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
      hd:'',
      g: 9.81,
      valeurstore:'',
      pt:0,
      pc:0,
      pb1:0,
      pb2:0,
      
      result: '',
      resulteffort:'',
      resultverin:'',
      resultangle:'',
      resultpoint:'',

      rg:0,
      rh:0,
      fge:0,
      fh:0,

      anglealpha:0,
      anglebeta1:0,
      anglebeta2:0,

      yd:0,
      xd:0,
      ye:0,
      xe:0,
      xh:0,
      yh:0,
      xn:0,
      yn:0,
      xg:0,
      yg:0,
      xk:0,
      yk:0,
      xm:0,
      ym:0
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
    else if(this.hd<this.hMin ){
      this.hd=this.hMin;
      alert("hd inferieur a hauteur maximale")
    }
  },
  
    calculepoid() {
      
      
      if (this.selectedweight === 'pt') {
        this.valeurstore=` valeur sauvgarde ${this.mt},${this.mc},${this.fg},${this.he}`;
        this.pt=-(this.mt * this.g);
        this.result = `Weight (PT): ${this.pt} N`;

      } 
      else if (this.selectedweight === 'pc') {
        this.pc=-(this.mc * this.g);
        this.result = `Weight (pc): ${this.pc} N`;

      } 
      else if (this.selectedweight === 'pb1') {
        this.pb1=-(this.fg * this.g);
        this.result = `Weight (pb1): ${this.pb1} N`; 
      } 
      else if (this.selectedweight === 'pb2') {
        this.pb2=-(this.he * this.g);
        this.result = `Weight (pb2): ${this.pb2} N`; 
      } 
      else {
        this.result = 'Please select a weight option.';
      }
    },
    cancelpoid() {
      this.selectedweight = '';
      this.result = '';
    },
    calculeverin(){
        this.resultverin=` longueur de verin est  ${Math.sqrt((this.xn-this.xm)**2+(this.yn-this.ym)**2)}  `;
      },
 
    calculepoints(){
      

      /* calcule de point D */
      if(this.selectpoint==='pd'){
        this.resultpoint=`coordonnées de point D (${this.xd},${this.xd})`;
      }
      /* calcule de point E */

      else if(this.selectpoint==='pe'){
        this.xe=(this.lb)*Math.cos(this.anglealpha);
        this.resultpoint=`coordonnées de point E (${this.xe},${this.ye})`;
      }
      /* calcule de point K */

      else if(this.selectpoint==='pk'){
        this.xk=this.xe/2;
        this.yk=this.hd/2;
        this.resultpoint=`coordonnées de point K (${this.xk},${this.yk}) si valeur xk   yk egale 0 n'oublie pas de saisir HD et calculer E `;
      }
      /* calcule de point H */

      else if(this.selectpoint==='ph'){
        this.yh=this.hd;
        this.resultpoint=`coordonnées de point H (${this.xh}),(${this.yh})`;
      }
      /* calcule de point G */
      
      else if(this.selectpoint==='pg'){
        this.xg=this.xe;
        this.yg=this.hd;
        this.resultpoint=`coordonnées de point G (${this.xg},${this.yg}) si valeur de xg=0 n'oublie pas de calculer point E `;
      }
      /* calcule de point M */

      else if(this.selectpoint==='pm'){
        this.xm=this.vm*Math.cos(-this.anglealpha)-this.wm*Math.sin(-this.anglealpha);
        this.ym=this.yh+this.vm*Math.sin(-this.anglealpha)+this.wm*Math.cos(-this.anglealpha);
        this.resultpoint=`coordonnées de point M (${this.xm},${this.ym}) si valeur de xm ou ym egale 0 n'oublie pas de calculer angle alpha `;
      }
      else if(this.selectpoint==='pn'){
        this.resultpoint=`coordonnées de point N (${this.xn},${this.yn})  :  `;
      }
      
    },
    cancelpoint(){
      this.selectpoint='';
      this.resultpoint='';
    },
    /* calcule effort */
    calculeefforts(){
    /* controlle de saisir pour verifier si les valeurs existent ou non */

    if (this.selectedeffort === 'rg') {
        console.log('xgt:', this.xgt, 'pt:', this.pt, 'xgc:', this.xgc);
          this.rg =(-(this.xgt*this.pt+this.xgc*20))/1300;
          this.resulteffort = `effort (RG): ${this.rg} N`;
  
  
}
    else if (this.selectedeffort === 'rh') {
        if (this.rg !== undefined && this.pt!== undefined && this.pc !== undefined) {
            this.rh = -this.rg - this.pt - this.pc;
            this.resulteffort = `effort (RH): ${this.rh} N`;
        } else {
            this.resulteffort = 'Invalid input values for RH calculation';
        }
    }
    else if (this.selectedeffort === 'fge') {
        if (this.fge !== undefined) {
            this.fge = -this.rg;
            this.resulteffort = `effort (FG): ${this.fge} N`;
        } else {
            this.resulteffort = 'Invalid input values for FG calculation';
        }
    } 
    else if (this.selectedeffort === 'fh') {
        if (this.fh !== undefined) {
            this.fh = -this.rh;
            this.resulteffort = `effort (FH): ${this.fh} N`;
        } else {
            this.resulteffort = 'Invalid input values for FH calculation';
        }
    } 
    else {
        this.resulteffort = 'Please select an effort option.';
    }
},

    canceleffort(){
        this.selectedeffort='';
        this.resulteffort='';
    },

   /* calcule angles */

    calculerangle(){
       
    if (this.selecteangle === 'alpha') {
        if (this.hd !== undefined && this.lb !== undefined) {
            this.anglealpha=Math.asin(this.hd/this.lb)
            this.resultangle = `angle alpha est ${(this.anglealpha)} `;
        } else {
            this.resultangle = 'Invalid input values for alpha angle calculation';
        }
    } 
    else if (this.selecteangle === 'beta') {
        if (this.xn !== undefined && this.xm !== undefined && this.yn !== undefined && this.ym !== undefined) {
          this.anglebeta1=this.xn - this.xm;
          this.anglebeta2=this.yn - this.ym ;
            this.resultangle = `angle beta est ${Math.atan2(this.anglebeta1,this.anglebeta2)} n'oublie pas de calculer les coordonnes de point M`;
        } else {
            this.resultangle = 'Invalid input values for beta angle calculation';
        }
    }
    else {
        this.resultangle = 'choisir un angle';
    }
},
cancelangle(){
        this.selecteangle='';
        this.resultangle='';
    },

    
  }
};

</script>
<style scoped>

.next{
  margin: 0;
  font-family: Arial, sans-serif;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('C:\Users\utilisateur\Desktop\deephy\src\assets\website.s_framed_intro_default_image.jpg') no-repeat center center /cover fixed;
  background-size: cover;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  border: 4px solid yellow;

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
  height: 400px;
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

input[title] {
  color: red;
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
#pfvaleur{
  border: none;
  border: red 2px solid;
  height: 20%;
}
</style>
