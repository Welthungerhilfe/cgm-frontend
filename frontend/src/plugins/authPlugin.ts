import * as Msal from "msal";

const msalConfig = {
    auth: {
        clientId: "42bb5bd1-637c-4b5f-bc1a-4a0fe91de6f1",
        authority: "https://whhict4x.b2clogin.com/whhict4x.onmicrosoft.com/b2c_1_sign_up_sign_in",
        validateAuthority: false
    },
    authCache: {
        clientId: "42bb5bd1-637c-4b5f-bc1a-4a0fe91de6f1",
        cacheLocation: 'sessionStorage',
        storeAuthStateInCookie: true
    }
};

/** 
 * Scopes you enter here will be consented once you authenticate. For a full list of available authentication parameters, 
 * visit https://azuread.github.io/microsoft-authentication-library-for-js/docs/msal/modules/_authenticationparameters_.html
 */
const loginRequest = {
    scopes: ["openid", "profile"],
};

// Add here scopes for access token to be used at the API endpoints.
const tokenRequest = {
    scopes: ["https://cgminbmz-dev.azurewebsites.net/.default"],  // e.g. ["https://fabrikamb2c.onmicrosoft.com/helloapi/demo.read"]
};

const authPlugin = {
    // The install method is all that needs to exist on the plugin object.
    // It takes the global Vue object as well as user-defined options.
    install(Vue: any, options: any) {
        const msalInstance = new Msal.UserAgentApplication(msalConfig);

        function authRedirectCallBack(error: any, response: any) {
            if (error) {
                console.log(error);
            } else {
                sessionStorage.loggedIn = true;
                sessionStorage.accessToken = response.accessToken;

                // only id_token are received at the moment.
                if (response.tokenType === "id_token") {
                    sessionStorage.idToken = response.idToken;
                    console.log("id_token acquired at: " + new Date().toString());
                } else if (response.tokenType === "access_token") {
                    console.log("access_token acquired at: " + new Date().toString());
                } else {
                    console.log("Token type is: " + response.tokenType);
                }
            }
        }

        msalInstance.handleRedirectCallback(authRedirectCallBack);
        // Call Vue.mixin() here to inject functionality into all components.
        Vue.mixin({
            methods: {
                loginIfNeccessary: function () {
                    if (this.checkIfLoggedIn() === 'false' && !msalInstance.getLoginInProgress()) {
                        this.login();
                    }
                },
    
                login: function (): void {
                    msalInstance.loginRedirect(loginRequest);
                },
    
                logout: function (): void {
                    msalInstance.logout();
                    sessionStorage.loggedIn = false;
                },
    
                checkIfLoggedIn: function () {
                    return sessionStorage.loggedIn;
                },
    
                getMsalInstance: function () {
                    return msalInstance;
                },
        
                getToken: function () {
                    console.log('Aquire Token...');
                    msalInstance.acquireTokenSilent(tokenRequest).then(accessToken => {
                        console.log(accessToken);
                        return accessToken;
                    }, error => {
                        console.log(error);
                        return error;
                    }
                    );
                }
            }
        });
    }
};

export default authPlugin;