<template>
    <div class="container">
        <h1>DETALL CLIENT</h1>
        <div class="mt-3 client-data">{{$route.params.cli}}</div>
        <div>
            <button class="btn btn-primary mt-3" @click="retrocedir()">Tornar</button>
        </div>
    </div>
</template>

<script src="./../scripts/DetallClient.js"></script>
<style src="./../styles/css/DetallClient.css" scoped></style>
