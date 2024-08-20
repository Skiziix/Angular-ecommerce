import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnInit {
    public product!: Product;

    constructor () {}

    ngOnInit(): void {
        this.product = new Product('The Bonny Lane Club', 5.25,
                                   "assets/images/bonny-lane-club-book.jpg", true);
    }
}
