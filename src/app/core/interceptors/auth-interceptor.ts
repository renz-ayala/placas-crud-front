import { HttpInterceptorFn } from '@angular/common/http';
import keycloak from '../services/keycloak';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${keycloak.token}`
    }
  });
  return next(authReq);
};
