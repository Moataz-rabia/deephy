<template>
    <div class="next">
        <div class="container">
        <div class="title">Calculation</div>
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
                <button class="calculate" @click="afficheformule">afficher formule</button>
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
                <button class="calculate" @click="afficheformule">Calculer</button>
                <button class="cancel" @click="canceleffort">Annuler</button>
            </div>
            <div class="card">
                <h3>calcule angles</h3>
                
                <p>Result: {{ resultangle }}</p>
                <button class="calculate" @click="calculerangle">Calculer</button>
                <button class="calculate" @click="afficheformule">afficher formule</button>
                <button class="cancel">Annuler</button>
            </div>
            <div class="card">
                <h3>calculer longueur de vérin</h3>
                <p>Result: {{ resultverin }}</p>
                <button class="calculate" @click="calculeverin">Calculer</button>
                <button class="calculate" @click="afficheformule">afficher formule</button>
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
        lb:1300,
        selectedweight: '',
        selectedeffort:'',
      g: 9.81, 
      result: '',
      resulteffort:'',
      resultverin:'',
      resultangle:'',
    };
},
  computed: {
    ...mapGetters({
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
    }),
  },
  methods: {
    calculepoid() {
      if (this.selectedweight === 'pt') {
        this.result = `Weight (PT): ${this.mt * this.g} N`;
      } else if (this.selectedweight === 'pc') {
        this.result = `Weight (pc): ${this.mc * this.g} N`;
      } else if (this.selectedweight === 'pb1') {
        this.result = `Weight (pb1): ${this.fg * this.g} N`; 
      } else if (this.selectedweight === 'pb2') {
        this.result = `Weight (pb2): ${this.he * this.g} N`; 
      } else {
        this.result = 'Please select a weight option.';
      }
    },
    cancelpoid() {
      this.selectedweight = '';
      this.result = '';
    },
    calculeefforts(){
        if (this.selectedeffort === 'rg') {
        this.resulteffort = `effort (RG): ${'....'} N`;
      } else if (this.selectedeffort === 'rh') {
        this.resulteffort = `effort (RH): ${'....'} N`;
      } else if (this.selectedeffort === 'fg') {
        this.resulteffort = `effort (FG): ${'....'} N`; 
      } else if (this.selectedeffort === 'fh') {
        this.resulteffort = `effort (FH): ${'....'} N`; 
      } else {
        this.resulteffort = 'Please select an effort option.';
      }
    },
    canceleffort(){
        this.selectedeffort='';
        this.resulteffort='';
    },
    calculeverin(){
        this.resultverin=` verin est : ${Math.sqrt((this.xn-this.xm)**2+(this.yn-this.ym)**2)}`;
    },
    cancelverin(){
        this.resultverin='';
    },
    calculerangle(){
      this.resultangle=`angle est ${Math.asin((this.hMax)/this.lb)} `;
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
            height: 100vh;
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
            background-color:rgba(255, 111, 63, 0.7)
            ;
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
            margin-bottom: 20px;
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

</style>
