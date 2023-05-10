import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Service/cart/cart.service';
import { Discount } from '../../model/discount.model';


@Component({
  selector: 'app-listdiscount',
  templateUrl: './listdiscount.component.html',
  styleUrls: ['./listdiscount.component.css']
})
export class ListdiscountComponent implements OnInit{
  discounts!: Discount[];
  
  constructor(private service:CartService,private router: Router) { }

  ngOnInit() {
    this.service.getDiscounts().subscribe(
      (data: Discount[]) => {
        this.discounts = data;
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  
  editDiscount(discountId: number) {
    // Navigate to the update discount component with the discount ID as a parameter
    this.router.navigate(['/admin/update-discount', discountId]);
  }
  deleteDiscount(idDiscount: number) {
    this.service.deleteDiscount(idDiscount).subscribe(
      response => {
        console.log(response);
        console.log(response.body); // log the response body
        // remove the deleted product from the local products array
        const index = this.discounts.findIndex(d => d.idDiscount === idDiscount);
        if (index >= 0) {
          this.discounts.splice(index, 1);
        }
        this.service.getDiscounts();
      },
      error => {
        console.log(error);
      }
    );
  }
}
