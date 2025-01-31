<template>
  <div  class="container">
    <div class="form1">
      <h1>Saisir les valeurs de client</h1>
      <label for="h_max">long de bras:</label>
      <input type="number" id="lb" v-model.number="lb" placeholder="saisir longeure de bras" />
      <label for="h_max">Max Height (h_max):</label>
      <input type="number" id="h_max" v-model.number="hMax" placeholder="saisir hauteur maximale" />
  
      <label for="h_min">Min Height (h_min):</label>
      <input type="number" id="h_min" v-model.number="hMin" placeholder="saisir hauteur minimal" />
  
      <label for="load">Load (N):</label>
      <input type="number" id="load" v-model.number="load" placeholder="saisir charge" />
      <button @click="calculate">valider</button>

      <p style="margin-top: 20px; text-align: center; color: red;font-weight: bolder;" id="p1"></p>
    </div>
    <div class="form2">
      <h1>Saisir les valeurs de l'ingenieur</h1>
      <div class="les-masses">
        <h3>les Masses</h3>
        <label for="mt">Table Mass (mt): </label><input type="number" name="mt" id="mt" v-model.number="mt" placeholder="saisir valeur de table" />
        <label for="mc">Charge Mass (mc):</label><input type="number" name="mc" id="mc" v-model.number="mc" placeholder="saisir valeur de charge" />
        <label for="fg">Bras FG (fg):</label><input type="number" name="fg" id="fg" v-model.number="fg" placeholder="saisir valeur de la bras FG" @click="showImage = true" />
        <img v-if="showImage" src="../assets/bras_dg.png" alt="Image" style=" width: 50%; height: 50%;  border-radius: 20px;" />
        <label for="he">Bras HE (he):</label><input type="number" name="he" id="he" v-model.number="he" placeholder="saisir valeur de bras HE"  @click="showImage2 = true"  />
        <img v-if="showImage2" src="../assets/bras_he.png" alt="Image" style=" width: 50%; height: 50%;margin-top: 10px; border-radius: 20px;" />

      </div>
      <div class="position">
        <h3>les positions</h3>
        <h4 style="color:#ff6f3f;">pour vérin N dans repère TDU </h4>
        <label for="tn">TN:</label><input type="number" name="tn" id="tn" v-model.number="tn" placeholder="saisir valeur de TN" />
        <label for="un">UN:</label><input type="number" name="un" id="un" v-model.number="un" placeholder="saisir valeur de UN" />
        <h4 style="color:#ff6f3f;">pour vérin M dans repère VHW </h4>
        <label for="vm">VM:</label><input type="number" name="vm" id="vm" v-model.number="vm" placeholder="saisir valeur de VM" />
        <label for="wm">WM:</label><input type="number" name="wm" id="wm" v-model.number="wm" placeholder="saisir valeur de WM" />
        <h4 style="color:#ff6f3f;">pos Gt et Gc dans XOY </h4>
        <label for="vm">xGt:</label><input type="number" name="tn" id="xgt" v-model.number="xgt" placeholder="saisir valeur de VM" />
        <label for="wm">xGc:</label><input type="number" name="un" id="xgc" v-model.number="xgc" placeholder="saisir valeur de WM" />
      </div>
      <button class="b2" @click="calculate2">valider</button>
        
      <p style="margin-top: 20px; margin-bottom: 30px; text-align: center; color: red;font-weight: bolder;" id="p2"></p>
      <button @click="navigateToNextPage">next</button>
      <p id="p3"></p>      
    </div>
      <!-- Affichage des données sauvegardées dans store.js -->
    <p>Valeurs sauvegardées :</p>
    <p>lb : {{ $store.state.lb }}</p>
    <p>hMax : {{ $store.state.hMax }}</p>
    <p>hMin : {{ $store.state.hMin }}</p>
    <p>weight : {{ $store.state.load }}</p>
    <p>mt : {{ $store.state.mt }}</p>
    <p>mc : {{ $store.state.mc }}</p>
    <p>fg : {{ $store.state.fg }}</p>
    <p>he : {{ $store.state.he }}</p>
    <p>tn : {{ $store.state.tn }}</p>
    <p>un : {{ $store.state.un }}</p>
    <p>vm : {{ $store.state.vm }}</p>
    <p>wm : {{ $store.state.wm }}</p>
    <p>xGt : {{ $store.state.xgt }}</p>
    <p>xGc : {{ $store.state.xgc }}</p>
    </div>
  </template>
  <script>
  
  
