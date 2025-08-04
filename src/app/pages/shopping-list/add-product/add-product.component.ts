import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import { Product } from '../../../interfaces/product.interface';

@Component({
  selector: 'add-product',
  imports: [],
  templateUrl: './add-product.component.html'
})
export class AddProductComponent {
  name = signal('');
  price = signal(0);

  newProduct = output<Product>();

addProduct(category: string) {
    if (
      !this.name() ||
      !this.price() ||
      this.price() <= 0 ||
      !['fruta', 'verdura', 'otro'].includes(category)
    ) {
      return;
    }

    const newProduct: Product = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      category: category as 'fruta' | 'verdura' | 'otro', //Esto le dice a TypeScript:“Confía en mí, este category será una de las opciones válidas.”
      price: this.price(),
    };

    //this.products.update((list) => [...list, newProduct]);

    this.newProduct.emit(newProduct);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.price.set(0);
  }

}
