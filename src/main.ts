import { importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import {
  provideClientHydration,
  BrowserModule,
  bootstrapApplication,
} from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';

<<<<<<< HEAD
export const routes: Route[] = [];

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, RouterModule.forRoot(routes)),
    provideClientHydration(),
    provideZoneChangeDetection({ eventCoalescing: true }),
  ],
}).catch(err => console.error(err));
=======

import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { provideClientHydration, BrowserModule, bootstrapApplication } from '@angular/platform-browser';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule),
        provideClientHydration()
    ]
})
  .catch(err => console.error(err));
>>>>>>> a416a084d043c36bc93e6fe8ea53545a6ef94123
