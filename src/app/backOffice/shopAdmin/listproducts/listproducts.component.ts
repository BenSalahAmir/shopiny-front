import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShopServiceService } from 'src/app/service/shopService/shop-service.service';

@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent {
  products!:any[];
  constructor(private service:ShopServiceService,private router: Router){}

  ngOnInit(): void {
    this.service.getProducts().subscribe(res => {
      console.log(res)
      this.products=res})
}

deleteProduct(product: any): void {
  const idUser="a900a796-5fdf-4416-8f25-ac3ea01f9514";
  if (confirm('Are you sure you want to delete this post?')) {
    this.service.deleteProduct(product.idProduct, idUser).subscribe(() => {
      this.products = this.products.filter(p => p !== product);
    });
  }
}

getImage(prod: any): string {
  return 'data:image/jpeg;base64,' + prod.imageProduct; // Replace "jpeg" with the actual image format
}
}