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



const getAccessToken = Vue.createApp({
    methods: {
        perform(){
                // Initialize MSAL library by using the following code
                const msalConfig = {
                    auth: {
                        clientId: 'd53a73e3-10e2-404b-9707-407ca41ca9cf',
                        authority: `https://login.microsoftonline.com/${753ec5ee-1167-47fe-b1a8-061854bf34e9}',
                        clientSecret: 'v6Q7Q~ja6lBfZyg86W2wmtX7XQA.fWkXZEQc1',
                    },
                    system: {
                        loggerOptions: {
                            loggerCallback(loglevel, message, containsPii) {
                                console.log(message);
                            },
                            piiLoggingEnabled: false,
                            logLevel: msal.LogLevel.Verbose,
                        }
                    }
                };
                const cca = new msal.ConfidentialClientApplication(msalConfig);
                const msalClientCredentialRequest = {
                    scopes: ["bbb94529-53a3-4be5-a069-7eaf2712b826/.default"],
                    skipCache: false, 
                };
                module.exports.msalCca = cca;
                module.exports.msalClientCredentialRequest = msalClientCredentialRequest;
                
                // Acquire an access token
                const result = await mainApp.msalCca.acquireTokenByClientCredential(mainApp.msalClientCredentialRequest);
                if ( result ) {
                        accessToken = result.accessToken;
                }
        }
    }


})

createvc.mount('#createvc')