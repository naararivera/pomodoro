import { effect, Injectable, signal } from '@angular/core';
import { Product } from '../interfaces/product.interface';

const loadFromLocalStorage = (): Product[] => {
  const products = localStorage.getItem('products');
  return products ? JSON.parse(products) : [];
};

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  products = signal<Product[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    localStorage.setItem('products', JSON.stringify(this.products()));
  });

  addProduct(product: Product) {
    this.products.update((list) => [...list, product]);
  }
}
