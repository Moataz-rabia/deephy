<template>
    <div id="container">
        
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