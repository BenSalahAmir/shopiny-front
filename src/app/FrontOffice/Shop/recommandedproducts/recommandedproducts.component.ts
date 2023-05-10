import { Component } from '@angular/core';
import { Product } from '../../model/Product';
import { ShopServiceService } from 'src/app/service/shopService/shop-service.service';

@Component({
  selector: 'app-recommandedproducts',
  templateUrl: './recommandedproducts.component.html',
  styleUrls: ['./recommandedproducts.component.css']
})
export class RecommandedproductsComponent {
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
