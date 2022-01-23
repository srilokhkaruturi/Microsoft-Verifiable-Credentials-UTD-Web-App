console.log("Hello, vue")

// title
const title = Vue.createApp({
    data(){
        return{
            message: 'UTD Verifiable Credentials Demo',
            age: 1
        }
    }
})


title.mount('#title')