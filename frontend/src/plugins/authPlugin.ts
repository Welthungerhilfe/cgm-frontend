import * as Msal from "msal";
import { BIconViewList } from 'bootstrap-vue';

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

const apiConfig = {
    b2cScopes: ["https://fabrikamb2c.onmicrosoft.com/helloapi/demo.read"],
    webApi: "https://fabrikamb2chello.azurewebsites.net/hello"
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
    scopes: apiConfig.b2cScopes,  // e.g. ["https://fabrikamb2c.onmicrosoft.com/helloapi/demo.read"]
};

const authPlugin = {
    // The install method is all that needs to exist on the plugin object.
    // It takes the global Vue object as well as user-defined options.
    install(Vue: any, options: any) {
        function authRedirectCallBack(error: any, response: any) {
            if (error) {
                console.log(error);
            } else {
                sessionStorage.loggedIn = true;
                if (response.tokenType === "id_token") {
                    console.log("id_token acquired at: " + new Date().toString());
                    //getTokenRedirect(tokenRequest);
                } else if (response.tokenType === "access_token") {
                    console.log("access_token acquired at: " + new Date().toString());
                } else {
                    console.log("Token type is: " + response.tokenType);
                }
            }
        }

        const msalInstance = new Msal.UserAgentApplication(msalConfig);
        msalInstance.handleRedirectCallback(authRedirectCallBack);
        // We call Vue.mixin() here to inject functionality into all components.
        Vue.mixin({
            created() {
                Vue.loginIfNeccessary()
            }
        });

        Vue.loginIfNeccessary = function () {
            console.log('hiii V', msalInstance.getLoginInProgress());
            if (Vue.checkIfLoggedIn() === 'false' && !msalInstance.getLoginInProgress()) {
                Vue.login();
            }
        };

        Vue.login = function (): void {
            msalInstance.loginRedirect(loginRequest);
        };

        Vue.logout = function (): void {
            msalInstance.logout();
            sessionStorage.loggedIn = false;
        };

        Vue.checkIfLoggedIn = function () {
            return sessionStorage.loggedIn;
        };

        Vue.getToken = function () {
            return msalInstance.acquireTokenSilent(tokenRequest).then(
                accessToken => {
                    return accessToken;
                },
                error => {
                    return null;
                }
            );
        };
    }
};

export default authPlugin;