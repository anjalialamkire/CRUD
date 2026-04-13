import { Component, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MATERIAL_IMPORTS } from './material/material';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  imports: [...MATERIAL_IMPORTS,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
[x: string]: any;
  protected readonly title = signal('CRUD');
  @ViewChild('sidenav') sidenav!: MatSidenav
}
