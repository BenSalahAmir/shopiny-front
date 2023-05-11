import { Component } from '@angular/core';
import { UsersServiceService } from 'src/app/service/Users/users-service.service';
import { ShopServiceService } from 'src/app/service/shopService/shop-service.service';

@Component({
  selector: 'app-liste-favoris',
  templateUrl: './liste-favoris.component.html',
  styleUrls: ['./liste-favoris.component.css']
})
export class ListeFavorisComponent {
  products!:any[];
  idClient ="a900a796-5fdf-4416-8f25-ac3ea01f9514" ;
  userId:any= this.servicea.getUserIdFromToken();

  constructor(private service:ShopServiceService,private servicea:UsersServiceService){}

  ngOnInit(): void {
    this.service.getProductsFavoris(this.userId).subscribe(res => {
      console.log(res)
      this.products=res
    })
}
getImage(prod: any): string {
  return 'data:image/jpeg;base64,' + prod.imageProduct; // Replace "jpeg" with the actual image format
}

}
