import {Injectable} from '@angular/core';
import {AuthConfig, JwksValidationHandler, OAuthService} from 'angular-oauth2-oidc';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import {environment} from '../../environments/environment';
import {DynamicAuthConfig} from './dynamic.auth.config';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private oauthService: OAuthService) {
  }

  public get groups() {
    const claims = this.oauthService.getIdentityClaims();
    return claims ? claims['groups'] : null;
  }

  public get name() {
    const claims = this.oauthService.getIdentityClaims();
    return claims ? claims['name'] : null;
  }

  public get authorizationHeader(): string | null {
    const token = this.oauthService.getIdToken();
    if (token === null) {
      return token;
    }
    return `Bearer ${token}`;
  }

  public login() {
    this.oauthService.initImplicitFlow();
  }

  public logout() {
    this.oauthService.logOut();
  }

  public configureAuth() {
    this.oauthService.configure(environment.auth as AuthConfig);
    this.http.get<DynamicAuthConfig>(environment.dynamicAuthConfig)
      .subscribe((config) => {
        this.oauthService.issuer = config.issuer;
        this.oauthService.requireHttps = config.requireHttps;
        this.oauthService.tokenValidationHandler = new JwksValidationHandler();
        this.oauthService.loadDiscoveryDocumentAndTryLogin();
      });
  }
}
