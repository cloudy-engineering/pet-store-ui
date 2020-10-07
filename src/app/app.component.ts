import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pet-store';
  roles: string[];
  username: string;

  constructor(private keycloak: KeycloakService) {}

  ngOnInit() {
    this.roles = this.keycloak.getUserRoles();
    this.keycloak.loadUserProfile().then(profile => {
      this.username = `${profile.firstName} ${profile.lastName}`;
    });
  }

  logout(): void {
    this.keycloak.logout();
  }
}
