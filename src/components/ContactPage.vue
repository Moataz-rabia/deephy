<template>
    <div class="container">
        <form>
            <h1>touch with us</h1>
            <input type="text" name="" id="nom" placeholder="saisir votre nom" v-model="nom" value="nom" required>
            <input type="text" name="" style="margin-left: 20px;" id="prenom" placeholder="saisir votre prenom" value="pr" v-model="pr" required>
            <input type="email" name="" id="mail"  placeholder="saisir votre email" v-model="email" value="email" required>
            <input type="text" name="" id="mobile" placeholder="saisir votre numero de telephone" value="mobile" v-model="mobile" required>
            <h4>type your message</h4>
            <textarea name="" v-model="message" required ></textarea>
            <input type="submit" @click="sendEmail" id="b1" >
            <input type="reset" value="annuler" id="b2" >
            <div class="location-info">
            <h2>Our Location</h2>
            <p>Zarzis Smart center</p>
            <p>Phone:  54 213 163</p>
            <p>Email: [info@example.com](mailto:info@example.com)</p>
        </div>

        </form>
    </div>
</template>
<script>
import emailjs from '@emailjs/browser';
export default{
    name:'ContactPage',
    data(){
      return{
        nom:'',
        pr:'',
        email:'',
        mobile:'',
        message:''
      }
    },
    mounted() {
    emailjs.init('p88PbAB0f0dm0Yq_8'); // Replace with your actual public key
  },
  methods:{
    sendEmail() {
      const templateParams = {
        nom: this.nom,
        prenom: this.pr,
        email: this.email,
        mobile: this.mobile,
        message: this.message,
        
      };
      emailjs.send('service_6r5xw1b', 'template_dtby5w9', templateParams)
        .then((response) => {
          alert('SUCCESS!', response.status, response.text);
        }, (error) => {
          alert('FAILED...', error);
        });
  }
}
};

</script>
<style scoped>
.container{
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),  url(../assets/background.jpg) no-repeat center/cover;
}
.container form {
  width: 670px;
  height: 600px;
  display: flex;
  justify-content: center;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(30px);
  flex-wrap: wrap;
}
.container form h1 {
  color: white;
  font-weight: 700;
  line-height: 2;
  margin-top: 20px;
  width: 500px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
}
.container form input {
  width: 300px;
  height: 50px;
  padding-left: 10px;
  outline: none;
  border: none;
  font-size: 20px;
  margin-bottom: 10px;
  background: none;
  border-bottom: 2px solid #fff;
  color:#ff6f3f;
}
.container form input::placeholder {
  color:#ff6f3f;
}

.container form #pr,
.container form #mobile {
  margin-left: 20px;
}
.container form h4 {
  color: white;
  font-weight: 300;
  width: 600px;
  margin-top: 20px;
  font-weight: bold;
  text-transform: uppercase;
}
.container form textarea {
  background: none;
  border: none;
  border-bottom: 2px solid #fff;
  color: #fff;
  font-weight: 200;
  font-size: 20px;
  padding: 10px;
  outline: none;
  min-height: 90px;
  max-height: 90px;
  min-width: 620px;
  max-width: 620px;
}
.container form h4 {
  font-size: 20px;
}
.container form #b1,.container form #b2 {
  border: none;
  background: #fff;
  border-radius: 5px;
  margin-top: 20px;
  font-weight: 600;
  font-size: 24px;
  color: #000;
  width: 200px;
  height: 60px;
  padding: 0;
  margin-bottom: 30px;
  margin-right: 20px;
  transition: 0.3s;
}

.container form #b1:hover{
    background:#ff6f3f;
    color: #fff;
    transition: .5s ease-in-out;
}
.container .location-info {
  margin-bottom: 20px;
  text-align: center;
}

.container .location-info h2 {
  color: white;
  font-weight: 700;
  line-height: 2;
  margin-top: 20px;
  text-transform: uppercase;
  font-weight: bold;
}

.container .location-info p {
  color: white;
  font-weight: 300;
  margin-bottom: 10px;
}
</style>