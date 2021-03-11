<template>
  <div class="container">
    <h1>{{$route.params.seccio | Mayusculas}}</h1>
    <div>
      <button class="btn btn-primary" v-if="seccio != 'Botiga'" @click="canviSeccio(seccio)">Anar a {{seccio}}</button>
    </div>
  </div>
</template>

<script src="./../scripts/Botiga.js"></script>
