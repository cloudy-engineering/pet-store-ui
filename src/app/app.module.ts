import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreNavComponent } from './store-nav/store-nav.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { initializer } from './initializer.service';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { PetComponent } from './pet/pet.component';
import { SalesComponent } from './sales/sales.component';
import { RewardsComponent } from './rewards/rewards.component';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutNewComponent } from './checkout-new/checkout-new.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreNavComponent,
    AdminNavComponent,
    PetComponent,
    SalesComponent,
    RewardsComponent,
    CheckoutComponent,
    CheckoutNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule,
    HttpClientModule,
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
