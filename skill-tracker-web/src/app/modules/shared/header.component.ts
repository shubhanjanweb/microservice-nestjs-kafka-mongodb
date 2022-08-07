import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <header>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container">
        <a class="navbar-brand" [routerLink]="['admin']">
          <span>{{title}}</span>
        </a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" [routerLink]="['admin']" [routerLinkActive]="'active'">Admin Panel</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>`,
  styles: [`
  .nav-link.active {
    font-weight:bold;
  }
  `]
})
export class HeaderComponent {
  @Input('title') title: string = '';
}
