<template>
  <div>
    <keep-alive> 
      <component :is="$route.params.seccio"></component> 
    </keep-alive>
  </div>
</template>

<script src="./../scripts/Botiga.js"></script>
