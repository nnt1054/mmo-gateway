import config from '/config';

import { Router } from 'express';
import { ExpressOIDC } from "@okta/oidc-middleware";
import getOrCreateAccount from '/middlewares/getOrCreateAccount'

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
        path: "/login"
      },
      loginCallback: {
        path: "/authorization-code/callback",
        handler: getOrCreateAccount,
        afterCallback: "/"
      },
      logout: {
        path: "/logout"
      },
      logoutCallback: {
        path: "/logout/callback"
      }
    }
  });

  // callback route after logging in
  oidc.router.get("/authorization-code/callback", (req, res) => {
    res.redirect("/");
  });

  // callback route after logging out
  oidc.router.get("/logout/callback", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.use(oidc.router);

}