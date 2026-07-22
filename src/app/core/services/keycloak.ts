import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "https://keycloak-plugin.onrender.com/",
  realm: "greg-realm",
  clientId: "placas-client"
});

export default keycloak;
