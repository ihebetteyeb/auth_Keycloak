import React, { useEffect, useRef, useState } from "react";
import Keycloak from "keycloak-js";

const useAuth = () => {
  const [isLogin, setLogin] = useState(false);
  const [token, setToken] = useState(null);
  const [client, setClient] = useState(null);
  const isRun = useRef(false);
  const keycloakClient = new Keycloak({
    url: import.meta.env.VITE_KEYCLOAK_URL,
    realm: import.meta.env.VITE_KEYCLOAK_REALM,
    clientId: import.meta.env.VITE_KEYCLOAK_CLIENT,
  });

  useEffect(() => {
    if (isRun.current) return;
    isRun.current = true;

    keycloakClient
      .init({ onLoad: "login-required" })
      .then((res) => {
        setLogin(res);
        setToken(keycloakClient.token);
        setClient(keycloakClient);
      })
      .catch((err) => {
        console.error(err);
        client.logout();
      });
  }, []);
  const logout = () => {
    if (client) {
      client.logout();
    } else {
      console.warn("Attempted to logout before client was initialized.");
    }
  };
  return [isLogin, token, logout];
};

export default useAuth;
