import { Component } from '@angular/core';
import { ListboxModule } from 'primeng/listbox';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  options: any[] = [];
  selectedOption: any;

  constructor() {
    this.options = [{ name: 'Home' }, { name: 'Sobre nosotros' }];
  }
}
