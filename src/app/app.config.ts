import { ApplicationConfig } from '@angular/core';
import { RouteReuseStrategy, Router, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { CustomReuseStrategy } from './custom-reuse-strategy';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(),provideClientHydration(),{ provide: RouteReuseStrategy, useClass: CustomReuseStrategy }]
};
