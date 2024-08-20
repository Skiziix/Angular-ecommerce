import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [NgIf],
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

    increaseQuantity() {
        ++this.product.quantity;
        console.log(this.product.quantity);
    }

    decreaseQuantity() {
        this.product.quantity ? --this.product.quantity : null;
        console.log(this.product.quantity);
    }
}
