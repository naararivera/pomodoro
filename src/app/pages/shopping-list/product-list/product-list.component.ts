import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Product } from '../../../interfaces/product.interface';

@Component({
  selector: 'product-list',
  imports: [CurrencyPipe,

  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
listName = input.required<string>();
products = input.required<Product[]>()
}
