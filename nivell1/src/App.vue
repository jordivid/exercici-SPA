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
        <li class="nav-item">
          <router-link to="/botiga" class="nav-link">Botiga</router-link>
        </li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<style src="./styles/css/app.css"></style>
