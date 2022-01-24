// title
const title = Vue.createApp({
    data(){
        return{
            message: 'UTD Verifiable Credentials Demo'
        }
    },
    methods: {
        changeTitle(message){
            this.message = message
        }
    }
})

// create verifiable credential ... all the code for me to create the verifiable credential will go in here 
const createvc = Vue.createApp({
    data() {
    },
    methods: {
        perform(){
            console.log('create vc')
        }
    }
})

createvc.mount('#createvc')