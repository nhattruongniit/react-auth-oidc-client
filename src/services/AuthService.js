import { Log, User, UserManager } from 'oidc-client';

export class AuthService {
  constructor() {
    const settings = {
      authority: process.env.REACT_APP_Authority,
      client_id: process.env.REACT_APP_clientId,
      redirect_uri: `${process.env.REACT_APP_clientRoot}signin-callback.html`,
      silent_redirect_uri: `${process.env.REACT_APP_clientRoot}silent-renew.html`,
      post_logout_redirect_uri: process.env.REACT_APP_clientRoot,
      response_type: 'code',
      scope: process.env.REACT_APP_clientScope
    }
    this.userManager = new UserManager(settings);

    Log.logger = console;
    Log.level = Log.INFO;
  }

  async getUser() {
    return this.userManager.getUser();
  }

  async login() {
    return this.userManager.signinRedirect();
  }

  async renewToken() {
    return this.userManager.signinSilent();
  }

  async logout() {
    return this.userManager.signoutRedirect()
  }

}