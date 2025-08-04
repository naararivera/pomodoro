import { Component, inject } from '@angular/core';
import { AddProductComponent } from '../add-product/add-product.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { ShoppingListService } from '../../../services/shopping-list.service';

@Component({
  selector: 'shopping-list-super-page',
  imports: [AddProductComponent,
    ProductListComponent
  ],
  templateUrl: './shopping-list-super-page.html',
  styleUrl: './shopping-list-super-page.component.css',
})
export class ShoppingListSuperPageComponent {

      public shoppingListService = inject (ShoppingListService);
  
}
