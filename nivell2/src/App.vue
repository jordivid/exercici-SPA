<template>
  <div id="app">
    <nav>
      <ul class="nav d-flex justify-content-center">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/clients" class="nav-link">Clients</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/proveidors" class="nav-link">Proveïdors</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/magatzem" class="nav-link">Magatzem</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
            Botiga
          </a>
          <div class="dropdown-menu">
            <router-link to="/botiga/Botiga" class="dropdown-item">Botiga</router-link>
            <router-link to="/botiga/Alimentacio" class="dropdown-item">Alimentació</router-link>
            <router-link to="/botiga/Congelats" class="dropdown-item">Congelats</router-link>
          </div>
        </li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<style src="./styles/css/app.css"></style>
