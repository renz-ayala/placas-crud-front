import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import keycloak from './app/core/services/keycloak';

// frame-src 'self' https://challenges.cloudflare.com; frame-ancestors 'self'; object-src 'none';
keycloak.init({
  onLoad: 'login-required'
}).then( (authenticated) => {
  if (authenticated) {
    platformBrowser().bootstrapModule(AppModule, {
      ngZoneEventCoalescing: true,
    })
      .catch(err => console.error(err));
  } else {
    console.log('Error occured');
  }
}).catch(err => console.error(err));

