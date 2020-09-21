import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreNavComponent } from './store-nav/store-nav.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { initializer } from './initializer.service';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

@NgModule({
  declarations: [
    AppComponent,
    StoreNavComponent,
    AdminNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      deps: [KeycloakService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
