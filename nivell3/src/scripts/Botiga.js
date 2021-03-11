export default {
    filters: {
        Mayusculas(valor) {
            return valor.toUpperCase();
        }
    },
    computed: {
        seccio() {
            const secc = this.$route.params.seccio;
            let seccio;

            switch(secc) {
                case "Alimentacio":
                    seccio = "Congelats";
                    break;
                case "Congelats":
                    seccio = "Alimentacio";
                    break;
                default:
                    seccio = "Botiga";
                    break;
            }

            return seccio;
        }
    },
    methods: {
        canviSeccio(seccio) {
            this.$router.push(seccio);
        }
    }
}