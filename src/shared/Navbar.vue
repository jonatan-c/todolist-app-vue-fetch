<template>
  <div class="container_nav">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/agregar">Add</router-link>
      <router-link to="/list">LIST</router-link>
    </nav>
</div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.container_nav {
    background-color: #f5f5f5;
    padding: 10px;
    margin-bottom: 10px;
}

nav {
    display: flex;
    justify-content: space-around;
}

nav a {
    text-decoration: none;
    color: #000;
    font-size: 20px;
    font-weight: bold;
}

nav a:hover {
    color: rgb(70, 51, 51);
}

nav a:active {
    color: rgb(100, 84, 84);
}



</style>