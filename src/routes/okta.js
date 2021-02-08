import config from '/config';

import { Router } from 'express';
import { ExpressOIDC } from "@okta/oidc-middleware";
import getOrCreateUser from '/middlewares/getOrCreateUser'

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
        handler: getOrCreateUser,
        afterCallback: "/dashboard"
      },
      logout: {
        path: "/users/logout"
      },
      logoutCallback: {
        path: "/logout/callback"
      }
    }
  });

  app.use(oidc.router);

}