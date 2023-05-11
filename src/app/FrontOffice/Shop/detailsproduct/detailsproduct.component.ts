import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../model/Product';
import { Rating } from '../../model/Rating';
import { ShopServiceService } from 'src/app/service/shopService/shop-service.service';
import { RatingserviceService } from 'src/app/service/shopService/ratingservice.service';
import { UsersServiceService } from 'src/app/service/Users/users-service.service';

@Component({
  selector: 'app-detailsproduct',
  templateUrl: './detailsproduct.component.html',
  styleUrls: ['./detailsproduct.component.css']
})
export class DetailsproductComponent {
  productId!: number;
  product: Product | undefined;
  stars = [1, 2, 3, 4, 5];
  product1: any;
  productRating!: number;
  rating!:any;
  userId:any= this.service.getUserIdFromToken();



  constructor(private route: ActivatedRoute,private service:UsersServiceService, private productService: ShopServiceService, private ratingproduct:RatingserviceService) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
    this.getProductById(this.productId);
    this.getProductRating(this.productId);
    
  }
 

  getProductById(productId: number): void {
    this.productService.getProductById(productId)
      .subscribe(
        (data) => {
          this.product = data;
        },
        (error) => {
          console.log(error);
        }
      );
  }
  getImage(prod: any): string {
    return 'data:image/jpeg;base64,' + prod.imageProduct; // Replace "jpeg" with the actual image format
  }


  getProductRatinga(productId: number): void {
    this.ratingproduct.getProductRating(productId).subscribe(rating => {
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


  addRating(star: number): void {
    const newRating = new Rating();
    newRating.nbrEtoilesProduct = star;
  
    this.ratingproduct.addRating(newRating, this.productId, this.userId ) // on passe l'ID de l'utilisateur en dur pour l'exemple
      .subscribe(
        data => {
          console.log(data);
          //this.getProductRating();
          this.productRating = data.ratingValue; // mettre à jour la valeur de productRating
        },
        error => {
          console.log(error);
        }
      );
  }
  
  getProductRating(productId: number): void {
    this.ratingproduct.getProductRating(productId).subscribe(rating => {
      this.productRating = rating;
    }, error => {
      console.log('Error getting product rating:', error);
    });
  }
    


  
}
