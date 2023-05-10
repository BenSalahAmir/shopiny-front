import { Component } from '@angular/core';
import { Product } from '../model/Product';
import { ShopServiceService } from 'src/app/service/shopService/shop-service.service';

@Component({
  selector: 'app-homepagefront',
  templateUrl: './homepagefront.component.html',
  styleUrls: ['./homepagefront.component.css']
})
export class HomepagefrontComponent {
  topRecommendedProducts!: Product[];

  constructor(private productService: ShopServiceService) { }

  ngOnInit(): void {
    this.productService.getTopRecommendedProducts().subscribe(products => {
      this.topRecommendedProducts = products.slice(0, 10); // Prendre les 10 premiers produits
    });
  }

  getImage(prod: any): string {
    return 'data:image/jpeg;base64,' + prod.imageProduct; // Replace "jpeg" with the actual image format
  }


}
