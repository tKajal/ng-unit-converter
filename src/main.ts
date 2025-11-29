import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideServiceWorker } from '@angular/service-worker';
import { isDevMode, importProvidersFrom } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // ✅ import this

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),
    { provide: APP_BASE_HREF, useValue: '/browser' }, provideAnimationsAsync() // ✅ this line is crucial
  ]
}).catch(err => console.error(err));
