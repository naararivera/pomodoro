import { CurrencyPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

interface Product {
  id: number;
  name: string;
  category: 'fruta' | 'verdura' | 'otro';
  price: number;
}

@Component({
  selector: 'shopping-list-page',
  imports: [CurrencyPipe],
  templateUrl: './shopping-list-page.html',
  styleUrl: './shopping-list-page.component.css',
})
export class ShoppingListPageComponent {
  name = signal('');
  price = signal(0);

  products = signal<Product[]>([
    { id: 1, name: 'Fresa', category: 'fruta', price: 2.99 },
    // { id: 2, name: 'Lechuga', category: 'verdura', price: 1.59 },
    // { id: 3, name: 'Banana', category: 'fruta', price: 4.59 },
  ]);

  addProduct(category: string) {

   if(!this.name() || !this.price() || this.price()<= 0 || !['fruta', 'verdura', 'otro'].includes(category)){
    return;
   } 

   const newProduct: Product = {
    id: this.products.length + 1,
    name: this.name(),
    category: category as 'fruta' | 'verdura' | 'otro', //Esto le dice a TypeScript:“Confía en mí, este category será una de las opciones válidas.”
    price: this.price()
   }

   this.products.update((list) =>
  [...list, newProduct]);

   this.resetFields();
  }

  resetFields(){
    this.name.set('');
    this.price.set(0);
  }
}