import { mapActions, mapGetters } from 'vuex'
  export default {
    name: "CalculPage",
    data() {
      return {
        hMax: null,
        hMin: null,
        load: null,
        mt:null,
        mc:null,
        fg:null,
        he:null,
        tn:null,
        un:null,
        vm:null,
        wm:null,
        xgt:null,
        xgc:null,
        lb:null,
        showImage: false,
        showImage2:false,
      };
    },
    computed: {
      ...mapGetters(['getUserInput']),
    },
    methods: {
      ...mapActions(['updateInputs']),
      checkValidInputs1() {
        if (this.hMax === null || this.hMin === null || this.load === null || this.lb===null ) {
          document.getElementById("p1").innerHTML = "Please enter values for all fields for client.";
          return false;
        }
        if (isNaN(this.hMax) || isNaN(this.hMin) || isNaN(this.load)|| isNaN(this.lb)) {
          document.getElementById("p1").innerHTML ="Please enter valid numbers for all fields for client.";
          return false;
        }
        if (this.hMax < 0 || this.hMin < 0 || this.load < 0 || this.lb < 0){
          document.getElementById("p1").innerHTML ="Please enter positive values for all fields for client.";
          return false;
        }
        return true;
      },
      calculate() {
        if (!this.checkValidInputs1()) {
          return;
        }
   
        document.getElementById('p1').innerHTML='<p style="color:green"> BIEN</p>';
      },
      checkValidInputs2(){
        if(this.mt === null || this.mc === null || this.fg === null || this.he === null || this.tn===null || this.un===null || this.vm===null || this.wm===null  || this.xgt===null || this.xgc===null){
          document.getElementById("p2").innerHTML ="Please enter values for all fields for engineer.";
          return false;
        }
        if(isNaN(this.mt) || isNaN(this.mc) || isNaN(this.fg) || isNaN(this.he) || isNaN(this.tn) || isNaN(this.un) || isNaN(this.vm) || isNaN(this.wm)|| isNaN(this.xgt)|| isNaN(this.xgc)){
          document.getElementById("p2").innerHTML ="Please enter valid numbers for all fields for engineer.";
          return false;
        }
        return true;
      },
      calculate2(){
        if (!this.checkValidInputs2()) {
          return;
        }
        /* Mise à jour des données dans le store */
        
        document.getElementById('p2').innerHTML='<p style="color:green"> BIEN</p>';
      },
      // Méthode pour naviguer vers la page suivante
      navigateToNextPage() {
        if (this.checkValidInputs1() && this.checkValidInputs2()) {
          /**
           * Cette fonction push permet de naviguer vers une autre route.
           * Remarque : Vous pouvez remplacer 'name' par 'path' pour spécifier la route.
           */
          
          this.$router.push({ name: 'next' });
        }
        else{
          document.getElementById("p3").innerHTML ="<p style='margin-top: 20px; text-align: center; color: red;font-weight: bold;margin-bottom:20px;' id='p2'>you can't go to the next page you should fill the inputs</p>";
          return false;
        }
        this.updateInputs( {
        lb:this.lb,
        hMax: this.hMax,
        hMin: this.hMin,
        load: this.load,
        mt: this.mt,
        mc: this.mc,
        fg: this.fg,
        he: this.he,
        tn: this.tn,
        un: this.un,
        vm: this.vm,
        wm: this.wm,
        xgt:this.xgt,
        xgc:this.xgc
});
      },
    },
    
  }
  </script>
  <style scoped>
  
  .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('C:\Users\utilisateur\Desktop\deephy\src\assets\website.s_framed_intro_default_image.jpg') no-repeat center center /cover fixed;
      scroll-behavior: smooth;
      color: white;
      backdrop-filter: blur(10px);
    }
    h4{
      margin-top: 10px;
    }
  
img {
  transition: opacity 0.3s;
}

img[v-if="showImage"] {
  opacity: 1;

}

img[v-if="!showImage"] {
  opacity: 0;
}

img[v-if="showImage2"] {
  opacity: 1;
}

img[v-if="!showImage2"] {
  opacity: 0;
}
    
    
    
    .form1 ,.form2 {
    background: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    margin: 20px;
    width: 80%;
    height: 30;
    
    }
    
    .form1 h1 {
      margin-bottom: 20px;
      text-align: center;
    }
  .form1 label {
      display: block;
      margin: 10px 0 10px;
    }
    
    .form1 input {
      width: 100%;
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
    .form1 button {
      background: #ff6f3f;
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 20px;
      cursor: pointer;
      transition: background 0.3s;
      width: 30%; /* Set a width */  
      margin: 0 0 0 30% ; /* Center horizontally */ 
      transition: background 0.3s, transform 0.3s;
  }  

    .form1 button:hover {
      background: #ff3f1f;
      transform: scale(1.1);

    }

    .output {
      margin-top: 20px;
      font-size: 18px;
      text-align: center;
    }
    .form2 {
    margin-top: 50px;
  }

    
    .form2 h1 {
      margin-bottom: 20px;
      text-align: center;
    }
    .form2 h3 {
      margin-bottom: 20px;
      text-align: center;
      margin-top: 30px;
    }
    .form2 label {
      display: block;
      margin: 10px 0 10px;
    }
    
    .form2 input {
      width: 100%;
      padding: 10px;
      background: transparent;
      margin-bottom: 15px;
      border: solid 2px #ff6f3f;
      border-radius: 10px;
      color: white;

    }
    
    .form2 button {
      background: #ff6f3f;
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 20px;
      cursor: pointer;
      transition: background 0.3s;
      margin-left: 30%;
      width: 30%;
      transition: background 0.3s, transform 0.3s;
    }
    
    .form2 button:hover {
      background: #ff3f1f;
      transform: scale(1.1);
    }


    @media only screen and (max-width: 768px) {
  .form1 h1, .form2 h1 {
    font-size: 18px;
  }

  .form1 input, .form2 input {
    font-size: 16px;
  }

  .form1 button, .form2 button {
    font-size: 16px;
    padding: 10px;
  }
}
  </style>