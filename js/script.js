const { createApp } = Vue;

createApp({
    data() {
        return {
            // Creo un array vuoto per salvare le email che verranno generate
            emails: []
        };
    },
    methods: {
        // Metodo per chiamare l'API e aggiungere l'email all'array
        generateEmails() {
            // Numero delle email da generare
            const emailCount = 10;
            // Eseguo un ciclo per ottenere 10 email random
            for (let i = 0; i < emailCount; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then(response => {
                        // Aggiungo l'email all'array
                        this.emails.push(response.data.response);
                    })
            }
        }
    },
    computed: {
        // Eseguo una verifica per vedere se tutte le mail sono state generate
        allEmailsGenerated() {
            return this.emails.length === 10;
        }
    },
    mounted() {
        // Quando l'app è montata, richiamo la funzione per generare le email
        this.generateEmails();
    }
}).mount('#app');