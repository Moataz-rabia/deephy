<template>
    <div id="container">
        <div class="card">
      <h1>Algebra</h1>
      <p>Quadratic Formula: x = (-b ± √(b² - 4ac)) / 2a</p>
      <p>Linear Formula: y = mx + b</p>
      <h3>Logarithme d'un Quotient :</h3><p>log<sub>b</sub>(x / y) = log<sub>b</sub>(x) - log<sub>b</sub>(y)</p>
      <h3>Logarithme d'une Puissance :</h3><p>log<sub>b</sub>(x<sup>y</sup>) = y log<sub>b</sub>(x)</p>
    <div class="fs">
      <h2>Formules de Séries</h2>
        <h3>Somme d'une Série Arithmétique :</h3>
        <p class="f">S<sub>n</sub> = n/2 (a + l)</p>
        <p class="f">S<sub>n</sub> = n/2 [2a + (n - 1)d]</p>
    
    <h3>Somme d'une Série Géométrique :</h3>
    <p>S<sub>n</sub> = a(1 - r<sup>n</sup>) / (1 - r) (pour r ≠ 1)</p>
    </div>
    <div class="fs">
    <h2>Formules de Matrices</h2>
    <h3>Addition de Matrices :</h3>
    <p class="f">A + B = [a<sub>ij</sub> + b<sub>ij</sub>]</p>

    <h3>Multiplication de Matrices :</h3>
    <p class="f">AB = [∑<sub>k=1</sub><sup>n</sup> a<sub>ik</sub> b<sub>kj</sub>]</p>

    <h2>Formules de Déterminants</h2>
    <h3>Déterminant d'une Matrice 2x2 :</h3>
    <p class="f">det(A) = ad - bc pour A = (a b; c d)</p>

    <h3>Déterminant d'une Matrice 3x3 :</h3>
    <p>det(A) = a(ei - fh) - b(di - fg) + c(dh - eg) pour A = (a b c; d e f; g h i)</p>
    </div>
</div>
    <div class="card">
      <h2>Geometry</h2>
      <p class="f">Pythagorean Theorem: a² + b² = c²</p>
      <p>Circumference of a Circle: C = 2πr</p>
      <h2>Formule de l'Apothème (pour un polygone régulier) :</h2>
    <p class="f">A = (P × a) / 2</p>
    <p>Où P est le périmètre et a est l'apothème.</p>

    <h2>Formule de l'Angle Intérieur (pour un polygone régulier) :</h2>
    <p class="f">Angle intérieur = ((n - 2) × 180°) / n</p>
    <p>Où n est le nombre de côtés.</p>

    <h2>Formule de l'Angle Extérieur (pour un polygone régulier) :</h2>
    <p class="f">Angle extérieur = 360° / n</p>
    <p>Où n est le nombre de côtés.</p>
    </div>
    <div class="card">
      <h2>Trigonometry</h2>
      <p class="f">Sine Formula: sin(x) = opposite side / hypotenuse</p>
      <p class="f">Cosine Formula: cos(x) = adjacent side / hypotenuse</p>
    </div>
    </div>
</template>
<script>
export default{
    name:'libraryPage'
}

</script>
<style scoped>
#container{
    min-height: 100vh;
    display: flex;
    justify-content: center;
    
    align-items: center;
    background:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),  url(../assets/background.jpg) no-repeat center/cover;
}

.card {
    background-color:rgba(255, 111, 63, 0.7);
    padding: 20px;
    border-radius: 10px;
    width: 100%;
    margin: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    min-height:50%;
    
}
.card p{
    color:white;
    padding: 30px;
    text-align: center;
}
.card h2,h1{
    text-align: center;
    text-transform: uppercase;
}
.card h3{
    text-align: center;
}
.card h2{
    text-align: center;
    margin: 10px;
    text-decoration: underline solid 2px;
}
.fs{
    
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 10px;
}
.f{
    border: 2px rgb(255, 255, 255) solid;
    margin: 0 auto;
    width: 70%;
    margin-bottom: 20px;
    margin-top: 20px;
    align-items: center;
    font-weight: bold;
}
</style>