import { Component } from '@angular/core';
import { ShopServiceService } from 'src/app/service/shopService/shop-service.service';
import { Rating } from '../../model/Rating';
import { RatingserviceService } from 'src/app/service/shopService/ratingservice.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../model/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products!:any[];
  userId: string = "a900a796-5fdf-4416-8f25-ac3ea01f9514"; // mettre l'ID de l'utilisateur connecté ici
  isLoggedIn: boolean = false;
 
  totalPages: number = 0;
  currentPage: number = 1;
  pageSize: number = 6;
  pagesToShow: number[] = [];
  idClient = "a900a796-5fdf-4416-8f25-ac3ea01f9514";


  productIdd!: number;

  productId!: number;
  stars = [1, 2, 3, 4, 5];
  product1: any;
  productRating!: number;
  rating!:any;




  constructor(private route: ActivatedRoute, private service:ShopServiceService, private ratingService: RatingserviceService){}

  ngOnInit(): void {
    this.service.getProducts().subscribe(res => {
      console.log(res)
      this.products=res
      this.totalPages = Math.ceil(this.products.length / this.pageSize);
      this.currentPage = 1;
      this.pagesToShow = this.getArrayOfPage(this.totalPages);

    })
}



getImage(prod: any): string {
  return 'data:image/jpeg;base64,' + prod.imageProduct; // Replace "jpeg" with the actual image format
}


getArrayOfPage(totalPage: number): number[] {
  const pageArray: number[] = [];
  for (let i = 1; i <= totalPage; i++) {
    pageArray.push(i);
  }
  return pageArray;
}


nextPage() {
  this.currentPage++;
}

previousPage() {
  this.currentPage--;
}

goToPage(page: number) {
  this.currentPage = page;
}

ajouterProduitFavori(idProduit: number) {
  this.service.addFavori(this.idClient, idProduit).subscribe(
    data => {
      // Mettre à jour les produits
      const produit = this.products.find(p => p.idProduct === idProduit);
      produit.estDansFavoris = !produit.estDansFavoris;
    },
    error => console.log(error)
  );
}

//

getProductRatinga(productId: number): void {
  this.ratingService.getProductRating(productId).subscribe(rating => {
    this.productRating = rating;
    // Vous pouvez ajouter d'autres actions à effectuer ici après avoir récupéré le rating
  }, error => {
    console.log('Error getting product rating:', error);
    // Vous pouvez ajouter d'autres actions à effectuer ici en cas d'erreur
  });
}

getStars(rating: number): number[] {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(i <= rating ? i : 0);
  }
  return stars;
}

getProductRating(productId: number): void {
  this.ratingService.getProductRating(productId).subscribe(rating => {
    this.productRating = rating;
  }, error => {
    console.log('Error getting product rating:', error);
  });
}

addProductToCart(product: any){
  this.service.addProductToCart(product.idProduct,this.idClient).subscribe(responce => {
    console.log(responce);
  }, error => {
    console.log('Error adding product to cart:', error);
  });

}


}
