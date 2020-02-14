<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <router-link to="/home" class="nav-item nav-link " >Home <span class="sr-only">(current)</span></router-link>
      <router-link to="/signup" class="nav-item nav-link" >Add Post</router-link>
      <router-link to="/dashboard" class="nav-item nav-link" >Dashboard</router-link>
      
    </div>
  </div>
</nav>
      <!-- <div class="logo">
        <router-link to="/"></router-link>
      </div> -->
      <!-- <nav> -->
        <!-- <ul>
          <li>
             <router-link to="/home">Home</router-link>
          </li>
          <li>
            <router-link to="/signup">Add Post</router-link>
          </li>

          
          
          <li>
            <router-link to="/dashboard">Dashboard</router-link>
          </li>
        </ul>
      </nav> -->
        <nav class="navbar navbar-expand-lg navbar-dark ">
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav hab">
              <router-link to="/home" class="nav-item nav-link " >Home </router-link>
              <router-link  to="/signup" class="nav-item nav-link">Add post</router-link>
              <router-link  to="/dashboard" class="nav-item nav-link">Dashboard</router-link>
             
            </div>
          </div>
       </nav>

    
    
    
  </div>
 
</template>


<style scoped>
  #header {
    height: 56px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    background-color: #521751;
    padding: 0 20px;
    color:white !important;
  }
  nav{
    color:  black !important;
  }

  .logo {
    font-weight: bold;
    color: white;
  }

  .logo a {
    text-decoration: none;
    color: white;
  }

  nav {
    height: 100%;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
  }

  li {
    margin: 0 16px;
  }

  li a {
    text-decoration: none;
    color: white;
  }

  li a:hover,
  li a:active,
  li a.router-link-active {
    color: #fa923f;
  }
</style>