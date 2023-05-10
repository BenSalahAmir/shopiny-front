import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/Service/cart/cart.service';
import { Discount } from '../../model/discount.model';

@Component({
  selector: 'app-update-discount',
  templateUrl: './update-discount.component.html',
  styleUrls: ['./update-discount.component.css']
})
export class UpdateDiscountComponent {
  discountId!: number;
  discount!: Discount;

  constructor(
    private route: ActivatedRoute,
    private service: CartService
  ) {}

  ngOnInit() {
    // Retrieve the discount ID from the route parameters
    this.discountId = this.route.snapshot.params['id'];

    // Fetch the discount data from the server using the ID
    this.service.getdiscount(this.discountId).subscribe(
      (data) => {
        this.discount = data;
      },
      (error) => {
        console.log('Error retrieving discount:', error);
      }
    );
  }

  // Implement the method to update the discount
  updateDiscount() {
    this.service.updateDiscount(this.discount).subscribe(
      (data) => {
        console.log('Discount updated successfully:', data);
        // Perform any additional actions or navigation as needed
      },
      (error) => {
        console.log('Error updating discount:', error);
      }
    );
  }
}
