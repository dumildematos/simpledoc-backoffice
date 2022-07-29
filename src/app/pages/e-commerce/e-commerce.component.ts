import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
})
export class ECommerceComponent {

  constructor(private title: Title) {
    this.title.setTitle('SimpleDoc | Backoffice :: Dashboard')
  }

}
