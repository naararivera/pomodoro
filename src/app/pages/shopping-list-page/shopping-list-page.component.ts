import { CurrencyPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

interface Product{
  id: number;
  name: string;
  price: number;
}


@Component({
  selector: 'shopping-list-page',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './shopping-list-page.html',
  styleUrl: './shopping-list-page.component.css'
})
export class ShoppingListPageComponent { 

  products = signal<Product[]>([
    {id: 1, name: 'Fresa', price: 2.99},
    {id:2, name: 'Melocotón', price: 1.59},
    {id:3, name: 'Banana', price: 0.99}
  ]);





}
