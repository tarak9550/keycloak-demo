import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080", // Ensure this is correct
  realm: "myrealm", // Make sure this matches Keycloak realm
  clientId: "my-react-app", // Ensure this matches Keycloak client ID
});

export default keycloak;
