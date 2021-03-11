<template>
  <div class="container">
    <h1>CLIENTS</h1>
      <ul class="list-group">
        <li class="list-group-item" v-for="client of clients" :key="client.id">
          {{client.nom}}<br/>
          <router-link :to="{name: 'Detallc', params: {cli: client.nom}}">
            <button class="btn btn-sm btn-primary">Detalls</button>
          </router-link>
        </li>
      </ul>
  </div>
</template>

<script src="./../scripts/Clients.js"></script>
