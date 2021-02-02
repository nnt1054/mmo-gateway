import config from '/config';

import { Router } from 'express';
import { ExpressOIDC } from "@okta/oidc-middleware";

const router = Router();

export default (app) => {

  const oidc = new ExpressOIDC({
    issuer: `${ config.okta.org_url }/oauth2/default`,
    client_id: config.okta.client_id,
    client_secret: config.okta.client_secret,
    appBaseUrl: config.host_url,
    scope: "openid profile",
    routes: {
      login: {
        path: "/users/login"
      },
      loginCallback: {
        path: "/authorization-code/callback",
        afterCallback: "/dashboard"
      },
      logout: {
        path: "/users/logout"
      },
      logoutCallback: {
        path: "/users/logout/callback"
      }
    }
  });

  app.use(oidc.router);

}