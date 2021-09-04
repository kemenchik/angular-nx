import { Component } from '@angular/core';

@Component({
  selector: 'angular-nx-root',
  template: `
    <nb-layout>

      <nb-layout-header fixed>
        <!-- Insert header here -->
      </nb-layout-header>

      <nb-layout-column>
        <router-outlet></router-outlet>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <!-- Insert footer here -->
      </nb-layout-footer>

    </nb-layout>
  `
})
export class AppComponent {
  title = 'lessons-angular';
}
