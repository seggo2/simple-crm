import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {provideNativeDateAdapter} from '@angular/material/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(),provideNativeDateAdapter(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"simplecrm-e50fe","appId":"1:301238975293:web:e08e5655f0944e41fda354","storageBucket":"simplecrm-e50fe.appspot.com","apiKey":"AIzaSyAog56FiOgBjp3G19VnoTd6tgWKuupa9Uc","authDomain":"simplecrm-e50fe.firebaseapp.com","messagingSenderId":"301238975293"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
